import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Container, Row, Modal } from 'reactstrap';
import { getAllLivestreams, apiError } from 'store/actions';
import LivestreamTable from './livestreamTable';

const Livestreams = props => {
    const { loading, livestreams } = props;
    // console.log(livestreams);
    // const [livestreams_id, set_livestreams_id] = useState(null);

    useEffect(() => {
        props.getAllLivestreams();
    }, [getAllLivestreams]);

    // const deleteUserStory = () => {
    //     props.deleteStory(livestreams_id)
    // }

    const DisplayLivestreams = props => {
        const { active, livestreams } = props;
        return <LivestreamTable livestreams={livestreams.data} />;
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Livestreams | Fanect </title>
                </MetaTags>
                <Container fluid>
                    <nav className="navbar p-0">
                        <div className="container-fluid">
                            <p className="celeb-no">Livestreams</p>
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
                                                Loading Livestreams
                                            </Link>
                                        </div>
                                    ) : (
                                        <DisplayLivestreams livestreams={livestreams} />
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

// export default Livestreams;

const mapStateToProps = state => {
    const { error, livestreams, loading } = state.Livestreams;
    return { error, livestreams, loading };
};

export default withRouter(connect(mapStateToProps, { getAllLivestreams, apiError })(Livestreams));
