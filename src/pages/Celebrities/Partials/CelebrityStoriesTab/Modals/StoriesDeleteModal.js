import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Modal, ModalBody } from 'reactstrap';
import { deleteStory } from 'store/stories/actions';
import { push_error_notifications, push_success_notifications } from 'helpers/notify_helper';

const StoriesDeleteModal = props => {
    const { deleteStory, modal_loading, error, notify_success, set_modal, _id, user } = props;
    console.log(props)

    useEffect(() => {
        if (error) {
            push_error_notifications(error);
        }

        if (notify_success) {
            push_success_notifications('Content succeessfully deleted');
            set_modal(false);
        }
    });

    const deleteFanectStory = () => {
        props.deleteStory(props.match.params.id);
        console.log(props.match.params.id)
    }

    return (
        <div>
            <div
                className={`position-absolute w-100 h-100 bg-dark align-items-center justify-content-center d-flex ${
                    modal_loading ? 'visible' : 'invisible'
                }`}
                style={{ zIndex: 10, opacity: 0.9 }}
            >
                <Link to="#" className="text-success text-center font-weight-bolder">
                    <i className="bx bx-loader bx-spin font-size-24 text-center align-middle me-2 mb-2" />
                    <p>Deleting Content</p>
                </Link>
            </div>
            <ModalBody className="modal-contentt" style={{ background: '#1c1c1c' }}>
                <div className="col-md-12">
                    <p className="create-celebs mb-2 mt-2 text-center">Are you sure you want to Delete <span style={{textTransform: 'capitalize', color: '#1fcc79' }}>{user.username}'s</span> story?</p>
                    <div className="modal-card" style={{ borderRadius: '33px' }}>
                        {/* login input */}
                        <div className="row login-input-styles">
                            <div className="col-md-6">
                                <Link 
                                    to="#"
                                    onClick={() => {
                                        set_modal(false);
                                    }}
                                >
                                    <button className="cancel-btn"> Cancel </button>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to="#" onClick={() => deleteFanectStory()}>
                                    <button className="block-btn"> Delete Content </button>
                                </Link>
                            </div>
                        </div>
                        {/* login input */}
                        <div></div>
                    </div>
                </div>
            </ModalBody>
        </div>
    );
};

// export default StoriesDeleteModal;


const mapStateToProps = state => {
    const { error, modal_loading, notify_success } = state.Contents;
    return { error, modal_loading, notify_success };
};
export default withRouter(connect(mapStateToProps, { deleteStory })(StoriesDeleteModal));

