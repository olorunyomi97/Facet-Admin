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

const ContentColumn = props => [
    {
        dataField: 'username',
        text: 'Preview',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <Link
                    className="text-white" 
                    to="#"
                    onClick={() => {
                        window.location.href = `/each-celebrity-content/${row._id}`
                    }}
                >
                <img 
                    src={row.content_url ? row.content_url[0]: row.content_url[1]}
                    alt="preview" 
                    width="250px" 
                    height="150px" 
                    style={{ borderRadius: '8%' }} 
                />
                </Link>
            </>
        ),
    },
    {
        dataField: '_id',
        text: 'ID',
        sort: true,
    },
    {
        dataField: '',
        text: 'Date Time',
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
        dataField: 'subscriptions.length',
        text: 'Likes',
        sort: true,
    },
    {
        dataField: 'comments',
        text: 'Comments',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <div style={{ textTransform: 'capitalize' }}>{row.comments.length}</div>
            </>
        ),
    },
    {
        dataField: '1',
        text: 'Views',
        sort: true,
    },
    // {
    //     dataField: 'action',
    //     text: 'Action',
    //     formatter: (cellContent, row) => (
    //         <>
    //             <div>
    //                 <button
    //                     style={{backgroundColor: '#1c1c1c', border: 'none'}}
    //                     to="#"
    //                     onClick={() => {
    //                         props.toggleModal(true, 'delete_modal', 'sm', row._id);
    //                     }}
    //                 >
    //                     <i className="fas fa-trash icon-rounded"></i>
    //                 </button>
    //             </div>
    //         </>
    //     ),
    // },
];

export default ContentColumn;
