import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationListStandalone, PaginationProvider } from 'react-bootstrap-table2-paginator';
import { Col, Row } from 'reactstrap';
import SubscriptionGiftColumn from './SubscriptionGiftColumn';
import { isEmpty } from 'lodash';

const SubscriptionGiftTable = props => {
    const { gift } = props;
    console.log(gift);
    const [giftList, setGiftList] = useState([]);

    const pageOptions = {
        sizePerPage: 15,
        totalSize: 50, // replace later with size(customerList),
        custom: true,
    };

    useEffect(() => {
        if (!isEmpty(gift)) {
            setGiftList(gift);
        }
    }, [gift]);

    const selectRow = {
        clickToSelect: true,
        mode: 'checkbox',
        hideSelectColumn: true,
    };

    const { SearchBar } = Search;
    return (
        <React.Fragment>
            <div className="" style={{ borderRadius: '20px' }}>
                <PaginationProvider pagination={paginationFactory(pageOptions)}>
                    {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                            keyField="_id"
                            data={giftList || []}
                            columns={SubscriptionGiftColumn()}
                            bootstrap4
                            search
                        >
                            {toolkitProps => (
                                <React.Fragment>
                                    <div className="container row">
                                        <div className="col-md-6">
                                            <div className="search-box me-2 d-inline-block">
                                                <div className="position-relative pt-3 celeb-searchbar">
                                                    <SearchBar
                                                        {...toolkitProps.searchProps}
                                                        placeholder="Search by username"
                                                    />
                                                    <i className="bx bx-search-alt search-icon pt-3" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="pagination pagination-rounded justify-content-end pt-3 pb-1">
                                                <PaginationListStandalone {...paginationProps} />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <Row className="justify-content-center mr-3" style={{ textAlign: 'center' }}>
                                            <Col xl="12" className="">
                                                <div className="table-responsive">
                                                    <BootstrapTable
                                                        textAlign="center"
                                                        keyField="id"
                                                        responsive
                                                        bordered={false}
                                                        striped={false}
                                                        // selectRow={selectRow}
                                                        classes={'table align-middle table-nowrap table-check'}
                                                        headerWrapperClasses={'table-light'}
                                                        {...toolkitProps.baseProps}
                                                        {...paginationTableProps}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </React.Fragment>
                            )}
                        </ToolkitProvider>
                    )}
                </PaginationProvider>
            </div>
        </React.Fragment>
    );
};

// export default SubscriptionGiftTable;

const mapStateToProps = state => {
    const { loading } = state.SubscriptionGifts;
    return { loading };
};

export default withRouter(connect(mapStateToProps)(SubscriptionGiftTable));
