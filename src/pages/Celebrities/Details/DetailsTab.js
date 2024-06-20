import React, { useState } from 'react';
import MetaTags from 'react-meta-tags';
import { Card, CardBody, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import '../../../assets/css/celebritycss/celebritydetail.css';
import ProfileTab from '../Partials/CelebrityProfileTab/ProfileTab';
import EarningHistoryTab from '../Partials/CelebrityEarninghistoryTab/EarninghistoryTab';
import ContentTab from '../Partials/CelebrityContentTab/ContentTab';
import StoriesTab from '../Partials/CelebrityStoriesTab/StoriesTab';
import SubscriptionTab from '../Partials/CelebritySubscriptionTab/SubscriptionTab';

const DetailsTab = props => {
    const { user, payment, content, stories, subscriptions } = props.celebrity_detail;
    // console.log(props.celebrity_detail.user)
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
                            Earning & Payment History
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            style={{ cursor: 'pointer', fontSize: '14px' }}
                            className={classnames({ active: activeTab1 === '7' })}
                            onClick={() => {
                                toggle1('7');
                            }}
                        >
                            Content
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            style={{ cursor: 'pointer', fontSize: '14px' }}
                            className={classnames({ active: activeTab1 === '8' })}
                            onClick={() => {
                                toggle1('8');
                            }}
                        >
                            Stories
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            style={{ cursor: 'pointer', fontSize: '14px' }}
                            className={classnames({ active: activeTab1 === '9' })}
                            onClick={() => {
                                toggle1('9');
                            }}
                        >
                            Subscribers
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={activeTab1} className="p-3 text-muted">
                    <TabPane tabId="5">
                        <Row>
                            <Col sm="12">
                                <CardBody className="mb-0 p-0">
                                    {/* PROFILE TAB */}
                                    <ProfileTab
                                        user={user}
                                        content={content}
                                        subscriptions={subscriptions}
                                        stories={stories}
                                        payment={payment}
                                    />
                                </CardBody>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="6">
                        <Row>
                            <Col sm="12">
                                <CardBody className="mb-0 p-0">
                                    <EarningHistoryTab payment={payment} />
                                </CardBody>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="7">
                        <Row>
                            <Col sm="12">
                                <CardBody className="mb-0 p-0">
                                    {/* CONTENT TAB */}
                                    <ContentTab 
                                        content={content} 
                                        user={user}
                                    />
                                </CardBody>
                            </Col>
                        </Row>
                    </TabPane>

                    <TabPane tabId="8">
                        <Row>
                            <Col sm="12">
                                <CardBody className="mb-0 p-0">
                                    <StoriesTab 
                                        stories={stories} 
                                        user={user}
                                    />
                                </CardBody>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="9">
                        <Row>
                            <Col sm="12">
                                <CardBody className="mb-0 p-0">
                                    <SubscriptionTab subscriptions={subscriptions} />
                                </CardBody>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </Card>
        </div>
    );
};

export default DetailsTab;
