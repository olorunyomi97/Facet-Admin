import React from 'react';
import { Redirect } from 'react-router-dom';

// Authentication related pages
import Login from '../pages/Authentication/Login';
import VerifyLogin from 'pages/Authentication/VerifyLogin';
import Logout from '../pages/Authentication/Logout';

//Users
import Celebrities from '../pages/Celebrities/index';
import Fans from '../pages/Fans/index';
import Blockedusers from '../pages/Blockedusers/index';
import Details from '../pages/Celebrities/Details/index';
import SingleCelebrityContent from '../pages/Celebrities/Partials/CelebrityContentTab/SingleCelebrityContent';
import FanDetails from '../pages/Fans/FanDetails/index';

// Issues
import ReportedUsers from '../pages/Reported-Users/index';
import ReportedContent from '../pages/Reported-Content/index';
import ViewReportedContent from '../pages/Reported-Content/ViewReportedContent/index';

// Content
import Content from '../pages/Content/index';
import SelectedContent from '../pages/Content/Selected-Content/index';

// Stories
import Stories from '../pages/Stories/index';
import SelectedStory from '../pages/Stories/Selected-Story/index';

// Livestream
import Livestreams from '../pages/Livestreams/index';
// Financial Overview
import FinancialOverview from '../pages/Financial-Overview/index';

// Transactions
import Transactions from '../pages/Transactions/index';

// Subscription Gifts
import SubscriptionGifts from '../pages/Subscription-Gifts/index';

// Admins
import Admins from '../pages/Admin/index';




// Pages Calendar
// import Calendar from "../pages/Calendar/index"

// //Tasks
import TasksList from '../pages/Tasks/tasks-list';
import TasksKanban from '../pages/Tasks/tasks-kanban';
import TasksCreate from '../pages/Tasks/tasks-create';

// //Projects
import ProjectsGrid from '../pages/Projects/projects-grid';
import ProjectsList from '../pages/Projects/projects-list';
import ProjectsOverview from '../pages/Projects/ProjectOverview/projects-overview';
import ProjectsCreate from '../pages/Projects/projects-create';

// // //Ecommerce Pages
// import EcommerceProducts from '../pages/Ecommerce/EcommerceProducts/index';
// import EcommerceProductDetail from '../pages/Ecommerce/EcommerceProducts/EcommerceProductDetail';
// import EcommerceOrders from '../pages/Ecommerce/EcommerceOrders/index';
// import EcommerceCustomers from '../pages/Ecommerce/EcommerceCustomers/index';
// import EcommerceCart from '../pages/Ecommerce/EcommerceCart';
// import EcommerceCheckout from '../pages/Ecommerce/EcommerceCheckout';
// import EcommerceShops from '../pages/Ecommerce/EcommerceShops/index';
// import EcommerceAddProduct from '../pages/Ecommerce/EcommerceAddProduct';



// Dashboard
import Dashboard from '../pages/Dashboard/index';
import DashboardSaas from '../pages/Dashboard-saas/index';
import DashboardCrypto from '../pages/Dashboard-crypto/index';
import Blog from '../pages/Dashboard-Blog/index';

//Crypto
import CryptoWallet from '../pages/Crypto/CryptoWallet/crypto-wallet';
import CryptoBuySell from '../pages/Crypto/crypto-buy-sell';
import CryptoExchange from '../pages/Crypto/crypto-exchange';
import CryptoLending from '../pages/Crypto/crypto-lending';
import CryptoOrders from '../pages/Crypto/CryptoOrders/crypto-orders';
import CryptoKYCApplication from '../pages/Crypto/crypto-kyc-application';
import CryptoIcoLanding from '../pages/Crypto/CryptoIcoLanding/index';

// Charts
import ChartApex from '../pages/Charts/Apexcharts';
import ChartistChart from '../pages/Charts/ChartistChart';
import ChartjsChart from '../pages/Charts/ChartjsChart';
import EChart from '../pages/Charts/EChart';
import SparklineChart from '../pages/Charts/SparklineChart';
import ChartsKnob from '../pages/Charts/charts-knob';
import ReCharts from '../pages/Charts/ReCharts';


//Icons
import IconBoxicons from '../pages/Icons/IconBoxicons';
import IconDripicons from '../pages/Icons/IconDripicons';
import IconMaterialdesign from '../pages/Icons/IconMaterialdesign';
import IconFontawesome from '../pages/Icons/IconFontawesome';

//Tables
import BasicTables from '../pages/Tables/BasicTables';
import DatatableTables from '../pages/Tables/DatatableTables';
import ResponsiveTables from '../pages/Tables/ResponsiveTables';
import EditableTables from '../pages/Tables/EditableTables';
import DragDropTables from '../pages/Tables/DragDropTables';


//Ui
import UiAlert from '../pages/Ui/UiAlert';
import UiButtons from '../pages/Ui/UiButtons';
import UiCards from '../pages/Ui/UiCards';
import UiCarousel from '../pages/Ui/UiCarousel';
import UiColors from '../pages/Ui/UiColors';
import UiDropdown from '../pages/Ui/UiDropdown';
import UiGeneral from '../pages/Ui/UiGeneral';
import UiGrid from '../pages/Ui/UiGrid';
import UiImages from '../pages/Ui/UiImages';
import UiLightbox from '../pages/Ui/UiLightbox';
import UiModal from '../pages/Ui/UiModal';
import UiProgressbar from '../pages/Ui/UiProgressbar';
import UiSweetAlert from '../pages/Ui/UiSweetAlert';
import UiTabsAccordions from '../pages/Ui/UiTabsAccordions';
import UiTypography from '../pages/Ui/UiTypography';
import UiVideo from '../pages/Ui/UiVideo';
import UiSessionTimeout from '../pages/Ui/UiSessionTimeout';
import UiRating from '../pages/Ui/UiRating';
import UiRangeSlider from '../pages/Ui/UiRangeSlider';
import UiNotifications from '../pages/Ui/ui-notifications';
import UiDrawer from 'pages/Ui/UiDrawer';
import UiBreadcrumb from '../pages/Ui/UiBreadcrumb';

//Pages
import PagesStarter from '../pages/Utility/pages-starter';
import PagesMaintenance from '../pages/Utility/pages-maintenance';
import PagesComingsoon from '../pages/Utility/pages-comingsoon';
import PagesTimeline from '../pages/Utility/pages-timeline';
import PagesFaqs from '../pages/Utility/pages-faqs';
import PagesPricing from '../pages/Utility/pages-pricing';
import Pages404 from '../pages/Utility/pages-404';
import Pages500 from '../pages/Utility/pages-500';

//Contacts
import ContactsGrid from '../pages/Contacts/contacts-grid';
import ContactsList from '../pages/Contacts/ContactList/contacts-list';
import ContactsProfile from '../pages/Contacts/ContactsProfile/contacts-profile';

const authProtectedRoutes = [
    { path: '/celebrities', component: Celebrities },
    { path: '/fans', component: Fans },
    { path: '/celebrity-details/:id', component: Details },
    { path: '/each-celebrity-content/:id', component: SingleCelebrityContent },
    { path: '/fan-details/:id', component: FanDetails },
    { path: '/blocked-users', component: Blockedusers },

    // Issues
    { path: '/reported-users', component: ReportedUsers },
    { path: '/reported-content', component: ReportedContent },
    { path: '/viewed-reported-content/:id', component: ViewReportedContent },


    // Content
    { path: '/content', component: Content },
    { path: '/content-details/:id', component: SelectedContent },

    // Stories
    { path: '/stories', component: Stories },
    { path: '/story-details/:id', component: SelectedStory },

    // Live Streams
    { path: '/livestreams', component: Livestreams },

    //Financial Overview
    { path: '/financial-overview', component: FinancialOverview },

    // Transactions
    { path: '/transactions', component: Transactions },

    // Subscription Gifts
    { path: '/subscription-gifts', component: SubscriptionGifts },

    // Admin
    { path: '/admins', component: Admins },

    { path: '/dashboard', component: Dashboard },
    { path: '/dashboard-saas', component: DashboardSaas },
    { path: '/dashboard-crypto', component: DashboardCrypto },
    { path: '/blog', component: Blog },

    //Crypto
    { path: '/crypto-wallet', component: CryptoWallet },
    { path: '/crypto-buy-sell', component: CryptoBuySell },
    { path: '/crypto-exchange', component: CryptoExchange },
    { path: '/crypto-lending', component: CryptoLending },
    { path: '/crypto-orders', component: CryptoOrders },
    { path: '/crypto-kyc-application', component: CryptoKYCApplication },


    

    // //calendar
    // { path: "/calendar", component: Calendar },

    // //Ecommerce
    // { path: '/ecommerce-product-detail/:id', component: EcommerceProductDetail },
    // { path: '/ecommerce-products', component: EcommerceProducts },
    // { path: '/ecommerce-orders', component: EcommerceOrders },
    // { path: '/ecommerce-customers', component: EcommerceCustomers },
    // { path: '/ecommerce-cart', component: EcommerceCart },
    // { path: '/ecommerce-checkout', component: EcommerceCheckout },
    // { path: '/ecommerce-shops', component: EcommerceShops },
    // { path: '/ecommerce-add-product', component: EcommerceAddProduct },


    // Tasks
    { path: '/tasks-list', component: TasksList },
    { path: '/tasks-kanban', component: TasksKanban },
    { path: '/tasks-create', component: TasksCreate },

    //Projects
    { path: '/projects-grid', component: ProjectsGrid },
    { path: '/projects-list', component: ProjectsList },
    { path: '/projects-overview', component: ProjectsOverview },
    { path: '/projects-overview/:id', component: ProjectsOverview },
    { path: '/projects-create', component: ProjectsCreate },



    // Contacts
    { path: '/contacts-grid', component: ContactsGrid },
    { path: '/contacts-list', component: ContactsList },
    { path: '/contacts-profile', component: ContactsProfile },

    //Charts
    { path: '/apex-charts', component: ChartApex },
    { path: '/chartist-charts', component: ChartistChart },
    { path: '/chartjs-charts', component: ChartjsChart },
    { path: '/e-charts', component: EChart },
    { path: '/sparkline-charts', component: SparklineChart },
    { path: '/charts-knob', component: ChartsKnob },
    { path: '/re-charts', component: ReCharts },

    // Icons
    { path: '/icons-boxicons', component: IconBoxicons },
    { path: '/icons-dripicons', component: IconDripicons },
    { path: '/icons-materialdesign', component: IconMaterialdesign },
    { path: '/icons-fontawesome', component: IconFontawesome },

    // Tables
    { path: '/tables-basic', component: BasicTables },
    { path: '/tables-datatable', component: DatatableTables },
    { path: '/tables-responsive', component: ResponsiveTables },
    { path: '/tables-editable', component: EditableTables },
    { path: '/tables-dragndrop', component: DragDropTables },

 
    // Ui
    { path: '/ui-alerts', component: UiAlert },
    { path: '/ui-buttons', component: UiButtons },
    { path: '/ui-cards', component: UiCards },
    { path: '/ui-carousel', component: UiCarousel },
    { path: '/ui-colors', component: UiColors },
    { path: '/ui-dropdowns', component: UiDropdown },
    { path: '/ui-general', component: UiGeneral },
    { path: '/ui-grid', component: UiGrid },
    { path: '/ui-images', component: UiImages },
    { path: '/ui-lightbox', component: UiLightbox },
    { path: '/ui-modals', component: UiModal },
    { path: '/ui-progressbars', component: UiProgressbar },
    { path: '/ui-sweet-alert', component: UiSweetAlert },
    { path: '/ui-tabs-accordions', component: UiTabsAccordions },
    { path: '/ui-typography', component: UiTypography },
    { path: '/ui-video', component: UiVideo },
    { path: '/ui-session-timeout', component: UiSessionTimeout },
    { path: '/ui-rating', component: UiRating },
    { path: '/ui-rangeslider', component: UiRangeSlider },
    { path: '/ui-notifications', component: UiNotifications },
    { path: '/ui-drawer', component: UiDrawer },
    { path: '/ui-breadcrumb', component: UiBreadcrumb },

    //Utility
    { path: '/pages-starter', component: PagesStarter },
    { path: '/pages-timeline', component: PagesTimeline },
    { path: '/pages-faqs', component: PagesFaqs },
    { path: '/pages-pricing', component: PagesPricing },

    // this route should be at the end of all other routes
    { path: '/', exact: true, component: () => <Redirect to="/login" /> },
];

const publicRoutes = [
    { path: '/logout', component: Logout },
    { path: '/login', component: Login },
    { path: '/verify-login', component: VerifyLogin },

    { path: '/pages-maintenance', component: PagesMaintenance },
    { path: '/pages-comingsoon', component: PagesComingsoon },
    { path: '/pages-404', component: Pages404 },
    { path: '/pages-500', component: Pages500 },
    { path: '/crypto-ico-landing', component: CryptoIcoLanding },
];

export { authProtectedRoutes, publicRoutes };
