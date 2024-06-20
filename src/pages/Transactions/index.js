import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'reactstrap';
import { getAllTransactions, apiError } from 'store/actions';
import TransactionsTable from './TransactionsTable';

const Transactions = props => {
    const { loading, transactions } = props;

    useEffect(() => {
        props.getAllTransactions();
    }, [getAllTransactions]);

    const DisplayTransactions = props => {
        const { active, transactions } = props;
        return <TransactionsTable transactions={transactions.data} />;
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Transactions | Fanect </title>
                </MetaTags>
                <Container fluid>
                    <nav className="navbar p-0">
                        <div className="container-fluid">
                            <p className="celeb-no">Transactions</p>
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
                                                Loading Transactions
                                            </Link>
                                        </div>
                                    ) : (
                                        <DisplayTransactions transactions={transactions} />
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
    const { error, transactions, loading } = state.Transactions;
    return { error, transactions, loading };
};

export default withRouter(connect(mapStateToProps, { getAllTransactions, apiError })(Transactions));
