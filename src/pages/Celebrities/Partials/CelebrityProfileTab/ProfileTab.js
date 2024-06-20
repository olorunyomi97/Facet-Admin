import React from 'react';
import Moment from 'react-moment';
// import '../../assets/css/celebrityCSS/celebritydetail.css';

const ProfileTab = props => {
    const { user, payment, content, stories, subscriptions } = props;
    // console.log(content);
    // console.log(payment);
    // console.log(stories);
    // console.log(subscription);
    // console.log(user);
    return (
        <div className="profile-tab">
            <div className="row" style={{ justifyContent: 'center' }}>
                <div className="col-md-5 pt-2">
                    <p className="profile-details">Profile Details</p>
                    <div className="profile-details-text">
                        <p className="mb-4">
                            Full Name:{' '}
                            <span className="profile-position" style={{ textTransform: 'capitalize' }}>
                                {user.fullname}
                            </span>
                        </p>
                        <p className="mb-4">
                            Username:{' '}
                            <span className="profile-position" style={{ textTransform: 'capitalize' }}>
                                {user.username}
                            </span>
                        </p>
                        <p className="mb-4">
                            Celebrity ID: <span className="profile-position">{user._id}</span>
                        </p>
                        <p className="mb-4">
                            Email: <span className="profile-position">{user.email}</span>
                        </p>
                        {/* <p className="mb-4">
                            Phone Number: <span className="profile-position">{user.phone}</span>
                        </p> */}
                        <p className="mb-4">
                            Date of Birth:{' '}
                            <span className="profile-position">
                                <Moment format="DD-MM-YYYY">{user.dob}</Moment>
                            </span>
                        </p>
                        <p className="mb-4">
                            Country: <span className="profile-position">Nigeria</span>
                        </p>
                        <p className="mb-4">
                            Status:{' '}
                            <span className="profile-position" style={{ color: '#1FCC79' }}>
                                {user.is_active ? 'Active' : 'Inactive'}
                            </span>
                        </p>
                        <p className="mb-4">
                            Registration Date:{' '}
                            <span className="profile-position">
                                <Moment format="DD-MM-YYYY">{user.createdAt}</Moment>
                            </span>
                        </p>
                        {/* <p className="mb-4">
                            Last Login: <span className="profile-position">{user.last_login_date}</span>
                        </p> */}
                    </div>
                </div>
                <div className="col-md-1">
                    <div className="vl"></div>
                </div>
                <div className="col-md-5 pt-2" style={{ justifyContent: 'left' }}>
                    <p className="profile-details">Profile Details</p>
                    <div className="profile-details-text">
                        <p className="mb-4">
                            Number of Contents: <span className="profile-position">{content.length}</span>
                        </p>
                        <p className="mb-4">
                            Number of Stories: <span className="profile-position">{stories.length}</span>
                        </p>
                        <p className="mb-4">
                            Subscription Price: <span className="profile-position">{user.base_price}</span>
                        </p>
                        <p className="mb-4">
                            Number of Subscribers:{' '}
                            <span className="profile-position">{subscriptions.length}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfileTab;
