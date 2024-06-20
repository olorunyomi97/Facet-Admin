import React, { useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import { Col, Row } from 'reactstrap';
import EarningHistoryTable from './EarninghistoryTable';
import '../../../../assets/css/celebritycss/celebritydetail.css';
// import { withRouter, Link } from 'react-router-dom';
// import { connect } from 'react-redux';

const EarninghistoryTab = props => {
    const { loading, payment } = props;
    // console.log(payment);
    return (
        <React.Fragment>
            <MetaTags>
                <title>Celebrities | Fanect </title>
            </MetaTags>
            <nav className="navbar p-0">
                <div className="container-fluid">
                    <p className="celeb-no">Total Number of Earnings & Payments ({payment.length})</p>
                </div>
            </nav>
            <Row>
                <Col xs="12">
                    <div className="p-0">
                        <div className="card" style={{ borderRadius: '20px' }}>
                            {loading ? (
                                <div className="text-center my-3">
                                    <Link to="#" className="text-success">
                                        <i className="bx bx-loader bx-spin font-size-18 align-middle me-2" />
                                        Loading Earning History Table
                                    </Link>
                                </div>
                            ) : (   
                                <EarningHistoryTable payment={payment} />
                            )}
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default EarninghistoryTab;
