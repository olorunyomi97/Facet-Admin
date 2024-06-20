import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationListStandalone, PaginationProvider } from 'react-bootstrap-table2-paginator';
import { Col, Row } from 'reactstrap';
import ReportedContentColumn from './ContentColumn';
import { isEmpty } from 'lodash';

const ContentTable = props => {
    const { reportedcontent, toggleModal } = props;
    console.log(reportedcontent);
    // console.log(reportedcontent.converted_content_id);
    const [reportedcontentList, setReportedContentList] = useState([]);

    const pageOptions = {
        sizePerPage: 15,
        totalSize: 50, // replace later with size(customerList),
        custom: true,
    };

    const delete_reported_content = content_id => {
        props.deleteContent(content_id);
    };

    useEffect(() => {
        if (!isEmpty(reportedcontent)) {
            setReportedContentList(reportedcontent);
        }
    }, [reportedcontent]);

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
                            data={reportedcontentList || []}
                            columns={ReportedContentColumn({  delete_reported_content, toggleModal })}
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
                                            <Col xl="12">
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

// export default ContentTable;

const mapStateToProps = state => {
    const { loading } = state.ReportedContent;
    return { loading };
};

export default withRouter(connect(mapStateToProps)(ContentTable));
