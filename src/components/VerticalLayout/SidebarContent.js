import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import logo from '../../assets/images/logo.svg';
// import logoLightPng from "../../assets/images/fanect.png";
// import logoLightSvg from "../../assets/images/fanect.png";
import logoDark from '../../assets/images/fanect.png';
import issue from '../../assets/images/issue.png';
import admin from '../../assets/images/icons/admin.png';
import content from '../../assets/images/icons/content.png';
import fin from '../../assets/images/icons/fin.png';
import stories from '../../assets/images/icons/stories.png';
import gift from '../../assets/images/icons/gift.png';
import subtract from '../../assets/images/icons/Subtract.png';
import vector from '../../assets/images/icons/Vector.png';
import '../../assets/css/HorizontalLayout.css';

// //Import Scrollbar
import SimpleBar from 'simplebar-react';

// MetisMenu
import MetisMenu from 'metismenujs';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

//i18n
import { withTranslation } from 'react-i18next';

const SidebarContent = props => {
    const ref = useRef();
    // Use ComponentDidMount and ComponentDidUpdate method symultaniously
    useEffect(() => {
        const pathName = props.location.pathname;

        const initMenu = () => {
            new MetisMenu('#side-menu');
            let matchingMenuItem = null;
            const ul = document.getElementById('side-menu');
            const items = ul.getElementsByTagName('a');
            for (let i = 0; i < items.length; ++i) {
                if (pathName === items[i].pathname) {
                    matchingMenuItem = items[i];
                    break;
                }
            }
            if (matchingMenuItem) {
                activateParentDropdown(matchingMenuItem);
            }
        };
        initMenu();
    }, [props.location.pathname]);

    useEffect(() => {
        ref.current.recalculate();
    });

    function scrollElement(item) {
        if (item) {
            const currentPosition = item.offsetTop;
            if (currentPosition > window.innerHeight) {
                ref.current.getScrollElement().scrollTop = currentPosition - 300;
            }
        }
    }

    function activateParentDropdown(item) {
        item.classList.add('active');
        const parent = item.parentElement;
        const parent2El = parent.childNodes[1];
        if (parent2El && parent2El.id !== 'side-menu') {
            parent2El.classList.add('mm-show');
        }

        if (parent) {
            parent.classList.add('mm-active');
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add('mm-show'); // ul tag

                const parent3 = parent2.parentElement; // li tag

                if (parent3) {
                    parent3.classList.add('mm-active'); // li
                    parent3.childNodes[0].classList.add('mm-active'); //a
                    const parent4 = parent3.parentElement; // ul
                    if (parent4) {
                        parent4.classList.add('mm-show'); // ul
                        const parent5 = parent4.parentElement;
                        if (parent5) {
                            parent5.classList.add('mm-show'); // li
                            parent5.childNodes[0].classList.add('mm-active'); // a tag
                        }
                    }
                }
            }
            scrollElement(item);
            return false;
        }
        scrollElement(item);
        return false;
    }

    return (
        <React.Fragment>
            <div className="horizontal-fanect-border">
                <SimpleBar className="h-100" ref={ref}>
                    <div id="sidebar-menu" className="horizontal-fanect-border">
                        <ul className="metismenu list-unstyled" id="side-menu">
                            {/* <li className="menu-title">{props.t("Menu")} </li> */}
                            <li>
                                <div className="navbar-brand-box horizontal-fanect-border mb-5">
                                    <Link to="/" className="logo logo-dark">
                                        <span className="logo-sm">
                                            <img src={logo} alt="" height="30" />
                                        </span>
                                        <span className="logo-lg">
                                            <img src={logoDark} alt="" height="30" />
                                        </span>
                                    </Link>
                                </div>
                            </li>
                            {/* USERS LINK */}
                            <li className="mt-2">
                                <Link to="/#" className="has-arrow ">
                                    <img src={vector} alt="" height="18" />
                                    &nbsp;&nbsp; &nbsp;&nbsp;<span>{props.t('Users')}</span>
                                </Link>
                                <ul className="sub-menu vertical-border " aria-expanded="false">
                                    <li>
                                        <Link to="/celebrities" style={{ paddingLeft: '12px' }}>
                                            {props.t('Celebrities')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/fans" style={{ paddingLeft: '12px' }}>
                                            {props.t('Fans')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blocked-users" style={{ paddingLeft: '12px' }}>
                                            {props.t('Blocked Users')}
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* CONTENT */}
                            <li className="mt-2">
                                <Link to="/content">
                                    <img src={content} alt="" height="16" />
                                    &nbsp;&nbsp; &nbsp;&nbsp;<span>{props.t('Content')}</span>
                                </Link>
                            </li>

                            {/* STORIES */}
                            {/* <li className="mt-2">
                                <Link to="/stories">
                                    <img src={stories} alt="" height="16" />
                                    &nbsp;&nbsp; &nbsp;&nbsp;<span>{props.t('Stories')}</span>
                                </Link>
                            </li> */}
                            {/* ALL STORIES */}
                            <li className="mt-2">
                                <Link to="/#" className="has-arrow ">
                                    <img src={stories} alt="" height="18" />
                                    &nbsp;&nbsp; &nbsp;&nbsp;<span>{props.t('All Stories')}</span>
                                </Link>
                                <ul className="sub-menu vertical-border " aria-expanded="false">
                                    <li>
                                        <Link to="/stories" style={{ paddingLeft: '12px' }}>
                                            {props.t('User Stories')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/livestreams" style={{ paddingLeft: '12px' }}>
                                            {props.t('Live Streams')}
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* ISSUES */}
                            <li className="mt-2">
                                <Link to="login" className="has-arrow ">
                                    <img src={issue} alt="" height="18" />
                                    &nbsp;&nbsp; &nbsp;&nbsp;<span>{props.t('Issues')}</span>
                                </Link>
                                <ul className="sub-menu vertical-border" aria-expanded="false">
                                    <li>
                                        <Link to="/reported-users" style={{ paddingLeft: '12px' }}>
                                            {props.t('Reported Users')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/reported-content" style={{ paddingLeft: '12px' }}>
                                            {props.t('Reported Content')}
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* FINANCES */}
                            <li className="mt-2">
                                <Link to="/financial-overview">
                                    <img src={fin} alt="" height="16" />
                                    &nbsp;&nbsp; &nbsp;&nbsp;<span>{props.t('Financial Overview')}</span>
                                </Link>
                            </li>

                            {/* TRANSACTIONS */}
                            <li className="mt-2">
                                <Link to="/transactions">
                                    <img src={subtract} alt="" height="16" />
                                    &nbsp;&nbsp; &nbsp;&nbsp;<span>{props.t('Transactions')}</span>
                                </Link>
                            </li>

                            {/* GIFTS */}
                            <li className="mt-2">
                                <Link to="/subscription-gifts">
                                    <img src={gift} alt="" height="16" />
                                    &nbsp;&nbsp; &nbsp;&nbsp;<span>{props.t('Subscription Gifts')}</span>
                                </Link>
                            </li>

                            {/* ADMINS */}
                            <li className="mt-2">
                                <Link to="/admins">
                                    <img src={admin} alt="" height="16" />
                                    &nbsp;&nbsp; &nbsp;&nbsp;<span>{props.t('Admins')}</span>
                                </Link>
                            </li>

                            {/* Stuff */}
                            <li className="mt-2">
                                <Link to="#">
                                    <span>{props.t('')}</span>
                                </Link>
                            </li>
                            {/* Stuff */}
                        </ul>
                    </div>
                </SimpleBar>
            </div>
        </React.Fragment>
    );
};

SidebarContent.propTypes = {
    location: PropTypes.object,
    t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));
