import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
export const sortFunc = (a, b, order, dataField, rowA, rowB) => {
    if (order === 'asc') {
        return Date.parse(a) - Date.parse(b);
    } else if (order === 'desc') {
        return Date.parse(b) - Date.parse(a);
    }
};

const EarninghistoryColumn = () => [
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
    {
        dataField: 'celebrity_id',
        text: 'Purchser',
        sort: true,
    },
    // 
    //     dataField: 'fullname',
    //     text: 'Purchaser',
    //     sort: true,
    // },
    {
        dataField: 'gateway',
        text: 'Payment Channel',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <div style={{ textTransform: 'capitalize' }}>{row.gateway}</div>
            </>
        ),
    },
    {
        dataField: 'currency',
        text: 'Currency',
        sort: true,
    },
    {
        dataField: 'createdAt',
        text: 'Payment Date',
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
        dataField: '1',
        text: 'VAT on Fee',
        sort: true,
    },
    {
        dataField: 'status',
        text: 'Status',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <div style={{ textTransform: 'capitalize' }}>{row.status}</div>
            </>
        ),
    },
    {
        dataField: '3',
        text: 'Exchange Rate',
        sort: true,
    },
    {
        dataField: 'amount',
        text: 'Amount in NGN',
        sort: true,
    },
    {
        dataField: '5',
        text: 'Payment Processing Fees',
        sort: true,
    },
    {
        dataField: '6',
        text: 'Fanect Fee',
        sort: true,
    },
    {
        dataField: '7',
        text: 'Withholding tax WHT',
        sort: true,
    },
    {
        dataField: '8',
        text: 'Celebrity earnings after WHT',
        sort: true,
    },
    {
        dataField: '9',
        text: 'Payout processing Fees',
        sort: true,
    },
    {
        dataField: '10',
        text: 'Payout',
        sort: true,
    },
    {
        dataField: '11',
        text: 'Payout Complete',
        sort: true,
    },
];

export default EarninghistoryColumn;
