import React, { useState } from 'react';
import MetaTags from 'react-meta-tags';
import { Card, CardText, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import '../../../assets/css/celebritycss/celebritydetail.css';
import ProfileTab from '../partials/FanProfileTab/ProfileTab';
import PaymentHistoryTab from '../partials/FanPaymentTab/PaymentHistoryTab';

const FanTab = props => {
    const { user, payment, subscriptions } = props.fan;
    // console.log(props.fan);
    const [activeTab1, setactiveTab1] = useState('5');

    const toggle1 = tab => {
        if (activeTab1 !== tab) {
            setactiveTab1(tab);
        }
    };
    
    return (
        <div>
            <Card style={{ borderRadius: '20px' }}>
                {/* <CardBody> */}
                <Nav pills className="navtab-bg nav-justified">
                    <NavItem>
                        <NavLink
                            style={{ cursor: 'pointer', fontSize: '14px' }}
                            className={('tab-text', classnames({ active: activeTab1 === '5' }))}
                            onClick={() => {
                                toggle1('5');
                            }}
                        >
                            Profile
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            style={{ cursor: 'pointer', fontSize: '14px' }}
                            className={classnames({ active: activeTab1 === '6' })}
                            onClick={() => {
                                toggle1('6');
                            }}
                        >
                            Payment History
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={activeTab1} className="p-3 text-muted">
                    <TabPane tabId="5">
                        <Row>
                            <Col sm="12">
                                <CardText className="mb-0">
                                    {/* PROFILE TAB */}
                                    <ProfileTab user={user} subscriptions={subscriptions} />
                                </CardText>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="6">
                        <Row>
                            <Col sm="12">
                                <CardText className="mb-0">
                                    <PaymentHistoryTab payment={payment} />
                                </CardText>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
                {/* </CardBody> */}
            </Card>
        </div>
    );
};

export default FanTab;
