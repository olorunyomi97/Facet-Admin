import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export const sortFunc = (a, b, order, dataField, rowA, rowB) => {
    if (order === 'asc') {
        return Date.parse(a) - Date.parse(b);
    } else if (order === 'desc') {
        return Date.parse(b) - Date.parse(a);
    }
};

const TransactionsColumn = props => [
    {
        dataField: 'payment_reference',
        text: 'Payment REF',
        sort: true,

        formatter: (cellContent, row) => (
            <>
                <Link to="#" style={{ color: '#1FCC79' }}>
                    {row.payment_reference}
                </Link>
            </>
        ),
    },

    // {
    //     dataField: 'fan_id',
    //     text: 'Fan (ID)',
    //     sort: true,
    // },

    {
        dataField: 'PayerDetails',
        text: 'Username of Payer',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <div className="row">
                    <div className="col-md-5 p-0" style={{ textAlign: 'center' }}>
                        <img
                            style={{ borderRadius: '100%' }}
                            src={row.payer_details[0].avatar}
                            width="30px"
                            height="30px"
                        />
                    </div>
                    <div className="col-md-7 p-0">
                        <p className="mb-0 mt-1" style={{ textTransform: 'capitalize', textAlign: 'left' }}>
                            {row.payer_details[0].username}
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        dataField: 'fullname',
        text: 'Fullname of Payer',
        sort: true,
        formatter: (cellContent, row) => (
            // <>
            //     <Moment format="DD-MM-YYYY - h:mm a">{row.createdAt}</Moment>
            // </>
            <>
                <p>{row.payer_details[0].fullname}</p>
            </>
        ),
    },

    {
        dataField: 'createdAt',
        text: 'Date & Time',
        sort: true,
        formatter: (cellContent, row) => (
            // <>
            //     <Moment format="DD-MM-YYYY - h:mm a">{row.createdAt}</Moment>
            // </>
            <>
                <Moment format="DD-MM-YYYY">{row.createdAt}</Moment>
            </>
        ),
    },

    {
        dataField: 'currency',
        text: 'Currency',
        sort: true,
    },

    {
        dataField: '',
        text: 'Subscription Fee',
        sort: true,
        // formatter: (cellContent, row) => (
        //     <>
        //         <Moment format="DD-MM-YYYY">{row.createdAt}</Moment>
        //     </>
        // ),
    },

    {
        dataField: 'status',
        text: 'Status',
        sort: true,
    },

    {
        dataField: 'amount',
        text: 'Amount (inclduing VAT)',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <div>₦{row.amount}</div>
            </>
        ),
    },

    {
        dataField: 'action',
        text: 'Exchange Rate to NGN',
        sort: true,
    },

    {
        dataField: 'actions',
        text: 'Amount in NGN',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <div>₦{row.amount}</div>
            </>
        ),
    },
];

export default TransactionsColumn;
