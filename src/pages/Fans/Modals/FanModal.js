import React , { useState, useEffect } from 'react';
import { Modal, ModalBody } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fanPushNotifications, apiError } from '../../../store/actions';
import { push_error_notifications, push_success_notifications } from 'helpers/notify_helper';// import '../../../../assets/css/celebrityCSS/celebrity.css';

 const FanModal = (props) => {
    const { modal_loading, error, notify_success, set_modal } = props;


    const handleValidSubmit = (event, values) => {
        console.log(fanPushNotifications);
        event.preventDefault();
        props.fanPushNotifications(values);
    };

    useEffect(() => {
        if (error) {
            push_error_notifications(error);
        }

        if (notify_success) {
            push_success_notifications('Push Notification sent');
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
                    <p>Sending Fan Push Notification</p>
                </Link>
            </div>
            <ModalBody className="modal-contentt"style={{background:'#1c1c1c'}}>
                <div className="col-md-12">
                    <p className="push-celebs mb-2 mt-2"style={{ textAlign: "left"}}>Send Push to all Fans</p>
                    <div className="modal-card"style={{borderRadius:'33px'}}>
                        {/* login input */}
                        {/* <div className="login-input-styles mb-3">
                            <textarea className="login-form" type="password" rows="6"/>
                        </div> */}
                         <AvForm
                            className="form-horizontal text-left mb-2 mt-0"
                            style={{ textAlign: 'left' }}
                            onValidSubmit={(e, v) => {
                                e.preventDefault();
                                handleValidSubmit(e, v);
                            }}
                        >
                            <div className="login-input-styles mb-3">
                                <AvField
                                    name="title"
                                    className="celeb-form form-control login-form text-left mt-3"
                                    placeholder="Notification Title"
                                    type="text"
                                    validate={{
                                        required: { value: true, errorMessage: 'Notification title not placed yet' },
                                    }}
                                />
                            </div>
                            <div className="login-input-styles mb-3">
                                <AvField
                                    name="message"
                                    className="celeb-form form-control login-form text-left mt-3"
                                    placeholder="Compose Notification"
                                    type="textarea"
                                    rows="6"
                                    validate={{
                                        required: { value: true, errorMessage: 'Notification Message not placed yet' },
                                    }}
                                />
                            </div>
                            <div className="login-input-styles">
                                <button className="celebs-btn" type="submit">
                                    Send
                                </button>
                                {/* <Link to="#"><button className="celebs-btn" onClick = { () => set_modal(false) }> Send </button></Link> */}
                            </div>
                        </AvForm>
                        {/* login input */}
                    <div>
                    </div>
                    </div>
                </div>
            </ModalBody>
        </div>
    )
}

// export default  FanModal;

const mapStateToProps = state => {
    const { error, modal_loading, notify_success } = state.FanPushNotifications;
;
    return { error, modal_loading, notify_success };
};
export default withRouter(connect(mapStateToProps, { fanPushNotifications, apiError })(FanModal));
