import React, { useState, useEffect } from 'react';
import { ModalBody } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSubscription, apiError } from '../../../store/actions';
import { push_error_notifications, push_success_notifications } from 'helpers/notify_helper';

const SubscriptionpriceModal = props => {
    const { modal_loading, error, notify_success, set_modal } = props;

    const handleValidSubmit = (event, values) => {
        // console.log(setSubscription);
        event.preventDefault();
        props.setSubscription(values);
    };

    useEffect(() => {
        if (error) {
            push_error_notifications(error);
        }

        if (notify_success) {
            push_success_notifications('Minimum Subscription price placed');
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
                    <p>Setting Minimum Subscription Fee</p>
                </Link>
            </div>
            <ModalBody className="modal-contentt" style={{ background: '#1c1c1c' }}>
                <div className="col-md-12">
                    <p className="push-celebs mb-2 mt-2" style={{ textAlign: 'left' }}>
                        Subscription Price
                    </p>
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
                            <p className="sub-price" style={{ textAlign: 'left', color: '#E3E3E3' }}>
                                <small>Minimum Subscription Price</small>
                            </p>
                            <div className="login-input-styles mb-3">
                                <AvField
                                    name="minimum_subscription"
                                    className="celeb-form form-control login-form text-left mt-3"
                                    placeholder="$5.00"
                                    type="numeric"
                                    validate={{
                                        required: { value: true, errorMessage: 'Minimum Subscription not placed yet' },
                                    }}
                                />
                            </div>
                            <div className="login-input-styles">
                                <button className="celebs-btn" type="submit">
                                    Send
                                </button>
                            </div>
                        </AvForm>
                        {/* login input */}
                        <div></div>
                    </div>
                </div>
            </ModalBody>
        </div>
    );
};

// export default SubscriptionpriceModal;

const mapStateToProps = state => {
    const { error, modal_loading, notify_success } = state.MinimumSubscription;
    return { error, modal_loading, notify_success };
};
export default withRouter(connect(mapStateToProps, { setSubscription, apiError })(SubscriptionpriceModal));
