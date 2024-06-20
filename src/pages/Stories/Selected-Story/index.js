import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Modal } from 'reactstrap';
import Moment from 'react-moment';
import wiz from '../../../assets/images/wiz.png';
import DeleteStoryModal from './Modal/DeleteModal';
import { getSingleStory, apiError } from 'store/actions';
// import { deleteSingleStory } from '../../../store/actions'

const SelectedStory = props => {
    const { story, loading } = props;
    console.log('single story');
    console.log(story);
    console.log(story.data);

    const [modal, set_modal] = useState(false);
    const [modal_page, set_modal_page] = useState('');
    const [modal_size, set_modal_size] = useState('lg');

    useEffect(() => {
        props.getSingleStory(props.match.params.id);
    }, [getSingleStory]);

  
    const toggleModal = (modal_value, modal, size) => {
        set_modal(modal_value);
        set_modal_page(modal);
        set_modal_size(size);
    };

    const ModalDisplay = props => {
        if (modal_page == 'delete_story') {
            return <DeleteStoryModal set_modal={set_modal} story={story.data}/>;
        }

    };

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Selected Story | Fanect </title>
                </MetaTags>
                <Container fluid>
                    <div className="text-center my-3">
                    </div>
                    <nav className="navbar p-0">
                        <div className="container-fluid">
                            <p className="celeb-no"></p>
                            <div className="d-flex pb-3">
                                <div className="mt-1">
                                    <button
                                        className="delete-btn"
                                        onClick={() => {
                                            toggleModal(true, 'delete_story', 'sm');
                                        }}
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
                                    Loading Selected Story
                                </Link>
                            </div>
                        ) : (
                            <div className="card" style={{ borderRadius: '20px' }}>
                                {
                                    story && 
                                    (
                                        <div className="profile-tab">
                                            <div className="row">
                                                <div className=" pt-4 pl-4" style={{ paddingLeft: '35px' }}>
                                                    <div style={{ textAlign: 'center' }}>
                                                    <img src={story.data.length ? story.data[0].content_url : " "} width="50%" height="50%" />
                                                    </div>
                                                    <div className="pt-3">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                            <p>
                                                                Posted on  &nbsp;
                                                                <Moment format="DD-MM-YYYY" className="mb-0">
                                                                    {story.data.createdAt}
                                                                </Moment>
                                                                &nbsp; by  &nbsp;
                                                                <Moment format="hh:mm:s a" className="mb-0">
                                                                    {story.data.createdAt}
                                                                </Moment>
                                                            </p>
                                                            </div>
                                                        </div>
                                                        <p>
                                                            {story.data.length ? story.data[0].caption : " "}
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
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

// export default SelectedStory;

const mapStateToProps = state => {
    const { error, story, loading } = state.Stories;
    return { error, story, loading };
};

export default withRouter(connect(mapStateToProps, { getSingleStory, apiError })(SelectedStory));
