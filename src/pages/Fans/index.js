import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Container, Row, Modal } from 'reactstrap';
import { getAllFans, apiError } from '../../store/actions';
import { isEmpty } from 'lodash';
import FanModal from './Modals/FanModal';
import FanTable from './FanTable';

const Fans = props => {
    const { loading, fans } = props;

    const [modal, set_modal] = useState(false);
    const [modal_page, set_modal_page] = useState('');
    const [modal_size, set_modal_size] = useState('lg');

    useEffect(() => {
        props.getAllFans();
    }, [getAllFans]);

    const DisplayFans = props => {
        const { active, fans } = props;
        return <FanTable fans={fans.data} />;
    };

    const toggleModal = (modal_value, modal, size) => {
        set_modal(modal_value);
        set_modal_page(modal);
        set_modal_size(size);
    };

    const ModalDisplay = props => {
        if (modal_page == 'fan_modal') {
            return <FanModal set_modal={set_modal} />;
        }
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Fans | Fanect </title>
                </MetaTags>
                <Container fluid>
                    <nav className="navbar p-0">
                        <div className="container-fluid">
                            <p className="celeb-no">Fans({fans.data != undefined ? fans.data.length : '--'})</p>
                            <div className="d-flex pb-3">
                                <div>{/* <p className="celeb-price">Set minimum Subscription Price</p> */}</div>
                                <div className="mt-1">
                                    {/* <button className="celeb-btn" onClick={ () => { toggleModal(true, 'push_modal', 'sm')}}>Send Push</button> */}
                                </div>
                                <div className="mt-1">
                                    <button
                                        className="celeb-btn"
                                        onClick={() => {
                                            toggleModal(true, 'fan_modal', 'sm');
                                        }}
                                    >
                                        Send Push
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
                                                Loading Fans
                                            </Link>
                                        </div>
                                    ) : (
                                        <DisplayFans fans={fans} />
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
    const { error, fans, loading } = state.Fans;
    return { error, loading, fans };
};
export default withRouter(connect(mapStateToProps, { getAllFans, apiError })(Fans));
