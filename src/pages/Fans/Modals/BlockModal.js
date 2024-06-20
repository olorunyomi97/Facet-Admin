import React, { useState, useEffect } from 'react';
import { ModalBody } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AvInput from 'availity-reactstrap-validation/lib/AvInput';
import { blockFan, apiError } from '../../../store/actions';
import { push_error_notifications, push_success_notifications } from 'helpers/notify_helper';

const BlockFanModal = props => {
    const { modal_loading, error, notify_success, set_modal,fan } = props;
    console.log(fan.user.username)

    const handleValidSubmit = (event, values) => {
        event.preventDefault();
        const block_data = { ...{ user_id: props.match.params.id }, ...values };
        // const block_data = { ...values, user_id: props.match.params.id }
        // console.log(block_data);
        props.blockFan(block_data);
    };

    useEffect(() => {
        if (error) {
            push_error_notifications(error);
        }

        if (notify_success) {
            // push_success_notifications('This Fan has been blocked');
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
                    <p>Blocking {fan.user.username}</p>
                </Link>
            </div>
            <ModalBody className="modal-contentt" style={{ background: '#1c1c1c' }}>
                <div className="col-md-12">
                    <p className="create-celebs mb-2 mt-2">Block <span className='block_fan' style={{ textTransform:'capitalize'}}>{fan.user.username} ?</span></p>
                    <div className="modal-card" style={{ borderRadius: '33px' }}>
                        {/* login input */}
                        <AvForm
                            className="form-horizontal text-left mb-2 mt-0"
                            style={{ textAlign: 'left' }}
                            onValidSubmit={(e, v) => {
                                e.preventDefault();
                                handleValidSubmit(e, v);
                            }}
                        >
                            <div class=" mb-3">
                                <AvField class="form-control " name="reason" type="select">
                                    <option selected>Choose reason</option>
                                    <option value="spam">Spam</option>
                                    <option value="sexual content">Sexual Content</option>
                                    <option value="hate speech">Hate Speech</option>
                                </AvField>
                            </div>

                            <div className="login-input-styles mb-3">
                                <AvInput
                                    name="description"
                                    className="login-form"
                                    type="textarea"
                                    rows="6"
                                    placeholder="Text"
                                />
                            </div>
                            <div className="row login-input-styles">
                                <div className="col-md-6">
                                    <button
                                        className="cancel-btn"
                                        type="submit"
                                        onClick={() => props.set_modal(false, 'block_modal', 'sm')}
                                    >
                                        Cancel
                                    </button>
                                </div>
                                <div className="col-md-6">
                                    <button className="block-btn" type="submit">
                                        Block
                                    </button>
                                </div>
                            </div>
                        </AvForm>
                        {/* login input */}
                    </div>
                </div>
            </ModalBody>
        </div>
    );
};

// export default BlockFanModal;

const mapStateToProps = state => {
    const { error, modal_loading, notify_success } = state.Fans;
    return { error, modal_loading, notify_success };
};
export default withRouter(connect(mapStateToProps, { blockFan, apiError })(BlockFanModal));
