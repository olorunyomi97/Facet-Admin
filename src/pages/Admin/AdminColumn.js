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

const AdminColumn = props => [
    // {
    //     dataField: '_id',
    //     text: 'ID',
    //     sort: true,
    // },
    {
        dataField: 'firstname',
        text: 'First Name',
        sort: true,
    },
    {
        dataField: 'lastname',
        text: 'Last Name',
        sort: true,
    },
    {
        dataField: 'email',
        text: 'Email',
        sort: true,
    },
    {
        dataField: 'last_login_date',
        text: 'Last Login',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <Moment format="DD-MM-YYYY">{row.last_login_date}</Moment>
            </>
        ),
    },
    {
        dataField: 'createdAt',
        text: 'Registered',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <Moment format="DD-MM-YYYY">{row.createdAt}</Moment>
            </>
        ),
    },
    {
        dataField: 'status',
        text: 'Status',
        sort: true,
    },

    {
        dataField: 'action',
        text: 'Action',
        formatter: (cellContent, row) => (
            <>
                <div>
                    <Link
                        to="#"
                        onClick={() => {
                            props.toggleModal(true, 'delete_modal', 'sm', row._id);
                        }}
                    >
                        <i className="fas fa-trash icon-rounded"></i>
                    </Link>
                </div>
            </>
        ),
    },
];

export default AdminColumn;
