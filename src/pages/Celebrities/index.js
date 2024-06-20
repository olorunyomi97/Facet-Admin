import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Container, Row, Modal } from 'reactstrap';
import { getAllCelebrities, setSubscription, apiError } from '../../store/actions';
import CelebrityTable from './CelebrityTable';
import PushModal from './Modals/PushModal';
import CreateCelebrityModal from './Modals/CreateCelebrityModal';
import SubscriptionPriceModal from './Modals/SubscriptionpriceModal';
import '../../assets/css/celebritycss/celebrity.css';

const Celebrities = props => {
    const { loading, celebrities } = props;
    const [modal, set_modal] = useState(false);
    const [modal_page, set_modal_page] = useState('');
    const [modal_size, set_modal_size] = useState('lg');

    useEffect(() => {
        props.getAllCelebrities();
    }, [getAllCelebrities]);

    const DisplayCelebrities = props => {
        const { active, celebrities } = props;
        return <CelebrityTable celebrities={celebrities.data} />;
    };

    const toggleModal = (modal_value, modal, size) => {
        set_modal(modal_value);
        set_modal_page(modal);
        set_modal_size(size);
    };

    const ModalDisplay = props => {
        if (modal_page == 'push_modal') {
            return <PushModal set_modal={set_modal} />;
        }
        if (modal_page == 'subscription_price') {
            return <SubscriptionPriceModal set_modal={set_modal} />;
        }
        if (modal_page == 'create_celeb') {
            return <CreateCelebrityModal set_modal={set_modal} />;
        }
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Celebrities | Fanect </title>
                </MetaTags>
                <Container fluid>
                    <nav className="navbar p-0">
                        <div className="container-fluid">
                            <p className="celeb-no">
                                Celebrities({celebrities.data != undefined ? celebrities.data.length : '--'})
                            </p>
                            <div className="d-flex pb-3">
                                <div>
                                    <p
                                        className="celeb-price"
                                        onClick={() => {
                                            toggleModal(true, 'subscription_price', 'sm');
                                        }}
                                    >
                                        Set minimum Subscription Price
                                    </p>
                                </div>
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
                                        className="celeb-acc-btn"
                                        onClick={() => {
                                            toggleModal(true, 'create_celeb', 'sm');
                                        }}
                                    >
                                        Create Celebrity Account
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
                                                Loading Celebrities
                                            </Link>
                                        </div>
                                    ) : (
                                        <DisplayCelebrities celebrities={celebrities} />
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
    const { error, celebrities, loading } = state.Celebrities;
    return { error, loading, celebrities };
};

export default withRouter(connect(mapStateToProps, { getAllCelebrities, setSubscription, apiError })(Celebrities));
