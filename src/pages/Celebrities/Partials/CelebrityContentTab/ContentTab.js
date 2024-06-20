import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardBody, Col, Container, Row, Modal } from 'reactstrap';
import ContentTable from './ContentTable';
import DeleteContentModal from './Modal/ContentDeleteModal';

const ContentTab = props => {
    const { content, user } = props;
    // console.log(content);
    const [modal, set_modal] = useState(false);
    const [modal_page, set_modal_page] = useState('');
    const [modal_size, set_modal_size] = useState('lg');
    const [content_id, set_content_id] = useState(null);

    // const deleteFanectContent = () => {
    //     props.deleteContent(content_id);
    //     // console.log('got here hoe')
    //     // console.log(admin_id)
    // };

    const toggleModal = (modal_value, modal, size, content_id = false) => {
        set_modal(modal_value);
        set_modal_page(modal);
        set_modal_size(size);
        if (content_id) {
            set_content_id(content_id);
        }
    };

    const ModalDisplay = props => {
        if (modal_page == 'delete_modal') {
            return <DeleteContentModal set_modal={set_modal} toggleModal={toggleModal} user={user}/>;
        }
    };



    return (
        <React.Fragment>
            <MetaTags>
                <title>Celebrities | Fanect </title>
            </MetaTags>
            <nav className="navbar p-0">
                <div className="container-fluid">
                    <p className="celeb-no">Total Number of Content ({content.length})</p>
                    <div className="d-flex pb-3">
                        <div className="mt-1">{/* <button className="celeb-btn" >Send Push</button> */}</div>
                        <div className="mt-1">
                            {/* <button className="celeb-acc-btn">Create Celebrity Account</button> */}
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                <ContentTable content={content} toggleModal={toggleModal}/>
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

export default ContentTab;

// const mapStateToProps = state => {
//     const { error, content, loading } = state.Contents;
//     return { error, content, loading };
// };

// export default withRouter(connect(mapStateToProps, { deleteContent })(ContentTab));

