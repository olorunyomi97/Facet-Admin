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

const BlockedusersColumn = props => [
    // {
    //     dataField: '_id',
    //     text: 'ID',
    //     sort: true,
    // },
    {
        dataField: 'username',
        text: 'Username',
        sort: true,
        // formatter: (cellContent, row) => (
        //     <>
        //         <div style={{ textTransform: 'capitalize' }}>{row.username}</div>
        //     </>
        // ),
        formatter: (cellContent, row) => (
            <>
                <div className="row">
                    <div className="col-md-5 p-0" style={{ textAlign: 'center' }}>
                        <img style={{ borderRadius: '100%' }} src={row.avatar} width="30px" height="30px" />
                    </div>
                    <div className="col-md-7 p-0">
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
    },
    {
        dataField: 'email',
        text: 'Email',
        sort: true,
    },
    {
        dataField: 'role',
        text: 'User Role',
        sort: true,
    },
    {
        dataField: '',
        text: 'Block Reason',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <div style={{ textTransform: 'capitalize' }}>{row.blocked_users[0].blocked_reason}</div>
            </>
        ),
    },
    {
        dataField: 'createdAt',
        text: 'Blocked',
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
        dataField: 'action',
        text: 'Action',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <div>
                    <button
                        className="celeb-btn"
                        onClick={() => {
                            props.toggleModal(true, 'unblock_modal', 'sm', row._id, row.username);
                        }}
                    >
                        Unblock
                    </button>
                </div>
            </>
        ),
    },
];

export default BlockedusersColumn;
