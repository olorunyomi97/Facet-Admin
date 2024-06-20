import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Modal } from 'reactstrap';
import { getContentDetails, apiError, deleteContent } from '../../../store/actions';
import Moment from 'react-moment';
import DeleteReportedContentModal from './Modal/DeleteModal';
// import ReactPlayer from 'react-player'
// import { Player } from 'video-react';
// import "../../../../node_modules/video-react/dist/video-react.css"; 
// import FileViewer from 'react-file-viewer';

const ViewReportedContent = props => {
    const { content, loading } = props;
    console.log(content, 'reported content assemble')
    console.log(loading)
    // console.log(content);
    // console.log(content.data);

    const [modal, set_modal] = useState(false);
    const [modal_page, set_modal_page] = useState('');
    const [modal_size, set_modal_size] = useState('lg');
    const [content_id, set_content_id] = useState(null);

    // const type = 'jpeg'

    useEffect(() => {
        props.getContentDetails(props.match.params.id);
    }, [getContentDetails]);

    // const deleteFanectContent = () => {
    //     props.deleteContent(props.match.params.id);
    // }

    // const deleteFanectContent = () => {
    //     props.deleteContent(content_id);
    //     // console.log('got here hoe')
    //     // console.log(admin_id)
    // };


    const toggleModal = (modal_value, modal, size) => {
        set_modal(modal_value);
        set_modal_page(modal);
        set_modal_size(size);
        // if (content_id) {
        //     set_content_id(content_id);
        // }
    };

    const ModalDisplay = props => {
        if (modal_page == 'delete_content') {
            return <DeleteReportedContentModal set_modal={set_modal} content={content.data}/>;
        }
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Selected Content | Fanect </title>
                </MetaTags>
                <Container fluid>
                    <nav className="navbar p-0">
                        <div className="container-fluid">
                            <p className="celeb-no"></p>
                            <div className="d-flex pb-3">
                                <div className="mt-1">
                                    <button
                                        className="delete-btn"
                                        onClick={() => {
                                            toggleModal(true, 'delete_content', 'sm');
                                        }}
                                        // onClick = {() => deleteFanectContent()}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>
                    {
                        loading ? 
                        (
                            <div className="text-center my-3">
                                <Link to="#" className="text-success">
                                    <i className="bx bx-loader bx-spin font-size-18 align-middle me-2" />
                                    Loading Reported Content
                                </Link>
                            </div>
                        ) : (
                            <div className="card" style={{ borderRadius: '20px', alignItems: 'center', justifyContent: 'center' }}>
                            {
                                content && 
                                (
                                // <div className="row">
                                <div className="pt-5">
                                    <div>
                                        <img 
                                            src={content.data[0].content_url[0] ? content.data[0].content_url[0] : content.data[0].content_url[0]} 
                                            width="100%" 
                                            height="100%" 
                                        />
                                        {/* <Player
                                            playsInline
                                            poster="/assets/poster.png"
                                            src={content.data[0].content_url[0]}
                                        /> */}
                                    </div>
                                    <div className="pt-3">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h4>
                                                    Posted at  &nbsp;
                                                    <Moment format="hh:mm:s a" className="mb-0">
                                                        {content.data.createdAt}
                                                    </Moment>
                                                </h4>
                                            </div>
                                            <div className="col-md-6">
                                                <div style={{ textAlign: 'right' }}>
                                                    <i className="icon-seperator far fa-thumbs-up"></i>
                                                    <i className="icon-seperator far fa-comment-dots"></i>
                                                    <i className="far fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <h3>
                                            Caption : {content.data.length ? content.data[0].caption : " "}
                                            {/* subscribe.subscriptionType.length ? subscribe.subscriptionType[0].amount : " " */}
                                        </h3>
                                    </div>
                                </div>
                                // </div>  
                                )
                            }
                            
                            </div>
                        )
                    }
                   
                </Container>
            </div>
            <Modal
                isOpen={modal}
                role="dialog"
                autoFocus={true}
                size={modal_size}
                centered={true}
                className="exampleModal"
                tabIndex="-1"
                toggle={() => {
                    set_modal(!modal);
                }}
            >
                <div className="modal-content">
                    <ModalDisplay />
                </div>
            </Modal>
        </React.Fragment>
    );
};

// export default ViewReportedContent;

const mapStateToProps = state => {
    const { error, content, loading } = state.Contents;
    return { error, content, loading };
};

export default withRouter(connect(mapStateToProps, { getContentDetails, apiError, deleteContent })(ViewReportedContent));
