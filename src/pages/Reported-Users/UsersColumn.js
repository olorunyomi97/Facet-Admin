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

const UsersColumn = () => [
    {
        dataField: '_id',
        text: 'ID',
        sort: true,
    },
    {
        dataField: 'firstname',
        text: 'Username',
        sort: true,
    },
    {
        dataField: 'lastname',
        text: 'Name',
        sort: true,
    },
    {
        dataField: 'email',
        text: 'Email',
        sort: true,
    },
    {
        dataField: 'ole',
        text: 'User Role',
        sort: true,
    },
    {
        dataField: 'reports',
        text: 'Number of Reports',
        sort: true,
    },
    {
        dataField: 'reason',
        text: 'Date',
        sort: true,
    },
    {
        dataField: 'data',
        text: 'Reported By',
        sort: true,
    },
    {
        dataField: 'dated',
        text: 'Report',
        sort: true,
    },
    {
        dataField: 'action',
        text: 'Action',
        sort: true,
        formatter: (cellContent, order) => (
            <>
                <div>
                    <Link>
                        <i class="fas fa-ban"></i>
                    </Link>
                </div>
            </>
        ),
    },
];

export default UsersColumn;
