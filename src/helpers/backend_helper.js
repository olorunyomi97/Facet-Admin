import axios from 'axios';
import { post, del, get, put } from './api_helper';
import * as url from './url_helper';

import accessToken from './jwt-token-access/accessToken';

// Gets the logged in user data from local session
const getLoggedInUser = () => {
    const user = localStorage.getItem('user');
    if (user) return JSON.parse(user);
    return null;
};
//Authentication
//is user is logged in
const postAdminLogin = user => post(url.LOGIN_ADMIN, user);
export const verifyPayload = verify_payload => post(url.VERIFY_LOGIN_PAYLOAD, verify_payload);
export const reverifyPayload = verify_payload => post(url.REVERIFY_LOGIN_PAYLOAD, verify_payload);

//Users Section
export const getAllCelebrities = () => get(url.GET_CELEBRITIES);
export const getSingleCeleb = celeb_id => get(`${url.GET_CELEBRITY_DETAILS}/${celeb_id}`);
export const createCelebrity = celebData => post(url.CREATE_CELEBRITIES, celebData);
export const getAllFans = () => get(url.GET_FANS);
export const upgradeFan = fanData => post(url.UPGRADE_FAN, fanData);
export const blockFan = fanData => post(url.BLOCK_FAN, fanData);
export const blockCelebrity = celebData => post(url.BLOCK_CELEBRITY, celebData);
export const getAllBlockedusers = () => get(url.GET_BLOCKED_USERS);
export const unblockUser = user_id => post(url.UNBLOCK_USER, { user_id });

// CONTENT
export const getAllStories = () => get(url.GET_STORIES);
export const getSingleStory = story_id => get(`${url.GET_SINGLE_STORY}/${story_id}`);
// export const deleteStory = story_id => get(`${url.DELETE_STORY}/${story_id}`);
export const deleteStory = story_id => del(`${url.DELETE_STORY}/${story_id}`);
export const deleteSingleStory = story_id => del(`${url.DELETE_SINGLE_STORY}/${story_id}`);
export const getAllLivestreams = () => get(url.GET_LIVESTREAMS);
export const getAllContents = () => get(url.GET_CONTENTS);
export const deleteContent = content_id => del(`${url.DELETE_CONTENT}/${content_id}`);
export const getSingleContent = content_id => get(`${url.GET_CONTENT_DETAILS}/${content_id}`);

// Admins Section
export const getAllAdmins = () => get(url.GET_ADMINS);
export const createAdmin = adminData => post(url.CREATE_ADMINS, adminData);
export const deleteAdmin = admin_id => del(`${url.DELETE_ADMIN}/${admin_id}`);

// Minimum subscripton
export const setSubscription = subscription_price => put(url.SET_SUBSCRIPTION, subscription_price);

// ISSUES -> Reported Users
export const getAllReportedusers = () => get(url.GET_REPORTED_USERS);
export const getAllReportedcontent = () => get(url.GET_REPORTED_CONTENT);

// Transactions
export const getAllTransactions = () => get(url.GET_TRANSACTIONS);

// Subscription Gifts
export const getAllSubscriptionGifts = () => get(url.GET_SUBSCRIPTION_GIFT);

// Financial Overview
export const getAllFinances = () => get(url.GET_FINANCES);

// PUSH NOTIFICATIONS -> celebrities
export const sendPushNotifications = notifications => post(url.SEND_PUSH_NOTIFICATIONS, notifications);

// PUSH NOTIFICATIONS -> fans
export const fanPushNotifications = notifications => post(url.FAN_PUSH_NOTIFICATIONS, notifications);


// PUSH SINGLE NOTIFICATIONS -> celebrity
export const singleNotification = celebData => post(url.SINGLE_NOTIFICATION, celebData);

// PUSH SINGLE NOTIFICATIONS -> fan
export const singleFanNotification = fanData => post(url.SINGLE_FAN_NOTIFICATION, fanData);


//Customers Section
export const getAdminCustomers = params => get(url.GET_ADMIN_CUSTOMERS);
export const saveCustomerData = data => post(url.SAVE_CUSTOMER, data);
export const getUsers = () => get(url.GET_USERS);

// Edit profile
const postJwtProfile = data => post(url.POST_EDIT_JWT_PROFILE, data);

const postFakeProfile = data => post(url.POST_EDIT_PROFILE, data);

// Register Method
const postJwtRegister = (url, data) => {
    return axios
        .post(url, data)
        .then(response => {
            if (response.status >= 200 || response.status <= 299) return response.data;
            throw response.data;
        })
        .catch(err => {
            let message;
            if (err.response && err.response.status) {
                switch (err.response.status) {
                    case 404:
                        message = 'Sorry! the page you are looking for could not be found';
                        break;
                    case 500:
                        message = 'Sorry! something went wrong, please contact our support team';
                        break;
                    case 401:
                        message = 'Invalid credentials';
                        break;
                    default:
                        message = err[1];
                        break;
                }
            }
            throw message;
        });
};

const postFakeResetPwd = data => put(url.POST_PASSWORD_RESET, data);

// Login Method
const postJwtLogin = data => post(url.POST_FAKE_JWT_LOGIN, data);

// postForgetPwd
const postJwtForgetPwd = data => post(url.POST_FAKE_JWT_PASSWORD_FORGET, data);

// postSocialLogin
export const postSocialLogin = data => post(url.SOCIAL_LOGIN, data);

// get Products
export const getProducts = () => get(url.GET_PRODUCTS);

// get Product detail
export const getProductDetail = id => get(`${url.GET_PRODUCTS_DETAIL}/${id}`, { params: { id } });

// get Events
export const getEvents = () => get(url.GET_EVENTS);

// add Events
export const addNewEvent = event => post(url.ADD_NEW_EVENT, event);

// update Event
export const updateEvent = event => put(url.UPDATE_EVENT, event);

// delete Event
export const deleteEvent = event => del(url.DELETE_EVENT, { headers: { event } });

// get Categories
export const getCategories = () => get(url.GET_CATEGORIES);

// get chats
export const getChats = () => get(url.GET_CHATS);

// get groups
export const getGroups = () => get(url.GET_GROUPS);

// get Contacts
export const getContacts = () => get(url.GET_CONTACTS);

// get messages
export const getMessages = (roomId = '') => get(`${url.GET_MESSAGES}/${roomId}`, { params: { roomId } });

// post messages
export const addMessage = message => post(url.ADD_MESSAGE, message);

// get orders
export const getOrders = () => get(url.GET_ORDERS);

// get cart data
export const getCartData = () => get(url.GET_CART_DATA);

// get shops
export const getShops = () => get(url.GET_SHOPS);

// get wallet
export const getWallet = () => get(url.GET_WALLET);

// get crypto order
export const getCryptoOrder = () => get(url.GET_CRYPTO_ORDERS);

// get invoices
export const getInvoices = () => get(url.GET_INVOICES);

// get invoice details
export const getInvoiceDetail = id => get(`${url.GET_INVOICE_DETAIL}/${id}`, { params: { id } });

// get project
export const getProjects = () => get(url.GET_PROJECTS);

// get project details
export const getProjectsDetails = id => get(`${url.GET_PROJECT_DETAIL}/${id}`, { params: { id } });

// get tasks
export const getTasks = () => get(url.GET_TASKS);

// get contacts

export const getUserProfile = () => get(url.GET_USER_PROFILE);

export {
    postAdminLogin,
    getLoggedInUser,
    postFakeProfile,
    postFakeResetPwd,
    postJwtRegister,
    postJwtLogin,
    postJwtForgetPwd,
    postJwtProfile,
};
