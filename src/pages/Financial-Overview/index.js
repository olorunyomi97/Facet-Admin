import React from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from "react-router-dom"
import { Card, CardBody, Col, Container, Row,  Modal } from "reactstrap"
import SubscriptionChart from "./Chart/SubscriptionChart";

const FinancialOverview = (props) => {
    const { loading } = props;
    return (
        <React.Fragment>
			<div className="page-content">
				<MetaTags>
					<title>Financial Overview | Fanect </title>
				</MetaTags>
				<Container fluid>
					<nav className="navbar p-0">
                        <div className="container-fluid">
                            <p className="celeb-no">Financial Overview</p>
                        </div>
                    </nav>
                    <div className="card" style={{borderRadius: '20px'}}>
                        <div className="row">
                            <div className="col-md-6 pt-4" style={{paddingLeft:'35px'}}>
                                <p className="comment pb-2">Subscriptions</p>
                                <div className="row">
                                    <div className="col-md-6 mr-5">
                                        <div className="card finance-card p-3" style={{justifyContent: 'center'}}>
                                            <p className="comment mb-1"><small>Total Number of Subscriptions</small></p>
                                            <p className="comment mb-1">30,000</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card finance-card p-3">
                                            <p className="comment mb-1"><small>Total Subscription fee Collected</small></p>
                                            <p className="comment mb-1">30,000</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card finance-card p-3">
                                            <p className="comment mb-1"><small>Total VAT Collected</small></p>
                                            <p className="comment mb-1">30,000</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card finance-card p-3">
                                            <p className="comment mb-1"><small>Total Payment Processing Fees</small></p>
                                            <p className="comment mb-1">30,000</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card finance-card p-3">
                                            <p className="comment mb-1"><small>Total FaNect Fee Collected</small></p>
                                            <p className="comment mb-1">30,000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1 pt-4">
                                <div className="vl"style={{marginLeft:'30px'}}></div>
                            </div>
                            <div className="col-md-5 pt-4" style={{paddingLeft: '0px'}}>
                                <p className="comment">Subscription</p>
                                <SubscriptionChart />
                            </div>
                        </div>
                    </div>
				</Container>
			</div>
		</React.Fragment>
    )
}

export default FinancialOverview;