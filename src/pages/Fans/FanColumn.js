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

const FanColumn = () => [
    // {
    //     dataField: '_id',
    //     text: 'ID',
    //     sort: true,
    // },
    {
        dataField: 'username',
        text: 'Username',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <div className="row">
                    <div className="col-md-5 pl-5" style={{ textAlign: 'center' }}>
                        <img style={{ borderRadius: '100%' }} src={row.avatar} width="30px" height="30px" />
                    </div>
                    <div className="col-md-7 pl-2">
                        <p className="mb-0 mt-1" style={{ textTransform: 'capitalize', textAlign: 'left' }}>
                            {row.username}
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        dataField: 'fullname',
        text: 'Name',
        sort: true,
        formatter: (cellContent, row) => (
        	<>
        		<Link className="text-white" to={`/fan-details/${row._id}`}>{row.fullname}</Link>
        	</>
        ),
    },
    {
        dataField: 'email',
        text: 'Email',
        sort: true,
    },
    {
        dataField: 'subscriptions.length',
        text: 'Number of Subscriptions',
        sort: true,
    },
    {
        dataField: '',
        text: 'Monthly Payment',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                ₦{row.transactions.length ? row.transactions[0].amount : " 0 "}
                {/* subscribe.subscriptionType.length ? subscribe.subscriptionType[0].amount : " " */}
            </>
        ),
    },
    {
        dataField: 'createdAt',
        text: 'Registered',
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
        dataField: 'last_login_date',
        text: 'Last Login',
        sort: true,
        formatter: (cellContent, row) => (
            // <>
            //     <Moment format="hh:mm:ss a" className="mb-0">
            //         {row.last_login_date}
            //     </Moment>
            // </>
            <>
            <Moment format="DD-MM-YYYY" className="mb-0">
                {row.last_login_date}
            </Moment>
            <span>&nbsp;at&nbsp;</span>
            <Moment format="hh:mm:ss a" className="mb-0">
                {row.last_login_date}
            </Moment>
        </>
        ),
    },
];

export default FanColumn;
