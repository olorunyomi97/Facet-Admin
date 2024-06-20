import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { getAllReportedusers, apiError } from 'store/actions';
import ReportedUsersTable from './UsersTable';

const Reportedusers = props => {
    const { loading, reportedusers } = props;

    useEffect(() => {
        props.getAllReportedusers();
    }, [getAllReportedusers]);

    const DisplayReportedusers = props => {
        const { active, reportedusers } = props;
        return <ReportedUsersTable reportedusers={reportedusers.data} />;
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Reported Users | Fanect </title>
                </MetaTags>
                <nav className="navbar p-0">
                    <div className="container-fluid">
                        <p className="celeb-no">Reported Users</p>
                    </div>
                </nav>
                <Row>
                    <Col xs="12">
                        <div className="p-0">
                            <div className="card" style={{ borderRadius: '20px' }}>
                                {
                                    loading ? (
                                        <div className="text-center my-3">
                                            <Link to="#" className="text-success">
                                                <i className="bx bx-loader bx-spin font-size-18 align-middle me-2" />
                                                Loading Reported Users
                                            </Link>
                                        </div>
                                    ) : (
                                        <DisplayReportedusers reportedusers={reportedusers} />
                                    )
                                    // <DisplayCelebrities celebrities = { celebrities } />
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
                <div></div>
            </div>
        </React.Fragment>
    );
};

// export default Reportedusers;

const mapStateToProps = state => {
    const { error, reportedusers, loading } = state.ReportedUsers;
    return { error, reportedusers, loading };
};

export default withRouter(connect(mapStateToProps, { getAllReportedusers, apiError })(Reportedusers));
