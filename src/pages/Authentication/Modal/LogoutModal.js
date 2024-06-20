import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const LogoutModal = (props) => {
    const { toggleModal } = props;
    return (
        <div>
            <ModalBody className="modal-contentt" style={{ background: '#1c1c1c' }}>
                <div className="col-md-12">
                    <p className="create-celebs mb-2 mt-2 text-center">Are you sure you want to log out?</p>
                    <div className="modal-card" style={{ borderRadius: '33px' }}>
                        {/* login input */}
                        <div className="row login-input-styles">
                            <div className="col-md-6">
                                <Link onClick={() => toggleModal(false, 'logout_admin', 'sm')} to="#">
                                    <button className="cancel-btn"> Cancel </button>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to="/logout">
                                    <button className="block-btn"> Logout </button>
                                </Link>
                            </div>
                        </div>
                        {/* login input */}
                        <div></div>
                    </div>
                </div>
            </ModalBody>
        </div>
    )
}

export default LogoutModal;