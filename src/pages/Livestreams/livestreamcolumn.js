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

const LivestreamsColumn = props => [
    {
        dataField: '#',
        text: 'Livestream ID',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <Link to="#" style={{ color: '#1FCC79' }}>
                    { row._id }
                    {/* {row.livestream_details.length ? row.livestream_details[0].meetingId : " "} */}
                </Link>
            </>
        ),
    },
    // {
    //     dataField: '##',
    //     text: 'Meeting ID',
    //     sort: true,
    //     formatter: (cellContent, row) => (
    //         <>
    //             <Link to="#" style={{ color: '#1FCC79' }}>
    //                 { row.livestream_details.meeting.meeting_id }
    //                 {/* {row.livestream_details.length ? row.livestream_details[0].meetingId : " "} */}
    //             </Link>
    //         </>
    //     ),
    // },
    {
        dataField: 's',
        text: 'Name',
        sort: true,
        formatter: (cellContent, row) => <>{row.celebrity[0].fullname}</>,
    },
    {
        dataField: '1',
        text: 'Username',
        sort: true,
        formatter: (cellContent, row) => (
            <> <div style={{ textTransform: 'capitalize' }}>{row.celebrity[0].username}</div> </>
        ),
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
        dataField: 'last_login_date',
        text: 'Most Recent Login',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <Moment format="DD-MM-YYYY - h:mm a">{row.last_login_date}</Moment>
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
];

export default LivestreamsColumn;
