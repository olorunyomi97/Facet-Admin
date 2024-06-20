import React, { useState, useRef } from 'react';
import IdleTimer from 'react-idle-timer';
import { Modal, ModalBody } from 'reactstrap';
import { Redirect } from 'react-router';

// Modal.setAppElement('#root')
function idletimer() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [isLoggedOut, setIsLoggedOut] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const idleTimerRef = useRef(null)
    const sessionTimeoutRef = useRef(null)

    const onIdle = () => {
        console.log('User is Idle')
        setModalIsOpen(true)
        sessionTimeoutRef.current = setTimeout(logOut, 30000)
    }

    const stayActive = () => {
        setModalIsOpen(false)
        clearTimeout(sessionTimeoutRef.current)
        console.log('User is active')
    }

    const logOut = () => {
        setModalIsOpen(false)
        setIsLoggedIn(false)
        clearTimeout(sessionTimeoutRef.current)
        console.log('User has logged out')
        window.location.replace("./login")
    }
    
    return (
        <div>
            {
                isLoggedIn ? "" : <Redirect to="/login"/>
            }
            <Modal 
                isOpen={modalIsOpen} 
                className="modal-contentt"
                style={{ background: '#1c1c1c', borderRadius: '33px', marginTop:'100px' }}
            >
                <ModalBody style={{ background: '#1c1c1c' }}>
                <div className="col-md-12">
                    <p className="create-celebs mb-2 mt-2 text-center">You have been Idle for 30 minutes. would you like to be...</p>
                    <div className="modal-card" style={{ borderRadius: '33px' }}>
                        <div className="row login-input-styles">
                            <div className="col-md-6">
                                <button className="block-btn" onClick={logOut}>Logged out</button>
                            </div>
                            <div className="col-md-6">
                                <button className="stay-active-btn" onClick={stayActive}>Kept signed in</button>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
                </ModalBody>
            </Modal>
            <IdleTimer 
                ref={idleTimerRef} 
                timeout={ 180000 * 1000 }
                onIdle={onIdle}
            > 
            </IdleTimer>
        </div>
    )
}

export default idletimer
