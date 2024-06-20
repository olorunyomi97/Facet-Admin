import React, { useState, useEffect } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { push_error_notifications, push_success_notifications } from 'helpers/notify_helper';

const UnblockModal = props => {
    const { unblockUser, set_modal, modal_loading, error, notify_success, blockedusers } = props;
    console.log(blockedusers);
    useEffect(() => {
        if (error) {
            push_error_notifications(error);
        }

        if (notify_success) {
            // push_success_notifications('This Fan has been unblocked');
            set_modal(false);
        }
    });

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
                    <p>unblocking User</p>
                </Link>
            </div>
            <ModalBody className="modal-contentt" style={{ background: '#1c1c1c' }}>
                <div className="col-md-12">
                    <p className="create-celebs mb-2 mt-2 text-center">Are you sure you want to unblock this user?</p>
                    <div className="modal-card" style={{ borderRadius: '33px' }}>
                        {/* login input */}
                        <div className="row login-input-styles">
                            {/* <div className="col-md-6">
                                <button
                                    className="cancel-btn"
                                    onClick={() => props.toggleModal(false, 'unblock_modal', 'sm')}
                                    to="#"
                                >
                                    {' '}
                                    Cancel{' '}
                                </button>
                            </div> */}
                            <div className="col-md-6">
                                <Link onClick={() => props.toggleModal(false, 'unblock_modal', 'sm')} to="#">
                                    <button className="cancel-btn"> Cancel </button>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <button className="unblocked-btn" onClick={() => unblockUser()}>
                                    {' '}
                                    Unblock{' '}
                                </button>
                            </div>
                        </div>
                        {/* login input */}
                    </div>
                </div>
            </ModalBody>
        </div>
    );
};

// export default UnblockModal;

const mapStateToProps = state => {
    const { error, modal_loading, notify_success } = state.BlockedUsers;
    return { error, modal_loading, notify_success };
};
export default withRouter(connect(mapStateToProps)(UnblockModal));
