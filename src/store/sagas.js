import { all, fork } from 'redux-saga/effects';

//public
import AuthSaga from './auth/login/saga';
import LayoutSaga from './layout/saga';
import celebritiesSaga from './celebrities/saga';
import fansSaga from './fans/saga';
import blockedusersSaga from './blocked-users/saga';
import adminsSaga from './admins/saga';
import minimumSubscriptionSaga from './settings/saga';
import storiesSaga from './stories/saga';
import contentsSaga from './content/saga';
import livestreamsSaga from './livestreams/saga';
import ReportedUsersSaga from './reported-users/saga';
import ReportedContentSaga from './report-content/saga';
import TransactionsSaga from './transactions/saga';
import SubscriptionGiftSaga from './subscription-gift/saga';
import FinancesSaga from './finances/saga';
import PushCelebNotificationsSaga from './celeb-push-notifications/saga';
import PushFanNotificationsSaga from './fan-push-notifications/saga';
import calendarSaga from './calendar/saga';
import cryptoSaga from './crypto/saga';
import projectsSaga from './projects/saga';
import tasksSaga from './tasks/saga';
import contactsSaga from './contacts/saga';
import dashboardSaga from './dashboard/saga';
import dashboardSaasSaga from './dashboard-saas/saga';

export default function* rootSaga() {
    yield all([
        //public
        fork(AuthSaga),
        fork(LayoutSaga),
        fork(celebritiesSaga),
        fork(fansSaga),
        fork(blockedusersSaga),
        fork(adminsSaga),
        fork(minimumSubscriptionSaga),
        fork(storiesSaga),
        fork(livestreamsSaga),
        fork(contentsSaga),
        fork(ReportedUsersSaga),
        fork(ReportedContentSaga),
        fork(TransactionsSaga),
        fork(SubscriptionGiftSaga),
        fork(FinancesSaga),
        fork(PushCelebNotificationsSaga),
        fork(PushFanNotificationsSaga),
        fork(calendarSaga),
        fork(cryptoSaga),
        fork(projectsSaga),
        fork(tasksSaga),
        fork(contactsSaga),
        fork(dashboardSaga),
        fork(dashboardSaasSaga),
    ]);
}
