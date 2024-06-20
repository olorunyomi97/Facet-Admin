import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
export const sortFunc = (a, b, order, dataField, rowA, rowB) => {
    if (order === 'asc') {
        return Date.parse(a) - Date.parse(b);
    } else if (order === 'desc') {
        return Date.parse(b) - Date.parse(a);
    }
};

const CelebrityColumn = () => [
    // {
    // 	dataField: "_id",
    // 	text: "ID",
    // 	sort: true,

    // },
    {
        dataField: 'username',
        text: 'Username',
        sort: true,
        // formatter: (cellContent, row) => (
        //     <>
        //         <p className="mb-0" style={{ textTransform: 'capitalize' }}>
        //             {row.username}
        //         </p>
        //     </>
        // ),
        formatter: (cellContent, row) => (
            <>
                <div className="row">
                    <div className="col-md-5 p-0" style={{ textAlign: 'center' }}>
                        <img 
                            style={{ borderRadius: '100%' }} 
                            src={row.avatar} 
                            width="30px" 
                            height="30px" 
                        />
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
        formatter: (cellContent, row) => (
            <>
                <p className="mb-0">{row.fullname}</p>
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
        text: 'Number of Subscribers',
        sort: true,
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
        dataField: 'last_login',
        text: 'Last Login',
        sort: false,
        // formatter: (cellContent, row) =>
        // row.last_login_date ? (
        //     <>
        //         {moment(row.last_login_date).isAfter(moment().add(2, 'minutes')) ? (
        //             <Moment format="DD-MM-YYYY" className="mb-0">
        //                 {row.last_login_date}
        //             </Moment>
        //         ) : (
        //             <span className="text-success">online</span>
        //         )}
        //     </>
        // ) : (
        //     <>N/A</>
        // ),
        formatter: (cellContent, row) => (
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

export default CelebrityColumn;
