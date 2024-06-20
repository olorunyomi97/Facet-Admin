import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import '../../assets/css/HorizontalLayout.css'

//i18n
import { withTranslation } from "react-i18next";
import SidebarContent from "./SidebarContent";

import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
// import logoLightPng from "../../assets/images/fanect.png";
// import logoLightSvg from "../../assets/images/fanect.png";
// import logoDark from "../../assets/images/fanect.png";

const Sidebar = props => {

  return (
    <React.Fragment>
      <div className="horizontal-fanect-border">
        <div className="vertical-menu horizontal-fanect-border">
          {/* <div className="navbar-brand-box">
            <Link to="/" className="logo logo-dark">
              <span className="logo-sm">
                <img src={logo} alt="" height="30" />
              </span>
              <span className="logo-lg">
                <img src={logoDark} alt="" height="30" />
              </span>
            </Link>

            <Link to="/" className="logo logo-light">
              <span className="logo-sm">
                <img src={logoLightSvg} alt="" height="30" />
              </span>
              <span className="logo-lg">
                <img src={logoLightPng} alt="" height="30" />
              </span>
            </Link>
          </div> */}
          <div data-simplebar className="h-100">
            {props.type !== "condensed" ? <SidebarContent /> : <SidebarContent />}
          </div>
          <div className="sidebar-background"></div>
        </div>
        </div>
    </React.Fragment>
  )
}

Sidebar.propTypes = {
  type: PropTypes.string,
}

const mapStatetoProps = state => {
  return {
    layout: state.Layout,
  }
}
export default connect(
  mapStatetoProps,
  {}
)(withRouter(withTranslation()(Sidebar)))
