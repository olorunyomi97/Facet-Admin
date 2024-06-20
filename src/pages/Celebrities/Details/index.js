import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardBody, Col, Container, Row, Modal } from 'reactstrap';
import { getSingleCelebrity, blockCelebrity, apiError } from '../../../store/actions';
import { isEmpty } from 'lodash';
import PushModal from '../Modals/SinglePushModal';
import BlockModal from '../Modals/BlockModal';
import DetailsTab from './DetailsTab';
import '../../../assets/css/celebritycss/celebrity.css';

const CelebDetails = props => {
    const { loading, celebrity_detail } = props;
    console.log('celebity here');
    console.log(celebrity_detail);
    // console.log(celebrity_detail.data)

    const [modal, set_modal] = useState(false);
    const [modal_page, set_modal_page] = useState('');
    const [modal_size, set_modal_size] = useState('lg');

    useEffect(() => {
        props.getSingleCelebrity(props.match.params.id);
    }, [getSingleCelebrity]);

    const DisplayCelebrities = props => {
        const { active, celebrity_detail } = props;
        return <DetailsTab celebrity_detail={celebrity_detail.data} />;
    };

    const toggleModal = (modal_value, modal, size) => {
        set_modal(modal_value);
        set_modal_page(modal);
        set_modal_size(size);
    };

    const ModalDisplay = props => {
        if (modal_page == 'push_modal') {
            return <PushModal set_modal={set_modal} celebrity_detail={celebrity_detail.data}/>;
        }
        if (modal_page == 'block_modal') {
            return <BlockModal set_modal={set_modal} celebrity_detail={celebrity_detail.data}/>;
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
                            {loading ? (
                                <div className="text-center my-3">
                                    <Link to="#" className="text-success">
                                        <i className="bx bx-loader bx-spin font-size-18 align-middle me-2" />
                                        Loading...
                                    </Link>
                                </div>
                            ) : (
                                <p className="celeb-no" style={{textTransform: 'capitalize'}}>{celebrity_detail.data.user.username}</p>
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
                            {/* <CelebrityTab /> */}
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
                                        <DisplayCelebrities celebrity_detail={celebrity_detail} />
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
    const { error, celebrity_detail, loading } = state.Celebrities;
    return { error, loading, celebrity_detail };
};

export default withRouter(connect(mapStateToProps, { getSingleCelebrity, apiError })(CelebDetails));
