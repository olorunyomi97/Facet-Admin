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

const ContentColumn = (props) => [
    // {
    //     dataField: '_id',
    //     text: 'ID',
    //     sort: true,
    // },
    {
        dataField: 'username',
        text: 'Username',
        sort: true,
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
        dataField: 'no_of_reports',
        text: 'Number of Reports',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <div style={{ textTransform: 'capitalize' }}>{row.reporter_details.length}</div>
            </>
        ),
    },
    {
        dataField: 'createdAt',
        text: 'Date',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <Moment format="DD-MM-YYYY">{row.createdAt}</Moment>
            </>
        ),
    },
    {
        dataField: 'date',
        text: 'Reported By',
        sort: true,
        // formatter: (cellContent, row) => (
        //     <>
        //         <div style={{ textTransform: 'capitalize' }}>{row.reporter_details[0].username}</div>
        //     </>
        // ),
        formatter: (cellContent, row) => (
            <>
                <div className="row">
                    <div className="col-md-5 p-0" style={{ textAlign: 'center' }}>
                        <img
                            style={{ borderRadius: '100%' }}
                            src={row.reporter_details[0].avatar}
                            width="30px"
                            height="30px"
                        />
                    </div>
                    <div className="col-md-7 p-0">
                        <p className="mb-0 mt-1" style={{ textTransform: 'capitalize', textAlign: 'left' }}>
                            {row.reporter_details[0].username}
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        dataField: 'dated',
        text: 'Report',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <div style={{ textTransform: 'capitalize' }}>Reason - {row.report_reason}</div>
            </>
        ),
    },
    {
        dataField: 'action_',
        text: 'View Reported Content',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <div>
                    <Link
                        to="#"
                        onClick={() => {
                            window.location.href = `/viewed-reported-content/${row.converted_content_id}`
                        }}
                    >
                        <i className="fas fa-eye icon-rounded"></i>
                        {/* <i class="fa-solid fa-eye"></i> */}
                    </Link>
                </div>
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
                    <Link
                        to="#"
                        onClick={() => {
                            props.toggleModal(true, 'action_modal', 'sm', row.converted_content_id);
                        }}
                    >
                        <i className="fas fa-ban icon-rounded"></i>
                    </Link>
                </div>
            </>
        ),
    },
];

export default ContentColumn;
