import React, {useState, useEffect} from "react"
import MetaTags from 'react-meta-tags';
import { connect } from "react-redux" //Redux
import { Link, withRouter } from "react-router-dom"
import { AvForm, AvField } from "availity-reactstrap-validation"
import logo from "../../assets/images/fanect.png"
import '../../assets/css/authcss/login.css'
import { loginUser, apiError } from "../../store/actions"
import { push_error_notifications } from "helpers/notify_helper";

const Login = props => {
	const { loading, error } = props;
	const [errors, setErrors] = useState(false)
	const handleValidSubmit = (event, values) => {
		event.preventDefault();
		props.loginUser(values, props.history)
	}

	useEffect(() => {
        if(error) {
            push_error_notifications(error)
        }
    })

  	return (
		<React.Fragment>
			<MetaTags>
				<title>Login | Fanect - Admin & Dashboard</title>
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
							<div className="card login-card"style={{borderRadius:'33px'}}>
								<p className="welcome mb-0">Welcome!</p>
								<p className="welcome-text">Please enter your account details</p>
								{/* login input */}
								<AvForm className="form-horizontal text-left" style={{ textAlign: "left" }}
									onValidSubmit={(e, v) => {
										e.preventDefault();
										handleValidSubmit(e, v)
									}}>
									<div className="login-input-style">
										<div className="mb-3">
											<AvField
												name="email"
												label=""
												value=""
												className="form-control login-form text-left"
												placeholder="Email Address"
												type="email"
												validate={{
													required: {value: true, errorMessage: 'Email address is required'},
												}}
											/>
										</div>
										<div className="mb-0">
											<AvField
												name="password"
												label=""
												value=""
												type="password"
												required
												className="login-form form-control text-left"
												placeholder="Enter Password"
												validate={{
													required: {value: true, errorMessage: 'Password is required'},
													minLength: {value: 4, errorMessage: 'Password must be a minimum of 4 characters'}, 
												}}
											/>
										</div>
										{/* <Link to="/forgot-password"><p className="forgot-password pt-2">Forgot Password?</p></Link> */}
										<div className="mt-3 d-grid">
											<button
												className={`btn text-dark login-btn btn-block waves-effect waves-light ${(loading) ? 'disabled' : ''}`}
												type="submit"
											>
												{(loading) ? 
													<i className="bx bx-loader bx-spin font-size-16 align-middle me-2"> </i> : <></> 
												}
												Log In
											</button>
										</div>
									</div>
														
								</AvForm>
							</div>
						</div>
						<div className="col-lg-4"></div>
					</div>
				</div>
				
			</div>
		</React.Fragment>
  )
}

const mapStateToProps = state => {
	const { error, loading } = state.Login
	return { error, loading }
}

export default withRouter(
	connect(mapStateToProps, { loginUser, apiError })(Login)
)

