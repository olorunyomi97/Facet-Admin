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

const StoriesColumn = (props) => [
    {
        dataField: 'username',
        text: 'Preview',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <img src={row.content_url} alt="preview" width="180px" height="100px" style={{ borderRadius: '8%' }} />
            </>
        ),
    },
    {
        dataField: '_id',
        text: 'ID',
        sort: true,
    },
    {
        dataField: 'email',
        text: 'Celebrity',
        sort: true,
    },
    {
        dataField: '',
        text: 'Date Time',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <Moment format="DD-MM-YYYY - ha" className="mb-0">
                    {row.createdAt}
                </Moment>
            </>
        ),
    },
    {
        dataField: 'subscriptions.length',
        text: 'Type',
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
        dataField: '1',
        text: 'Views',
        sort: true,
    },
    // {
    //     dataField: '2',
    //     text: 'Action',
    //     sort: true,
    //     formatter: (cellContent, row) => (
    //         <>
    //         <div>
    //             <button
    //                 style={{backgroundColor: '#1c1c1c', border: 'none'}}
    //                 to="#"
    //                 onClick={() => {
    //                     props.toggleModal(true, 'delete_modal', 'sm', row._id);
    //                 }}
    //             >
    //                 <i className="fas fa-trash icon-rounded"></i>
    //             </button>
    //         </div>
    //     </>
    //     ),
    // },
];

export default StoriesColumn;
