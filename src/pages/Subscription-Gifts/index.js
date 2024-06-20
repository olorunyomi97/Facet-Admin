import React, { useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'reactstrap';
import { getAllSubscriptionGifts, apiError } from 'store/actions';
import GiftTable from './SubscriptionGiftTable';

const SubscriptionGift = props => {
    const { loading, gift } = props;

    useEffect(() => {
        props.getAllSubscriptionGifts();
    }, [getAllSubscriptionGifts]);

    const DisplaySubscriptionGift = props => {
        const { active, gift } = props;
        return <GiftTable gift={gift.data} />;
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Subscription Gifts | Fanect </title>
                </MetaTags>
                <Container fluid>
                    <nav className="navbar p-0">
                        <div className="container-fluid">
                            <p className="celeb-no">Subscription Gifts</p>
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
                                                Loading Subscription Gifts
                                            </Link>
                                        </div>
                                    ) : (
                                        <DisplaySubscriptionGift gift={gift} />
                                    )}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};


const mapStateToProps = state => {
    const { error, gift, loading } = state.SubscriptionGifts;
    return { error, gift, loading };
};

export default withRouter(connect(mapStateToProps, { getAllSubscriptionGifts, apiError })(SubscriptionGift));
