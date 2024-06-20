import React, { useState } from 'react';
import { ModalBody } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { withRouter, useHistory, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { upgradeFan, apiError } from '../../../store/actions';
// import DatePicker from "react-datepicker";

const UpgradeFanModal = props => {
    const { loading, set_modal,fan } = props;
    // console.log(fan.user.username)
    const [modal_loading, set_modal_loading] = useState(false);

    const upgrade_fan = () => {
        set_modal_loading(true);
        props.upgradeFan({ fan_id: props.match.params.id });
    };
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
                    <p>Upgrading {fan.user.username} to a celebrity</p>
                </Link>
            </div>
            <ModalBody className="modal-contentt" style={{ background: '#1c1c1c' }}>
                <div className="col-md-12">
                    <p className="create-celebs mb-2 mt-2 text-center">Upgrade <span className='switch_fan' style={{ textTransform:'capitalize'}}>{fan.user.username}</span> to Celebrity ?</p>
                    <div className="modal-card" style={{ borderRadius: '33px' }}>
                        {/* login input */}
                        <div className="row login-input-styles">
                            <div className="col-md-6 px-1">
                                <Link
                                    to="#"
                                    onClick={() => {
                                        set_modal(false);
                                    }}
                                >
                                    <button className="cancel-btn"> Cancel </button>
                                </Link>
                            </div>
                            <div className="col-md-6 px-1">
                                <Link to="#" onClick={() => upgrade_fan()}>
                                    <button className="block-btn celeb-acc-btn" style={{ background: '#1FCC79' }}>
                                        {' '}
                                        Upgrade{' '}
                                    </button>
                                </Link>
                            </div>
                        </div>
                        {/* login input */}
                    </div>
                </div>
            </ModalBody>
        </div>
    );
};
// export default UpgradeFanModal;

const mapStateToProps = state => {
    const { error, fans, loading } = state.Fans;
    return { error, loading, fans };
};
export default withRouter(connect(mapStateToProps, { upgradeFan, apiError })(UpgradeFanModal));
