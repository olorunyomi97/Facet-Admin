import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationListStandalone, PaginationProvider } from 'react-bootstrap-table2-paginator';
import { Col, Row } from 'reactstrap';
import StoriesColumn from './StoriesColum';
import { isEmpty } from 'lodash';

const StoriesTable = props => {
    const { stories, toggleModal } = props;
    // console.log(stories);
    const [storiesList, setStoriesList] = useState([]);

    const pageOptions = {
        sizePerPage: 30,
        totalSize: 50, // replace later with size(customerList),
        custom: true,
    };

    const delete_story = story_id => {
        props.deleteStory(story_id);
    };

    useEffect(() => {
        if (!isEmpty(stories)) {
            setStoriesList(stories);
        }
    }, [stories]);

    const selectRow = {
        clickToSelect: true,
        mode: 'checkbox',
        hideSelectColumn: true,
        // onSelect: handleOnSelect,
    };

    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            window.location.href = `/story-details/${row._id}`;
            // window.location.href = `/story-details`;
        },
    };

    const { SearchBar } = Search;
    return (
        <React.Fragment>
            <div className="" style={{ borderRadius: '20px' }}>
                <PaginationProvider pagination={paginationFactory(pageOptions)}>
                    {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                            keyField="_id"
                            data={storiesList || []}
                            columns={StoriesColumn({ delete_story, toggleModal })}
                            bootstrap4
                            search
                        >
                            {toolkitProps => (
                                <React.Fragment>
                                    <div className="container row">
                                        <div className="col-md-6">
                                            {/* <div className="search-box me-2 d-inline-block">
                                        <div className="position-relative pt-3 celeb-searchbar">
                                            <SearchBar {...toolkitProps.searchProps} placeholder="Search for celebrities"/>
                                            <i className="bx bx-search-alt search-icon pt-3" />
                                        </div>
                                    </div> */}
                                        </div>
                                        <div className="col-md-6">
                                            {/* <div className="pagination pagination-rounded justify-content-end pt-3 pb-1">
                                        <PaginationListStandalone {...paginationProps} />
                                    </div> */}
                                        </div>
                                    </div>

                                    <div>
                                        <Row className="justify-content-center mr-3" style={{ textAlign: 'center' }}>
                                            <Col xl="12" className="p-0">
                                                <div className="table-responsive">
                                                    <BootstrapTable
                                                        textAlign="center"
                                                        keyField="id"
                                                        responsive
                                                        bordered={false}
                                                        striped={false}
                                                        selectRow={selectRow}
                                                        // rowEvents={rowEvents}
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

export default StoriesTable;