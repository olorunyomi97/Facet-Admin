//CUSTOMERS
export const GET_ADMIN_CUSTOMERS = `/admin/get_users?is_active=true`;
export const SAVE_CUSTOMER = `/admin/save_customer`;

//AUTH
export const LOGIN_ADMIN = `admin/login`;
export const VERIFY_LOGIN_PAYLOAD = `admin/verify_login`;
export const REVERIFY_LOGIN_PAYLOAD = `admin/resend_otp`;

//USERS
export const CREATE_CELEBRITIES = `admin/users/create_new_celebrity`;
export const GET_CELEBRITIES = `admin/users/get_celebrities`;
export const GET_CELEBRITY_DETAILS = `admin/users/get_user_detail`;
export const GET_FANS = `admin/users/get_fans`;
export const UPGRADE_FAN = `admin/users/upgrade_fan_to_celebrity`;
export const GET_BLOCKED_USERS = `admin/users/get_blocked_users`;
export const UNBLOCK_USER = `admin/users/unblock_user`;
export const BLOCK_FAN = `admin/users/block_user`;
export const BLOCK_CELEBRITY = `admin/users/block_user`;

// CONTENT
export const GET_STORIES = `admin/posts/get_user_stories`;
export const GET_SINGLE_STORY = `admin/posts/get_single_content`;
export const DELETE_STORY = `admin/posts/delete_content`;
export const DELETE_SINGLE_STORY = `admin/posts/delete_content`;
export const GET_LIVESTREAMS = `admin/posts/get_user_livestreams`;
export const GET_CONTENTS = `admin/feeds/get_all_feeds`;
export const DELETE_CONTENT = `admin/posts/delete_content`;
export const GET_CONTENT_DETAILS = `admin/posts/get_single_content`;

//ADMINS
export const GET_ADMINS = `admin/get_all_admins`;
export const CREATE_ADMINS = `admin/create_admin`;
export const DELETE_ADMIN = `admin/delete_admin`;

// Minimum subscripton
export const SET_SUBSCRIPTION = `settings/set_minimum_subscription`;

// Issues -> Reported Users
export const GET_REPORTED_USERS = `admin/issues/get_reported_users`;
export const GET_REPORTED_CONTENT = `admin/issues/get_reported_content`;

// Transactions
export const GET_TRANSACTIONS = `admin/transactions/get_all_transactions`;

// Subscription Gifts
export const GET_SUBSCRIPTION_GIFT = `admin/subscriptions/get_all_subscription_gifts`;

// Financial Overview
export const GET_FINANCES = `admin/finances/get_financial_overview`

//PUSH NOTIFICATIONS -> celebrities 
export const SEND_PUSH_NOTIFICATIONS = `/messaging/send_push_notifications`

//PUSH NOTIFICATIONS -> fans 
export const FAN_PUSH_NOTIFICATIONS = `/messaging/send_push_notifications`

//PUSH SINGLE NOTIFICATIONS -> celebrity
export const SINGLE_NOTIFICATION = `/messaging/send_push_notifications`

//PUSH SINGLE NOTIFICATIONS -> fan
export const SINGLE_FAN_NOTIFICATION = `/messaging/send_push_notifications`


//REGISTER
export const POST_FAKE_REGISTER = '/post-fake-register';

//LOGIN
export const POST_FAKE_LOGIN = '/post-fake-login';
export const POST_FAKE_JWT_LOGIN = '/post-jwt-login';
export const POST_FAKE_PASSWORD_FORGET = '/fake-forget-pwd';
export const POST_FAKE_JWT_PASSWORD_FORGET = '/jwt-forget-pwd';
export const SOCIAL_LOGIN = '/social-login';
export const POST_PASSWORD_RESET = `/admin/update_password`;

//PROFILE
export const POST_EDIT_JWT_PROFILE = '/post-jwt-profile';
export const POST_EDIT_PROFILE = '/post-fake-profile';

//PRODUCTS
export const GET_PRODUCTS = '/products';
export const GET_PRODUCTS_DETAIL = '/product';

//Mails
export const GET_INBOX_MAILS = '/inboxmails';
export const ADD_NEW_INBOX_MAIL = '/add/inboxmail';
export const DELETE_INBOX_MAIL = '/delete/inboxmail';

//starred mail
export const GET_STARRED_MAILS = '/starredmails';

//important mails
export const GET_IMPORTANT_MAILS = '/importantmails';

//Draft mail
export const GET_DRAFT_MAILS = '/draftmails';

//Send mail
export const GET_SENT_MAILS = '/sentmails';

//Trash mail
export const GET_TRASH_MAILS = '/trashmails';

//CALENDER
export const GET_EVENTS = '/events';
export const ADD_NEW_EVENT = '/add/event';
export const UPDATE_EVENT = '/update/event';
export const DELETE_EVENT = '/delete/event';
export const GET_CATEGORIES = '/categories';

//CHATS
export const GET_CHATS = '/chats';
export const GET_GROUPS = '/groups';
export const GET_CONTACTS = '/contacts';
export const GET_MESSAGES = '/messages';
export const ADD_MESSAGE = '/add/messages';

//KYC
export const COMPLETE_KYC_URL = `/profile/complete_kyc`;
export const ACTIVATE_KYC_URL = `profile/activate_kyc_account`;

//ORDERS
export const GET_ORDERS = '/orders';
export const ADD_NEW_ORDER = '/add/order';
export const UPDATE_ORDER = '/update/order';
export const DELETE_ORDER = '/delete/order';

//CART DATA
export const GET_CART_DATA = '/cart';

//CUSTOMERS
export const GET_CUSTOMERS = '/customers';
export const ADD_NEW_CUSTOMER = '/add/customer';
export const UPDATE_CUSTOMER = '/update/customer';
export const DELETE_CUSTOMER = '/delete/customer';

//SHOPS
export const GET_SHOPS = '/shops';

//CRYPTO
export const GET_WALLET = '/wallet';
export const GET_CRYPTO_ORDERS = '/crypto/orders';

//INVOICES
export const GET_INVOICES = '/invoices';
export const GET_INVOICE_DETAIL = '/invoice';

//PROJECTS
export const GET_PROJECTS = '/projects';
export const GET_PROJECT_DETAIL = '/project';
export const ADD_NEW_PROJECT = '/add/project';
export const UPDATE_PROJECT = '/update/project';
export const DELETE_PROJECT = '/delete/project';

//TASKS
export const GET_TASKS = '/tasks';

//CONTACTS
export const GET_USERS = '/users';
export const GET_USER_PROFILE = '/user';
export const ADD_NEW_USER = '/add/user';
export const UPDATE_USER = '/update/user';
export const DELETE_USER = '/delete/user';

//dashboard charts data
export const GET_WEEKLY_DATA = '/weekly-data';
export const GET_YEARLY_DATA = '/yearly-data';
export const GET_MONTHLY_DATA = '/monthly-data';

export const TOP_SELLING_DATA = '/top-selling-data';

export const GET_EARNING_DATA = '/earning-charts-data';

export const GET_PRODUCT_COMMENTS = '/comments-product';

export const ON_LIKNE_COMMENT = '/comments-product-action';

export const ON_ADD_REPLY = '/comments-product-add-reply';

export const ON_ADD_COMMENT = '/comments-product-add-comment';
