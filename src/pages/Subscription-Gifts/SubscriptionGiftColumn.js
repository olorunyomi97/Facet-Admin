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

const SubscriptionGiftColumn = () => [
    {
        dataField: 'subscriber_details',
        text: 'Gifted By',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <div className="row">
                    <div className="col-md-5 p-0" style={{ textAlign: 'center' }}>
                        <img
                            style={{ borderRadius: '100%' }}
                            src={row.subscriber_details[0].avatar}
                            width="30px"
                            height="30px"
                        />
                    </div>
                    <div className="col-md-7 p-0">
                        <p className="mb-0 mt-1" style={{ textTransform: 'capitalize', textAlign: 'left' }}>
                            {row.subscriber_details[0].username}
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        dataField: 'subscriber_detail',
        text: 'Gifters fullname',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <div className="row">
                    <p className="mb-1 mt-1" style={{ textTransform: 'capitalize', textAlign: 'center' }}>
                        {row.subscriber_details[0].fullname}
                    </p>
                </div>
            </>
        ),
    },
    {
        dataField: 'subscriber_detail_role',
        text: 'Gifters role',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <div className="row">
                    <p className="mb-1 mt-1" style={{ textTransform: 'capitalize', textAlign: 'center' }}>
                        {row.subscriber_details[0].role}
                    </p>
                </div>
            </>
        ),
    },
    {
        dataField: 'subscribee_details',
        text: 'Gifted To',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <div className="row">
                    <div className="col-md-5 p-0" style={{ textAlign: 'center' }}>
                        <img
                            style={{ borderRadius: '100%' }}
                            src={row.subscribee_details[0].avatar}
                            width="30px"
                            height="30px"
                        />
                    </div>
                    <div className="col-md-7 p-0">
                        <p className="mb-0 mt-1" style={{ textTransform: 'capitalize', textAlign: 'left' }}>
                            {row.subscribee_details[0].username}
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        dataField: 'fullname',
        text: 'Total Gifted Subscriptions',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <Link className="text-white" to='#'>
                    {row.subscribee_details.length}
                </Link>
            </>
        ),
    },
    {
        dataField: 'email',
        text: 'Reedemed',
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
        dataField: 'next_subscription_date',
        text: 'Reedeming Date',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <Moment format="DD-MM-YYYY" className="mb-0">
                    {row.next_subscription_date}
                </Moment>
            </>
        ),
    },
    {
        dataField: 'subscriptions.length',
        text: 'Remaining',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <Moment format="DD-MM-YYYY" className="mb-0"></Moment>
                    {/* {Date.now() - row.next_subscription_date } */}
                   {/* { Math.round(Math.abs(Date.now() - row.createdAt)) } */}
                {/* Math.round(Math.abs((firstDate - secondDate) / oneDay)) */}
            </>
        ),
    },
];
export default SubscriptionGiftColumn;
