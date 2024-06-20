import React from "react"
import { Link } from "react-router-dom"
import Moment from 'react-moment';
export const sortFunc = (a, b, order, dataField, rowA, rowB) => { 
	if (order === 'asc')
	{
	  return Date.parse(a) - Date.parse(b)
	}
   else if (order === 'desc') {
	  return  Date.parse(b) - Date.parse(a) 
	}
}

const SubscriptionColumn = (props) => [
	{
		dataField: "_id",
		text: "ID",
		sort: true,
		
	},
	{
		dataField: "fullname",
		text: "Username",
		sort: true,
      },
      {
		dataField: "username",
		text: "Name",
		sort: true,
	},
	  {
		dataField: "email",
		text: "Subscription Date",
		sort: true,
		formatter: (cellContent, row) => (
            <>
                <Moment format="DD-MM-YYYY" className="mb-0">
                    {row.createdAt}
                </Moment>
            </>
        ),
	  },
	  {
		dataField: "subscriptions.length",
		text: "Due for next payment",
		sort: true,
		formatter: (cellContent, row) => (
            <>
                <Moment format="DD-MM-YYYY" className="mb-0">
                    {row.next_subscription_date}
                </Moment>
            </>
        ),
	  },
	//   {
	// 	dataField: "createdAt",
	// 	text: "Comments",
	// 	sort: true,
	// 	formatter: (cellContent, row) => (
	// 		<>
	// 			<Moment format='DD-MM-YYYY' className="mb-0">{row.createdAt}</Moment>
	// 		</>
	// 	),
	//   },
	//   {
	// 	dataField: "1",
	// 	text: "Views",
	// 	sort: true,
    //   },
    //   {
	// 	dataField: "2",
	// 	text: "Action",
    //     sort: true,
    //     formatter: (cellContent, order) => (
    //         <>
    //           <div>
    //              <Link to="#"><i className="fas fa-trash icon-rounded"></i></Link> 
    //           </div>
    //         </>
    //       ),
    //   },
      
     
]

export default SubscriptionColumn;
