import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Container, Row, Modal } from 'reactstrap';
import { getAllAdmins, createAdmin, deleteAdmin, apiError } from '../../store/actions';
import { isEmpty } from 'lodash';
import CreateAdminModal from './Modals/CreateAdminModal';
import DeleteAdminModal from './Modals/DeleteAdminModal';
import AdminTable from './AdminTable';

const Admins = props => {
    const { loading, admins } = props;
    console.log(props.admins.data);
    const [modal, set_modal] = useState(false);
    const [modal_page, set_modal_page] = useState('');
    const [modal_size, set_modal_size] = useState('lg');
    const [admin_id, set_admin_id] = useState(null);

    useEffect(() => {
        props.getAllAdmins();
    }, [getAllAdmins]);

    const deleteFanectAdmin = () => {
        props.deleteAdmin(admin_id);
    };

    const DisplayAdmins = props => {
        const { active, admins } = props;
        return <AdminTable admins={admins.data} toggleModal={toggleModal} />;
    };

    const toggleModal = (modal_value, modal, size, admin_id = false) => {
        set_modal(modal_value);
        set_modal_page(modal);
        set_modal_size(size);
        if (admin_id) {
            set_admin_id(admin_id);
        }
    };

    const ModalDisplay = props => {
        if (modal_page == 'create_admin') {
            return <CreateAdminModal set_modal={set_modal} />;
        }
        if (modal_page == 'delete_modal') {
            return <DeleteAdminModal deleteAdmin={deleteFanectAdmin} toggleModal={toggleModal} />;
        }
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Admins | Fanect </title>
                </MetaTags>
                <Container fluid>
                    <nav className="navbar p-0">
                        <div className="container-fluid">
                            <p className="celeb-no">Admins({admins.data != undefined ? admins.data.length : '--'})</p>
                            <div className="d-flex pb-3">
                                <div>{/* <p className="celeb-price">Set minimum Subscription Price</p> */}</div>
                                <div className="mt-1">
                                    {/* <button className="celeb-btn" onClick={ () => { toggleModal(true, 'push_modal', 'sm')}}>Send Push</button> */}
                                </div>
                                <div className="mt-1">
                                    <button
                                        className="celeb-acc-btn"
                                        onClick={() => {
                                            toggleModal(true, 'create_admin', 'sm');
                                        }}
                                    >
                                        Create Admin Account
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <Row>
                        <Col xs="12">
                            <div className="p-0">
                                <div className="card" style={{ borderRadius: '20px' }}>
                                    {loading ? (
                                        <div className="text-center my-3">
                                            <Link to="#" className="text-success">
                                                <i className="bx bx-loader bx-spin font-size-18 align-middle me-2" />
                                                Loading Admins
                                            </Link>
                                        </div>
                                    ) : (
                                        <DisplayAdmins admins={admins} />
                                    )}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Modal
                isOpen={modal}
                role="dialog"
                autoFocus={true}
                size={modal_size}
                centered={true}
                className="exampleModal"
                tabIndex="-1"
                toggle={() => {
                    set_modal(!modal);
                }}
            >
                <div className="modal-content">
                    <ModalDisplay />
                </div>
            </Modal>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    const { error, admins, loading } = state.Admins;
    return { error, loading, admins };
};

export default withRouter(connect(mapStateToProps, { getAllAdmins, createAdmin, deleteAdmin, apiError })(Admins));
