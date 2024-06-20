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

const PaymenthistoryColumn = () => [
	{
		dataField: "_id",
		text: "Payment ID",
		sort: true,
		
	},
	{
		dataField: "username",
		text: "Celebrities",
		sort: true,
	},
	{
		dataField: "fullname",
		text: "Date & Time",
		sort: true,
	  },
	  {
		dataField: "email",
		text: "Currency",
		sort: true,
	  },
	  {
		dataField: "subscriptions.length",
		text: "Subscription Fee",
		sort: true,
	  },
	  {
		dataField: "createdAt",
		text: "Subscription Type",
		sort: true,
	  },
	  {
		dataField: "1",
		text: "VAT on Fee",
		sort: true,
      },
      {
		dataField: "2",
		text: "Amount (Including VAT)",
		sort: true,
      },
      {
		dataField: "3",
		text: "Exchange Rate (Rate to NGN)",
		sort: true,
      },
      {
		dataField: "4",
		text: "Amount in NGN",
		sort: true,
      },
      
	
]

export default PaymenthistoryColumn
