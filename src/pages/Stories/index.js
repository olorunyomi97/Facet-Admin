import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Container, Row, Modal } from 'reactstrap';
import { getAllStories, deleteStory,apiError } from 'store/actions';
import DeleteStoriesModal from './Modals/DeleteModal';
import StoriesTable from './StoriesTable';

const Stories = props => {
    const { loading, stories } = props;
    console.log(stories);
    const [modal, set_modal] = useState(false);
    const [modal_page, set_modal_page] = useState('');
    const [modal_size, set_modal_size] = useState('lg');
    const [stories_id, set_stories_id] = useState(null);

    useEffect(() => {
        props.getAllStories();
    }, [getAllStories]);

    const deleteFanectStory = () => {
        props.deleteStory(stories_id)
        // console.log('got here hoe')
        // console.log(stories_id)
    }

    const DisplayStories = props => {
        const { active, stories } = props;
        return <StoriesTable stories={stories.data} toggleModal={toggleModal} />;
    };

    const toggleModal = (modal_value, modal, size, stories_id = false) => {
        set_modal(modal_value);
        set_modal_page(modal);
        set_modal_size(size);
        if(stories_id) {
            set_stories_id(stories_id)
        }
    };

    // const ModalDisplay = props => {
    //     if(modal_page == 'delete_modal') { return <DeleteStoriesModal deleteStory = {deleteFanectStory} toggleModal = {toggleModal} />}
    // }
    const ModalDisplay = props => {
        if (modal_page == 'delete_modal') {
            return <DeleteStoriesModal deleteStory = {deleteFanectStory} toggleModal={toggleModal} />;
        }
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Stories | Fanect </title>
                </MetaTags>
                <Container fluid>
                    <nav className="navbar p-0">
                        <div className="container-fluid">
                            <p className="celeb-no">Stories</p>
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
                                                Loading Stories
                                            </Link>
                                        </div>
                                    ) : (
                                        <DisplayStories stories={stories} />
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

// export default Stories;

const mapStateToProps = state => {
    const { error, stories, loading } = state.Stories;
    return { error, stories, loading };
};

export default withRouter(connect(mapStateToProps, { getAllStories, deleteStory, apiError })(Stories));
