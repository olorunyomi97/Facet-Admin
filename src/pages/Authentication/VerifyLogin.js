import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { connect } from "react-redux" //Redux
import { Link, withRouter } from "react-router-dom"
import { AvForm, AvField } from "availity-reactstrap-validation"
import logo from "../../assets/images/fanect.png"
import '../../assets/css/authcss/login.css'
import { verifyUserLogin, reverifyUserLogin, apiError } from "../../store/actions"
import { push_error_notifications, push_success_notifications } from 'helpers/notify_helper';


const VerifyLogin = props => {
	const { error, notify_success, otp_data } = props;
	const [counter, setCounter] = useState(180);

	//Fetch Data from URL
	let url_token = new URLSearchParams(props.location.search).get('token');
	let url_email = new URLSearchParams(props.location.search).get('email');

	// console.log(otp_data);
	const email = otp_data.data != undefined ? otp_data.data.email : url_email;
	const token = otp_data.data != undefined ? otp_data.data.verify_token : url_token;

	const handleValidSubmit = (event, values) => {
		event.preventDefault();
		const verify_payload = { ...values, ...{ email, verify_token: token }}
		console.log(verify_payload);
		props.verifyUserLogin(verify_payload)
	}

	useEffect(() => {
        if (error) {
            push_error_notifications(error);
        }
    });

	useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

	const handleResendSubmit = (event, values) => {
		event.preventDefault();
		const reverify_payload = { ...values, ...{ email, verify_token: token }}
		console.log(reverify_payload);
		props.reverifyUserLogin(reverify_payload)
	}


  	return (
		<React.Fragment>
			<MetaTags>
				<title>Login | Fanect </title>
			</MetaTags>
		
			<div>
				<div className="container-fluid">
					<div className="logo-position">
						<img  src={logo} alt="" className="img-fluid" />
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-3 col-sm-2"></div>
						<div className="col-lg-4 col-md-6 col-sm-8" style={{ paddingTop:'15vh' }}>
							{(!email || !token) ?
								<></>
								:
								<div className="card login-card"style={{borderRadius:'33px'}}>
									<p className="welcome mb-0">Login!</p>
									<p className="welcome-text">Please enter token sent to { email }</p>
									{/* login input */}
									<AvForm className="form-horizontal text-left" style={{ textAlign: "left" }}
										onValidSubmit={(e, v) => {
											e.preventDefault();
											handleValidSubmit(e, v)
										}}>
										<div className="login-input-style">
											<div className="mb-3">
												<AvField
													name="otp_code"
													label=""
													value=""
													className="form-control login-form text-left"
													placeholder="OTP"
													type="numeric"
													validate={{
														required: {value: true, errorMessage: 'OTP is required'},
														minLength: {value: 6, errorMessage: 'OTP must be a minimum of 6 characters'}, 
													}}
												/>
											</div>
											<div className="mt-3 d-grid">
												<button
													className={`btn text-dark login-btn btn-block waves-effect waves-light mb-3`}
													type="submit"
												>
													{/* {(loading) ? 
														<i className="bx bx-loader bx-spin font-size-16 align-middle me-2"> </i> : <></> 
													} */}
													Log In
												</button>
												<div fontWeight={500} align="center" color='#7CFDBF'>
													<span className="link ml-1 mb-0 mt-3">
														{(counter > 0) ?  
															<span>
															Resend OTP in {counter} seconds
															</span> 
														:   
															<span style={{color:'#1FCC79'}}> 
																<p className="resend_button"onClick={handleResendSubmit}>Resend OTP </p>
															</span> 
														} 
													</span> 
												</div>
											</div>
										</div>
													
									</AvForm>
								</div>
							}
							
						</div>
						<div className="col-lg-4"></div>
					</div>
				</div>
				
			</div>
		</React.Fragment>
  	)
}

const mapStateToProps = state => {
	const { error, notify_success, loading, otp_data } = state.Login
	return { error, notify_success, loading, otp_data }
}

export default withRouter(
	connect(mapStateToProps, { verifyUserLogin, reverifyUserLogin, apiError })(VerifyLogin)
)

