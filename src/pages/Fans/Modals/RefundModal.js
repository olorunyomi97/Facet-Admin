import React ,{ useState } from 'react';
import { Modal, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
import '../../../assets/css/celebritycss/celebrity.css';

export default function RefundModal() {
    return (
        <div>
            <ModalBody className="modal-contentt"style={{background:'#1c1c1c'}}>
                <div className="col-md-12">
                    <p className="push-celebs mb-2 mt-2"style={{ textAlign: "left"}}>Refund Money</p>
                    <div className="modal-card"style={{borderRadius:'33px'}}>
                        {/* login input */}
                        {/* <p className="sub-price" style={{textAlign:'left', color:'#E3E3E3'}}><small>Minimum Subscription Price</small></p> */}
                        <div className="login-input-styles mb-3">
                            <input 
                                className="celeb-form form-control login-form text-left mt-3" 
                                placeholder="Refunding Amount" 
                                type="numeric"
                                />
                        </div>
                        <div className="login-input-styles">
                            <Link to="#"><button className="celebs-btn" onClick = { () => set_modal(false) }> Refund </button></Link>
                        </div>
                        {/* login input */}
                    <div>
                    </div>
                    </div>
                </div>
            </ModalBody>
        </div>
    )
}
