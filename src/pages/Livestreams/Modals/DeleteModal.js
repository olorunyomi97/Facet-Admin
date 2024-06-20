import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
// import '../../../../assets/css/celebrityCSS/celebrity.css';

const DeleteModal = props => {
    const { isOpen, toggleModal, stories_id } = props;
    return (
        <div>
            <ModalBody className="modal-contentt" style={{ background: '#1c1c1c' }}>
                <div className="col-md-12">
                    <p className="create-celebs mb-2 mt-2 text-center">Are you sure you want to delete this story?</p>
                    <div className="modal-card" style={{ borderRadius: '33px' }}>
                        {/* login input */}
                        <div className="row login-input-styles">
                            <div className="col-md-6">
                                <Link onClick={() => props.toggleModal(false, 'delete_modal', 'sm')} to="#">
                                    <button className="cancel-btn"> Cancel </button>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to="#">
                                    <button className="block-btn"> Delete Story </button>
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

export default DeleteModal;
