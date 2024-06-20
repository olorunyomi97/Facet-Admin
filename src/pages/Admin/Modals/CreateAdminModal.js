import React, { useEffect, useState } from 'react';
import { ModalBody } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createAdmin, apiError } from '../../../store/actions';
// import { push_error_notifications } from 'helpers/notify_helper';

const CreateAdminModal = props => {
    const { modal_loading, error, notify_success, set_modal } = props;

    const handleValidSubmit = (event, values) => {
        // console.log(values);
        event.preventDefault();
        props.createAdmin(values);
    };

    useEffect(() => {
        // if (error) {
        //     push_error_notifications(error);
        // }

        if (notify_success) {
            push_success_notifications('Admin successfully created');
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
                    <p>Creating Admin</p>
                </Link>
            </div>
            <ModalBody className="modal-contentt" style={{ background: '#1c1c1c' }} closeButton>
                <div className="col-md-12">
                    <p className="create-celebs mb-2 mt-2">Create Admin</p>
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
                            <div>
                                <AvField
                                    name="firstname"
                                    className="celeb-form form-control login-form text-left"
                                    type="text"
                                    placeholder="Firstname"
                                    validate={{
                                        required: { value: true, errorMessage: 'Firstname is required' },
                                    }}
                                />
                            </div>
                            <div className="celeb-input">
                                <AvField
                                    name="lastname"
                                    className="celeb-form form-control login-form text-left mt-3"
                                    type="text"
                                    placeholder="Lastname"
                                    validate={{
                                        required: { value: true, errorMessage: 'Firstname is required' },
                                    }}
                                />
                            </div>
                            <div className="celeb-input">
                                <AvField
                                    name="email"
                                    className="celeb-form form-control login-form text-left mt-3"
                                    type="email"
                                    placeholder="Email"
                                    validate={{
                                        required: { value: true, errorMessage: 'Email is required' },
                                    }}
                                />
                            </div>
                            <div className="celeb-input">
                                <AvField
                                    name="phone"
                                    className="celeb-form form-control login-form text-left mt-3"
                                    type="numeric"
                                    placeholder="Phone Number"
                                    validate={{
                                        required: { value: true, errorMessage: 'Phone Number is required' },
                                    }}
                                />
                            </div>
                            <div className="mt-3 d-grid">
                                <button
                                    className={`btn text-dark login-btn btn-block waves-effect waves-light`}
                                    type="submit"
                                >
                                    {/* {(loading) ? 
                                        <i className="bx bx-loader bx-spin font-size-16 align-middle me-2"> </i> : <></> 
                                    } */}
                                    Create
                                </button>
                            </div>
                        </AvForm>
                        {/* login input */}
                    </div>
                </div>
            </ModalBody>
        </div>
    );
};

// export default CreateAdminModal;

const mapStateToProps = state => {
    const { error, modal_loading, notify_success, admins, loading } = state.Admins;
    return { error, modal_loading, notify_success, loading, admins };
};

export default withRouter(connect(mapStateToProps, { createAdmin, apiError })(CreateAdminModal));
