import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationListStandalone, PaginationProvider } from 'react-bootstrap-table2-paginator';
import { Col, Row } from 'reactstrap';
import AdminColumn from './AdminColumn';
import { isEmpty } from 'lodash';
import { deleteAdmin } from '../../store/actions';

const AdminTable = props => {
    const { admins, toggleModal } = props;
    const [adminList, setAdminList] = useState([]);

    const pageOptions = {
        sizePerPage: 30,
        totalSize: 50, // replace later with size(customerList),
        custom: true,
    };

    const delete_admin = admin_id => {
        props.deleteAdmin(admin_id);
    };

    useEffect(() => {
        if (!isEmpty(admins)) {
            setAdminList(admins);
        }
    }, [admins]);

    const selectRow = {
        clickToSelect: true,
        mode: 'checkbox',
        hideSelectColumn: true,
        // onSelect: handleOnSelect,
    };

    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            window.location.href = `/admin/${row._id}`;
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
                            data={adminList || []}
                            columns={AdminColumn({ delete_admin, toggleModal })}
                            bootstrap4
                            search
                        >
                            {toolkitProps => (
                                <React.Fragment>
                                    <div className="container-fluid row">
                                        <div className="col-md-6">
                                            <div className="search-box me-2 d-inline-block">
                                                <div className="position-relative pt-3 celeb-searchbar">
                                                    <SearchBar
                                                        {...toolkitProps.searchProps}
                                                        placeholder="Search for admin"
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
// export default AdminTable;

const mapStateToProps = state => {
    const { loading } = state.Admins;
    return { loading };
};

export default withRouter(connect(mapStateToProps, { deleteAdmin })(AdminTable));
