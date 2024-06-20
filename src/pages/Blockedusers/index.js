import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardBody, Col, Container, Row, Modal } from 'reactstrap';
import { getAllBlockedusers, unblockUser, apiError } from 'store/actions';
import BlockedUsersTable from './BlockedusersTable';
import UnblockModal from './Modals/UnblockModal';

const Blockedusers = props => {
    const { loading, blockedusers } = props;
    // console.log(blockedusers);

    const [modal, set_modal] = useState(false);
    const [modal_page, set_modal_page] = useState('');
    const [modal_size, set_modal_size] = useState('lg');
    const [user_id, set_user_id] = useState(null);

    useEffect(() => {
        props.getAllBlockedusers();
    }, [getAllBlockedusers]);

    const unblockFanectUser = () => {
        props.unblockUser(user_id);
        // console.log('got here hoe')
        // console.log(user_id)
    };

    const DisplayBlockedusers = props => {
        const { active, blockedusers } = props;
        return <BlockedUsersTable blockedusers={blockedusers.data} toggleModal={toggleModal} />;
    };

    const toggleModal = (modal_value, modal, size, user_id = false) => {
        set_modal(modal_value);
        set_modal_page(modal);
        set_modal_size(size);
        if (user_id) {
            set_user_id(user_id);
        }
    };

    const ModalDisplay = props => {
        if (modal_page == 'unblock_modal') {
            return <UnblockModal unblockUser={unblockFanectUser} set_modal={set_modal} toggleModal={toggleModal} blockedusers={blockedusers.data}/>;
        }
        // if(modal_page == 'delete_modal') { return <DeleteAdminModal deleteAdmin = {deleteFanectAdmin} toggleModal = {toggleModal} />}
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Blocked Users | Fanect </title>
                </MetaTags>
                <nav className="navbar p-0">
                    <div className="container-fluid">
                        <p className="celeb-no">Blocked Users ({blockedusers.data != undefined ? blockedusers.data.length : '--'})</p>
                    </div>
                </nav>
                <Row>
                    <Col xs="12">
                        <div className="p-0">
                            <div className="card" style={{ borderRadius: '20px' }}>
                                {
                                    loading ? (
                                        <div className="text-center my-3">
                                            <Link to="#" className="text-success">
                                                <i className="bx bx-loader bx-spin font-size-18 align-middle me-2" />
                                                Loading Blocked Users
                                            </Link>
                                        </div>
                                    ) : (
                                        <DisplayBlockedusers blockedusers={blockedusers} />
                                        // <BlockedUsersTable blockedusers={blockedusers.data} toggleModal={toggleModal} />
                                    )
                                    // <DisplayCelebrities celebrities = { celebrities } />
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
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

// export default Blockedusers;

const mapStateToProps = state => {
    const { error, blockedusers, loading } = state.BlockedUsers;
    return { error, blockedusers, loading };
};

export default withRouter(connect(mapStateToProps, { getAllBlockedusers, unblockUser, apiError })(Blockedusers));
