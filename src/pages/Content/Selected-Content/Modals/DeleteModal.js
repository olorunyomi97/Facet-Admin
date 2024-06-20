import React, { useState, useEffect } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteContent } from 'store/actions';

const DeleteContentModal = props => {
    const { error, set_modal, content } = props
    console.log(content)

    const [modal_loading, set_modal_loading] = useState(false);

    // const delet_single_content = () => {
    //     set_modal_loading(true);
    //     props.deleteContent({ content_id: props.match.params.id })
    // }

    const deleteFanectContent = () => {
        props.deleteContent(props.match.params.id);
    }


    return (
        <div>
            <ModalBody className="modal-contentt" style={{ background: '#1c1c1c' }}>
                <div className="col-md-12">
                    <p className="create-celebs mt-2 text-center">Delete this Content</p>
                    <div className="modal-card" style={{ borderRadius: '33px' }}>
                        {/* login input */}
                        <div className="row login-input-styles">
                            <div className="col-md-6">
                                <Link 
                                    to="#"
                                    onClick={() => {
                                        set_modal(false);
                                    }}
                                >
                                    <button className="cancel-btn"> Cancel </button>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to="#"  
                                    onClick = {() => deleteFanectContent()}>
                                    <button className="block-btn"> 
                                        {' '}
                                        Delete{' '} 
                                    </button>
                                </Link>
                            </div>
                            {/* <div className="col-md-6">
                                <Link onClick = {() => props.toggleModal(false, 'delete_modal', 'sm' )} to="#"><button className="cancel-btn"> Cancel </button></Link>
                            </div>
                            <div className="col-md-6">
                                <Link to="#" onClick = {() => deleteAdmin()}><button className="block-btn"> Delete Admin </button></Link>
                            </div> */}
                        </div>
                        {/* login input */}
                        <div></div>
                    </div>
                </div>
            </ModalBody>
        </div>
    );
};

// export default DeleteContentModal;

const mapStateToProps = state => {
    const { error, content, loading } = state.Contents;
    return { error, loading, content };
};
export default withRouter(connect(mapStateToProps, { deleteContent })(DeleteContentModal));
