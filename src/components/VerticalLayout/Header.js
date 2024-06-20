import PropTypes from 'prop-types'
import React, { useState } from "react"
import { connect } from "react-redux"
import { Modal } from "reactstrap"
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';
import { Link } from "react-router-dom"
import '../../assets/css/VerticalLayout.css'
import logo from "../../assets/images/fanect.png"
import logoLightSvg from "../../assets/images/fanect.png"
import arrowbox from "../../assets/images/arrowbox.png"
import { withTranslation } from "react-i18next"
import { showRightSidebarAction,toggleLeftmenu,changeSidebarType} from "../../store/actions"
import LogoutModal from "../../pages/Authentication/Modal/LogoutModal";


const Header = props => {
//   const [search, setsearch] = useState(false)
//   const [megaMenu, setmegaMenu] = useState(false)
//   const [socialDrp, setsocialDrp] = useState(false)
//   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
//   const [position, setPosition] = useState();
//   const [open, setOpen] = useState(false);

  const [modal, set_modal] = useState(false);
  const [modal_page, set_modal_page] = useState('');
  const [modal_size, set_modal_size] = useState('lg');

  const toggleModal = (modal_value, modal, size) => {
	set_modal(modal_value);
	set_modal_page(modal);
	set_modal_size(size);
};

const ModalDisplay = props => {
	if (modal_page == 'logout_admin') {
		return <LogoutModal set_modal={set_modal} toggleModal={toggleModal}/>;
	}
};

//   const toggleTopDrawer = () => {
// 	setPosition('right');
// 	setOpen(!open)
//   }

//   const onDrawerClose = () => {
// 	setOpen(false);
//   }

//   function toggleFullscreen() {
// 	if (
// 	  !document.fullscreenElement &&
// 	  /* alternative standard method */ !document.mozFullScreenElement &&
// 	  !document.webkitFullscreenElement
// 	) {
// 	  // current working methods
// 	  if (document.documentElement.requestFullscreen) {
// 		document.documentElement.requestFullscreen()
// 	  } else if (document.documentElement.mozRequestFullScreen) {
// 		document.documentElement.mozRequestFullScreen()
// 	  } else if (document.documentElement.webkitRequestFullscreen) {
// 		document.documentElement.webkitRequestFullscreen(
// 		  Element.ALLOW_KEYBOARD_INPUT
// 		)
// 	  }
// 	} else {
// 	  if (document.cancelFullScreen) {
// 		document.cancelFullScreen()
// 	  } else if (document.mozCancelFullScreen) {
// 		document.mozCancelFullScreen()
// 	  } else if (document.webkitCancelFullScreen) {
// 		document.webkitCancelFullScreen()
// 	  }
// 	}
//   }

//   function tToggle() {
// 	var body = document.body;
// 	if (window.screen.width <= 998) {
// 	  body.classList.toggle("sidebar-enable");
// 	} else {
// 	  body.classList.toggle("vertical-collpsed");
// 	  body.classList.toggle("sidebar-enable");
// 	}
//   }

  return (
	<React.Fragment>
		<div className="fanect-top-border">
			<header id="page-topbar" className="">
				<div className="navbar-header fanect-top-border">
					<div className="d-flex">
						<div className="navbar-brand-box d-lg-none d-md-block">
							<Link to="/" className="logo logo-dark">
								<span className="logo-sm">
									<img src={logo} alt="" height="22" />
								</span>
							</Link>

							<Link to="/" className="logo logo-light">
								<span className="logo-sm">
									<img src={logoLightSvg} alt="" height="22" />
								</span>
							</Link>
						</div>
					</div>
					<div className="d-flex">
						<span className="logo-sm pr-5">
						<Link to ="#">
							<img 
								src={arrowbox} 
								height="30" 
								width="30" 
								onClick={() => {
									toggleModal(true, 'logout_admin', 'sm');
								}}
							/>
						</Link>
						</span>
					</div>
				</div>
			</header>
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
  )
}

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
}

const mapStatetoProps = state => {
  const {
	layoutType,
	showRightSidebar,
	leftMenu,
	leftSideBarType,
  } = state.Layout
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType }
}

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
})(withTranslation()(Header))
