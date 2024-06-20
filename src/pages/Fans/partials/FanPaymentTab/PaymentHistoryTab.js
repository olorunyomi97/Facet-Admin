import React, { useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from "react-router-dom"
import { connect } from "react-redux"
import { Card, CardBody, Col, Container, Row,  Modal } from "reactstrap"
import PaymentHistoryTable from './PaymentHistoryTable';
import RefundModal from '../../Modals/RefundModal';

const PaymenthistoryTab = props => {
    const { payment } = props;
    const [ modal, set_modal] = useState(false);
	const [ modal_page, set_modal_page ] = useState("");
    const [ modal_size, set_modal_size ] = useState("lg");
    
    const toggleModal = (modal_value, modal, size) => {
        set_modal(modal_value)
        set_modal_page(modal);
		set_modal_size(size)
    }

	const ModalDisplay = props => {
		if(modal_page == 'refund_modal') { return <RefundModal set_modal= {set_modal} /> }
    }
    
    return (
        <React.Fragment>
            <nav className="navbar p-0">
                <div className="container-fluid">
                    <p className="celeb-no">Total Amount of Payments : ₦</p>
                    <div className="d-flex pb-3">
                        <div className="mt-1">
                            <button className="celeb-acc-btn"onClick={() => { toggleModal(true, 'refund_modal', 'sm')}}>Refund Money</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                <PaymentHistoryTable payment = { payment }/>
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
                    set_modal(!modal)
                }}
                >
                <div className="modal-content">
                    <ModalDisplay />
                </div>
            </Modal>
		</React.Fragment>
    )
}

export default PaymenthistoryTab;