import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Container, Row, Modal } from 'reactstrap';
import { getAllContents, deleteContent, apiError } from '../../store/actions';
import ContentTable from './ContentTable';
import DeleteModal from './Modal/DeleteModal';

const Contents = props => {
    const { loading, contents } = props;

    const [modal, set_modal] = useState(false);
    const [modal_page, set_modal_page] = useState('');
    const [modal_size, set_modal_size] = useState('lg');
    const [content_id, set_content_id] = useState(null);

    useEffect(() => {
        props.getAllContents();
    }, [getAllContents]);

    const deleteFanectContent = () => {
        props.deleteContent(content_id);
        // console.log('got here hoe')
        // console.log(admin_id)
    };

    const DisplayContent = props => {
        const { active, contents } = props;
        return <ContentTable contents={contents.data} toggleModal={toggleModal} />;
    };

    const toggleModal = (modal_value, modal, size, content_id = false) => {
        set_modal(modal_value);
        set_modal_page(modal);
        set_modal_size(size);
        if (content_id) {
            set_content_id(content_id);
        }
    };

    const ModalDisplay = props => {
        if (modal_page == 'delete_modal') {
            return <DeleteModal deleteContent={deleteFanectContent} toggleModal={toggleModal} />;
        }
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Content | Fanect </title>
                </MetaTags>
                <Container fluid>
                    <nav className="navbar p-0">
                        <div className="container-fluid">
                            <p className="celeb-no">All Content</p>
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
                                                Loading Content
                                            </Link>
                                        </div>
                                    ) : (
                                        <DisplayContent contents={contents} />
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

// export default Content;

const mapStateToProps = state => {
    const { error, contents, loading } = state.Contents;
    return { error, contents, loading };
};

export default withRouter(connect(mapStateToProps, { getAllContents, deleteContent, apiError })(Contents));
