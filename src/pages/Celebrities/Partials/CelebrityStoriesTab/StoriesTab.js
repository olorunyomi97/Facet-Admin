import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardBody, Col, Container, Row, Modal } from 'reactstrap';
import StoriesTable from './StoriesTable';
import { deleteStory } from 'store/actions';
import DeleteStoriesModal from './Modals/StoriesDeleteModal';

const StoriesTab = props => {
    const { stories, user } = props;
    // console.log(user)
    // console.log(stories);
    const [modal, set_modal] = useState(false);
    const [modal_page, set_modal_page] = useState('');
    const [modal_size, set_modal_size] = useState('lg');
    const [stories_id, set_stories_id] = useState(null);

    const deleteFanectStory = () => {
        props.deleteStory(stories_id)
        console.log('got here hoe')
        console.log(stories_id)
    }

    const toggleModal = (modal_value, modal, size, stories_id = false) => {
        set_modal(modal_value);
        set_modal_page(modal);
        set_modal_size(size);
        if(stories_id) {
            set_stories_id(stories_id)
        }
    };

    const ModalDisplay = props => {
        if (modal_page == 'delete_modal') {
            return (
                <DeleteStoriesModal 
                    deleteStory = {deleteFanectStory} 
                    set_modal={set_modal} 
                    toggleModal={toggleModal} 
                    user={user} 
                />
            );
        }
    };

    return (
        <React.Fragment>
            <MetaTags>
                <title>Celebrities | Fanect </title>
            </MetaTags>
            <nav className="navbar p-0">
                <div className="container-fluid">
                    <p className="celeb-no">Total Number of Stories ({stories.length})</p>
                    <div className="d-flex pb-3">
                        <div className="mt-1">{/* <button className="celeb-btn" >Send Push</button> */}</div>
                        <div className="mt-1">
                            {/* <button className="celeb-acc-btn">Create Celebrity Account</button> */}
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                <StoriesTable stories={stories} toggleModal={toggleModal}  />
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

export default StoriesTab;
