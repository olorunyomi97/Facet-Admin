import React, { useState, useEffect } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteStory } from '../../../../store/actions'

const DeleteStoryModal = props => {
    const { error, set_modal, story } = props;
    console.log(story.data[0])

    const [modal_loading, set_modal_loading] = useState(false);

    const delete_single_story = () => {
        set_modal_loading(true);
        props.deleteStory(props.match.params.id);
    }

    // useEffect(() => {
    //     if (error) {
    //         push_error_notifications(error);
    //     }

    //     if (notify_success) {
    //         push_success_notifications('Story succeessfully deleted');
    //         set_modal(false);
    //     }
    // });

    return (
        <div>
            <ModalBody className="modal-contentt" style={{ background: '#1c1c1c' }}>
                <div className="col-md-12">
                    <p className="create-celebs mt-2 text-center">Delete this Story {story.data[0]._id}</p>
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
                                <Link to="#"  
                                    onClick = {() => delete_single_story()}>
                                    <button className="block-btn"> 
                                        {' '}
                                        Delete{' '} 
                                    </button>
                                </Link>
                            </div>
                            {/* <div className="col-md-6">
                                <Link onClick = {() => props.toggleModal(false, 'delete_modal', 'sm' )} to="#"><button className="cancel-btn"> Cancel </button></Link>
                            </div>
                            <div className="col-md-6">
                                <Link to="#" onClick = {() => deleteAdmin()}><button className="block-btn"> Delete Admin </button></Link>
                            </div> */}
                        </div>
                        {/* login input */}
                        <div></div>
                    </div>
                </div>
            </ModalBody>
        </div>
    );
};

// export default DeleteStoryModal;

const mapStateToProps = state => {
    const { error, story, loading } = state.Stories;
    return { error, loading, story };
};
export default withRouter(connect(mapStateToProps, { deleteStory })(DeleteStoryModal));

