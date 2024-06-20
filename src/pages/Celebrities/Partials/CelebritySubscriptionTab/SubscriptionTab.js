import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardBody, Col, Container, Row, Modal } from 'reactstrap';
import SubscriptionTable from './SubscriptionTable';

const SubscriptionTab = (props) => {
    const { subscriptions } =props
    return (
        <React.Fragment>
            <MetaTags>
                <title>Celebrities | Fanect </title>
            </MetaTags>
            <div className="p-0">
                <SubscriptionTable subscriptions={subscriptions}/>
            </div>
        </React.Fragment>
    );
};

export default SubscriptionTab;
