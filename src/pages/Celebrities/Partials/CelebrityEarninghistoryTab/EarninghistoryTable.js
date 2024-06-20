import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationListStandalone, PaginationProvider } from 'react-bootstrap-table2-paginator';
import { Col, Row } from 'reactstrap';
import EarningHistoryColumn from './EarninghistoryColumn';
import { isEmpty } from 'lodash';

const EarninghistoryTable = props => {
    const { payment } = props;
    // console.log(payment);

    const [earningList, setEarningList] = useState([]);
    const pageOptions = {
        sizePerPage: 30,
        totalSize: 50, // replace later with size(customerList),
        custom: true,
    };

    useEffect(() => {
        if (!isEmpty(payment)) {
            setEarningList(payment);
        }
    }, [payment]);

    const selectRow = {
        clickToSelect: true,
        mode: 'checkbox',
        hideSelectColumn: true,
        // onSelect: handleOnSelect,
    };


    const { SearchBar } = Search;
    return (
        
        <React.Fragment>
            <div className="p-0" style={{ borderRadius: '20px' }}>
                <PaginationProvider pagination={paginationFactory(pageOptions)}>
                    {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                            keyField="_id"
                            data={earningList || []}
                            columns={EarningHistoryColumn()}
                            bootstrap4
                            search
                        >
                            {toolkitProps => (
                                <React.Fragment>
                                    <div>
                                        <Row className="justify-content-center" style={{ textAlign: 'center' }}>
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

export default EarninghistoryTable;

// import React, { useState, useEffect } from 'react';
// import { Container } from "reactstrap";
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux"
// import BootstrapTable from "react-bootstrap-table-next"
// import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
// import paginationFactory, {PaginationListStandalone, PaginationProvider,} from "react-bootstrap-table2-paginator"
// import { getOrders as onGetOrders } from "store/actions"
// import { Col, Row} from "reactstrap"
// import { isEmpty } from "lodash"

// const EarninghistoryTable = () => {
//     const dispatch = useDispatch()

//     const { orders } = useSelector(state => ({
//         orders: state.ecommerce.orders,
//     }))

//     useEffect(() => {
//         dispatch(onGetOrders())
//     }, [dispatch]);

//       const [modal, setModal] = useState(false)
//       const [orderList, setOrderList] = useState([])
//       const [isEdit, setIsEdit] = useState(false)

//       //pagination customization
//       const pageOptions = {
//         sizePerPage: 10,
//         totalSize: orders.length,
//         custom: true,
//     }

//     const { SearchBar } = Search

//     const EcommerceOrderColumns = toggleModal => [
//         {
//             dataField: "orderId",
//             text: "ID",
//             sort: true,
//             formatter: (cellContent, row) => (
//               <Link to="/celebrity-details" className="text-body fw-bold">
//                 {row.orderId}
//               </Link>
//             ),
//           },
//           {
//             dataField: "billingName",
//             text: "Username",
//             sort: true,
//             formatter: (cellContent, row) => (
//               <Link to="/celebrity-details" className="text-body fw-bold">
//                 {row.billingName}
//               </Link>
//             ),
//           },
//         {
//           dataField: "name",
//           text: "Name",
//           sort: true,
//         },
//         {
//           dataField: "email",
//           text: "Email",
//           sort: true,
//         },
//         {
//           dataField: "no_of_subscribers",
//           text: "Number of Subscribers",
//           sort: true,
//         },
//         {
//           dataField: "is_registered",
//           isDummyField: true,
//           text: "Registered",
//           sort: true,
//         },
//         {
//           dataField: "last_login",
//           isDummyField: true,
//           text: "Last Login",
//           sort: true,
//         },
//       ]
//       useEffect(() => {
//         if (orders && !orders.length) {
//           onGetOrders()
//         }
//       }, [onGetOrders, orders])

//       useEffect(() => {
//         setOrderList(orders)
//       }, [orders])

//       useEffect(() => {
//         if (!isEmpty(orders) && !!isEdit) {
//           setOrderList(orders)
//           setIsEdit(false)
//         }
//       }, [orders])

//       const toggle = () => {
//         setModal(!modal)
//       }

//       const toLowerCase1 = str => {
//         return str.toLowerCase()
//       }

//       const defaultSorted = [
//         {
//           dataField: "orderId",
//           order: "desc",
//         },
//       ]

//     return (
//         <React.Fragment>
//                 <Container fluid>
//                     <nav className="navbar p-0">
//                         <div className="container-fluid">
//                             <p className="celeb-no">Celebrities(number of celebs)</p>
//                             <div className="d-flex pb-3">
//                             </div>
//                         </div>
//                     </nav>
//                         {/* Table */}
//                     <div className="container card" style={{borderRadius:'20px'}}>
//                         <PaginationProvider
//                         pagination={paginationFactory(pageOptions)}
//                         keyField="id"
//                         columns={EcommerceOrderColumns(toggle)}
//                         data={orders}
//                         >
//                         {({ paginationProps, paginationTableProps }) => (
//                         <ToolkitProvider
//                             keyField="id"
//                             data={orders}
//                             columns={EcommerceOrderColumns(toggle)}
//                             bootstrap4
//                             search
//                         >
//                             {toolkitProps => (
//                             <React.Fragment>
//                                 <div className="container row">
//                                     <div className="col-md-6">
//                                         <div className="search-box me-2 d-inline-block">
//                                             <div className="position-relative pt-3 celeb-searchbar">
//                                                 <SearchBar {...toolkitProps.searchProps} placeholder="Search for celebrities"/>
//                                                 <i className="bx bx-search-alt search-icon pt-3" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-md-6">
//                                         <div className="pagination pagination-rounded justify-content-end pt-3 pb-1">
//                                             <PaginationListStandalone {...paginationProps} />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div>
//                                 <Row className="justify-content-center mr-3" style={{textAlign:'center'}}>
//                                     <Col xl="12" className="p-0">
//                                         <div className="table-responsive">
//                                         <BootstrapTable
//                                             textAlign="center"
//                                             keyField="id"
//                                             responsive
//                                             bordered={false}
//                                             striped={false}
//                                             defaultSorted={defaultSorted}
//                                             // selectRow={selectRow}
//                                             classes={"table align-middle table-nowrap table-check" }
//                                             headerWrapperClasses={"table-light"}
//                                             {...toolkitProps.baseProps}
//                                             {...paginationTableProps}
//                                         />
//                                         </div>
//                                     </Col>
//                                 </Row>
//                                 </div>
//                             </React.Fragment>
//                             )}
//                         </ToolkitProvider>
//                         )}
//                     </PaginationProvider>
//                 </div>
//                 </Container>
//       </React.Fragment>
//     )

// }

// export default EarninghistoryTable;
