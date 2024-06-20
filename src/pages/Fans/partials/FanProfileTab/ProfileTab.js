import React from 'react';
import Moment from 'react-moment';
import burna from '../../../../assets/images/burna.png';

const ProfileTab = props => {
    const { user, subscriptions } = props;
    return (
        <div className="profile-tab">
            <div className="row" style={{ justifyContent: 'center' }}>
                <div className="col-md-5 pt-2">
                    <p className="profile-details">Profile Details</p>
                    {
                        user && 
                        (
                            <div className="profile-details-text">
                            {/* <p className="mb-4">
                                Full Name:{' '}
                                <span className="profile-position" style={{ textTransform: 'capitalize' }}>
                                    {user.fullname}
                                </span>
                            </p> */}
                            <p className="mb-4">
                                Username:
                                <span className="profile-position" style={{ textTransform: 'capitalize' }}>
                                    {user.username}
                                </span>
                            </p>
                            <p className="mb-4">
                                Fan ID:
                                <span className="profile-position">{user._id}</span>
                            </p>
                            <p className="mb-4">
                                Email:
                                <span className="profile-position">{user.email}</span>
                            </p>
                            <p className="mb-4">
                                Date of Birth:
                                <span className="profile-position">
                                    <Moment format="DD-MM-YYYY">{user.dob}</Moment>
                                </span>
                            </p>
                            <p className="mb-4">
                                Country:
                                <span className="profile-position">Nigeria</span>
                            </p>
                            <p className="mb-4">
                                Status:
                                <span className="profile-position" style={{ color: '#1FCC79' }}>
                                    {user.is_active ? 'Active' : 'Inactive'}
                                </span>
                            </p>
                            <p className="mb-4">
                                Registration Date:
                                <span className="profile-position">
                                    <Moment format="DD-MM-YYYY">{user.createdAt}</Moment>
                                </span>
                            </p>
                            <p className="mb-4">
                                Last Login:
                                <span className="profile-position">
                                    <Moment format="DD-MM-YYYY">{user.last_login_date}</Moment>
                                </span>
                            </p>
                            </div>
                        )
                    }
                    
                </div>
                <div className="col-md-1">
                    <div className="vl" style={{ marginLeft: '30px' }}></div>
                </div>
                <div className="col-md-5 pt-2" style={{ justifyContent: 'left' }}>
                    <p className="profile-details">Subscriptions</p>
                    {subscriptions.length <= 0 ? (
                        <div className="row">
                            <div className="col-md-12"> No subscriptions yet</div>
                        </div>
                    ) : (
                        <>
                            {subscriptions.filter(Boolean).map((subscription, idx) => (
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row" key={idx}>
                                            <div className="col-md-2">
                                                <img src={burna} style={{ marginRight: '5px' }} />
                                            </div>
                                            <div className="col-md-4">
                                                <p className="mb-0">Wizkid</p>
                                                <p style={{ color: '#1FCC79' }}>
                                                    <small>{subscription.celebrity_id}</small>
                                                </p>
                                            </div>
                                            <div className="col-md-6" style={{ textAlign: 'right' }}>
                                                <p className="mb-0">Due Date</p>
                                                <p>
                                                    <small>
                                                        {' '}
                                                        <Moment format="DD-MM-YYYY">
                                                            {subscription.next_subscription_date}
                                                        </Moment>
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ProfileTab;
