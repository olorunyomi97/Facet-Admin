import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardBody, Col, Container, Row, Modal } from 'reactstrap';
import { getFanDetails, apiError } from '../../../store/actions';
import { isEmpty } from 'lodash';
import PushModal from '../Modals/singleFanModal';
import UpgradeModal from '../Modals/upgradeFanModal';
import BlockModal from '../Modals/BlockModal';
import FanTab from './FanTab';
import '../../../assets/css/celebritycss/celebrity.css';

const FanDetails = props => {
    const { loading, fan } = props;
    console.log('fan here');
    console.log(fan);

    const [modal, set_modal] = useState(false);
    const [modal_page, set_modal_page] = useState('');
    const [modal_size, set_modal_size] = useState('lg');

    useEffect(() => {
        props.getFanDetails(props.match.params.id);
    }, [getFanDetails]);

    const DisplayFans = props => {
        const { active, fan } = props;
        return <FanTab fan={fan.data} />;
    };

    const toggleModal = (modal_value, modal, size) => {
        set_modal(modal_value);
        set_modal_page(modal);
        set_modal_size(size);
    };

    const ModalDisplay = props => {
        if (modal_page == 'push_modal') {
            return <PushModal set_modal={set_modal} fan={fan.data} />;
        }
        if (modal_page == 'upgrade_modal') {
            return <UpgradeModal set_modal={set_modal} fan={fan.data} />;
        }
        if (modal_page == 'block_modal') {
            return <BlockModal set_modal={set_modal} fan={fan.data} />;
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
                        {loading ? (
                                <div className="text-center my-3">
                                    <Link to="#" className="text-success">
                                        <i className="bx bx-loader bx-spin font-size-18 align-middle me-2" />
                                        Loading...
                                    </Link>
                                </div>
                            ) : (
                            <p className="celeb-no" style={{textTransform: 'capitalize'}}>{fan.data.user.username}</p>
                        )}
                            <div className="d-flex pb-3">
                                <div></div>
                                <div className="mt-1">
                                    <button
                                        className="celeb-btn"
                                        onClick={() => {
                                            toggleModal(true, 'push_modal', 'sm');
                                        }}
                                    >
                                        Send Push
                                    </button>
                                </div>
                                <div className="mt-1">
                                    <button
                                        className="celeb-btn"
                                        onClick={() => {
                                            toggleModal(true, 'upgrade_modal', 'sm');
                                        }}
                                    >
                                        Switch to Celebrity
                                    </button>
                                </div>
                                <div className="mt-1">
                                    <button
                                        className="celeb-acc-btn"
                                        onClick={() => {
                                            toggleModal(true, 'block_modal', 'sm');
                                        }}
                                    >
                                        Block
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
                                                Loading Tab
                                            </Link>
                                        </div>
                                    ) : (
                                        <DisplayFans fan={fan} />
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

// export default CelebrityDetail;

const mapStateToProps = state => {
    const { error, fan, loading } = state.Fans;
    return { error, loading, fan };
};

export default withRouter(connect(mapStateToProps, { getFanDetails, apiError })(FanDetails));
