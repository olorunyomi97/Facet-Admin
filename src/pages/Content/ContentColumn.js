import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css"
import VideoThumbnail from 'react-video-thumbnail';
import {ImagesProvider, ThumbnailOptionsProvider, Thumbnails, URLEditor} from 'react-thumbnails';
import './thumbnail.css'

export const sortFunc = (a, b, order, dataField, rowA, rowB) => {
    if (order === 'asc') {
        return Date.parse(a) - Date.parse(b);
    } else if (order === 'desc') {
        return Date.parse(b) - Date.parse(a);
    }
};

const ContentColumn = props => [
    {
        dataField: 'preview',
        text: 'Preview',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <Link 
                    className='text-white' 
                    to="#"
                    onClick={() => {
                        window.location.href = `/content-details/${row._id}`
                    }}
                >
                    <img
                        src={row.content_url ? row.content_url[0]: row.content_url[1]}
                        alt="preview"
                        width="200px"
                        height="120px"
                        style={{ borderRadius: '8%' }}
                    />
                    {/* <ImagesProvider
                        urls={[row.content_url ? row.content_url[0]: row.content_url[1]]}
                    >
                        <ThumbnailOptionsProvider
                            showOptions={new Set(['autoSize', 'size', 'shape', 'shadow', 'border', 'showUrl'])}
                            defaults={{ size: 'medium', shape: 'square', shadow: false, border: false }}>
                            <Thumbnails />
                        </ThumbnailOptionsProvider>
                    </ImagesProvider> */}
                </Link>
            </>
        ),
    },
    // {
    //     dataField: 'video',
    //     text: 'Video',
    //     sort: true,
    //     formatter: (cellContent, row) => (
    //         <>
    //             <Link 
    //                 className='text-white' 
    //                 to="#"
    //                 onClick={() => {
    //                     window.location.href = `/content-details/${row._id}`
    //                 }}
    //             >
    //                 {/* <source
    //                     type="video/mp4"
    //                     src={row.content_url ? row.content_url[0]: row.content_url[1]}
    //                     alt="preview"
    //                     width="180px"
    //                     height="100px"
    //                     style={{ borderRadius: '8%' }}
    //                 /> */}
    //                 <Player
    //                     playsInline
    //                     poster="/assets/poster.png"
    //                     src={row.content_url ? row.content_url[0]: row.content_url[1]}
    //                 />
    //             </Link>
    //         </>
    //     ),
    // },
    {
        dataField: '_id',
        text: 'ID',
        sort: true,
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
    // {
    //     dataField: 'caption',
    //     text: 'Text',
    //     sort: true,
    //     formatter: (cellContent, row) => (
    //         <>
    //             <div>{row.caption}</div>
    //         </>
    //     ),
    // },
    {
        dataField: 'createdAte',
        text: 'Likes',
        sort: true,
        
    },
    {
        dataField: 'comments',
        text: 'Comments',
        sort: true,
        formatter: (cellContent, row) => (
            <>
                <div>{row.comments.length}</div>
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

export default ContentColumn;
