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

const StoriesColumn = props => [
    {
        dataField: 'preview',
        text: 'Preview',
        sort: true,
        // formatter: (cellContent, row) => (
        //     <>
        //         <img src={row.content_url} alt="preview" width="150px" height="150px" style={{ borderRadius: '8%' }} />
        //     </>
        // ),
        formatter: (cellContent, row) => (
            <>
            <Link 
                className="text-white" 
                to="#"
                onClick={() => {
                    window.location.href = `/story-details/${row._id}`
                }}
            >
                <img 
                    
                    src={row.content_url} 
                    alt="preview"
                    width="180px" 
                    height="100px" 
                    style={{ borderRadius: '8%' }} 
                />  
            </Link>
            </>
        ),
    },
    {
        dataField: '#',
        text: 'Celebrity',
        sort: true,
        formatter: (cellContent, row) => <>{row.celebrity[0].fullname}</>,
    },
    {
        dataField: 'idx',
        text: 'Celebrity',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <div className="row">
                    <div className="col-md-5 p-0" style={{ textAlign: 'center' }}>
                        <img
                            style={{ borderRadius: '100%' }}
                            src={row.celebrity[0].avatar}
                            width="30px"
                            height="30px"
                        />
                    </div>
                    <div className="col-md-7 p-0">
                        <p className="mb-0 mt-1" style={{ textTransform: 'capitalize', textAlign: 'left' }}>
                            {row.celebrity[0].username}
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        dataField: 'createdAt',
        text: 'Date Time',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <Moment format="DD-MM-YYYY - h:mm a">{row.createdAt}</Moment>
            </>
        ),
    },
    {
        dataField: '1',
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
        dataField: 'views',
        text: 'Views',
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

export default StoriesColumn;
