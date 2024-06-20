import React, { useState, useEffect } from 'react';
import { Container } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import paginationFactory, {PaginationListStandalone, PaginationProvider,} from "react-bootstrap-table2-paginator"
import { Col, Row} from "reactstrap"
import SubscriptionColumn from "./SubscriptionColumn";
import { isEmpty } from 'lodash';

const SubscriptionTable = props => {
    const { subscriptions } = props;
    // console.log(subscriptions);

    const [subscriptionList, setSubscriptionList] = useState([])
	const pageOptions = {
		sizePerPage: 30,
		totalSize: 50, // replace later with size(customerList),
		custom: true,
	}

    useEffect(() => {
        if(!isEmpty(subscriptions)) {
            setSubscriptionList(subscriptions)
        }
    }, [subscriptions])

	const selectRow = {
		clickToSelect: true,
		mode: 'checkbox',
		hideSelectColumn: true,
		// onSelect: handleOnSelect,
	};

    // const rowEvents = {
	// 	onClick: (e, row, rowIndex) => {
	// 	  window.location.href = `/celebrity/${row._id}`
	// 	}
	// };


    const { SearchBar } = Search   
    return (
        <React.Fragment>
            <div className="p-0" style={{borderRadius:'20px'}}>
            <PaginationProvider
                pagination={paginationFactory(pageOptions)}>
                {({ paginationProps, paginationTableProps }) => (
                    <ToolkitProvider
                        keyField="_id"
                        data={ subscriptionList || []}
                        columns={SubscriptionColumn()}
                        bootstrap4
                        search
                    >
                        {toolkitProps => (
                        <React.Fragment>
                            <Row className="justify-content-center mr-3" style={{textAlign:'center'}}>
                                <Col xl="12" className="p-0">
                                    <div className="table-responsive">
                                    <BootstrapTable
                                        textAlign="center"
                                        keyField="id"
                                        responsive
                                        bordered={false}
                                        striped={false}
                                        // selectRow={selectRow}
                                        classes={"table align-middle table-nowrap table-check" }
                                        headerWrapperClasses={"table-light"}
                                        {...toolkitProps.baseProps}
                                        {...paginationTableProps}
                                    />
                                    </div>
                                </Col>
                            </Row>
                        </React.Fragment>
                        )}
                    </ToolkitProvider>
                )}
            </PaginationProvider>
            </div>
        </React.Fragment>
    )
    
}

export default SubscriptionTable;


