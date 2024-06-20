import { combineReducers } from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication
import Login from './auth/login/reducer';

//Celebrities
import Celebrities from './celebrities/reducer';

//fans
import Fans from './fans/reducer';

//blocked users
import BlockedUsers from './blocked-users/reducer';

// Admins
import Admins from './admins/reducer';

// Minimun Subscription
import MinimumSubscription from './settings/reducer';

// Stories
import Stories from './stories/reducer';

// Livestreams
import Livestreams from './livestreams/reducer';

// contents
import Contents from './content/reducer';

// Issues -> Reported Users
import ReportedUsers from './reported-users/reducer';

// Issues -> Reported Content
import ReportedContent from './report-content/reducer';

// Transactions
import Transactions from './transactions/reducer';

//Subscription Gift
import SubscriptionGifts from './subscription-gift/reducer';

// Financial Overview
import Finances from './finances/reducer';

// Celeb Push Notifications
import CelebPushNotifications from './celeb-push-notifications/reducer';

// Fan Push Notifications
import FanPushNotifications from './fan-push-notifications/reducer';


//Calendar
import calendar from './calendar/reducer';


//crypto
import crypto from './crypto/reducer';


//projects
import projects from './projects/reducer';

//tasks
import tasks from './tasks/reducer';

//contacts
import contacts from './contacts/reducer';

//Dashboard
import Dashboard from './dashboard/reducer';

//Dasboard saas
import DashboardSaas from './dashboard-saas/reducer';

const rootReducer = combineReducers({
    // public
    Layout,
    Login,
    Celebrities,
    Fans,
    BlockedUsers,
    Admins,
    MinimumSubscription,
    Contents,
    Stories,
    Livestreams,
    ReportedUsers,
    ReportedContent,
    Transactions,
    SubscriptionGifts,
    Finances,
    CelebPushNotifications,
    FanPushNotifications,
    calendar,
    crypto,
    projects,
    tasks,
    contacts,
    Dashboard,
    DashboardSaas,
});

export default rootReducer;
