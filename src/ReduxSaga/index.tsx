import { all, fork } from 'redux-saga/effects'
import { watchRootSaga } from './Root/RootSaga'
import { watchAuthSaga } from './Auth/AuthSaga'
import { watchHRSaga } from './HR/HRSaga'
import { watchCandidateSaga } from './Candidate/CandidateSaga'
import { watchDashboardSaga } from './Dashboard/DashboardSaga'

export * from './Root'

export default function* reduxSaga() {
  yield all([
    fork(watchRootSaga),
    fork(watchDashboardSaga),
    fork(watchAuthSaga),
    fork(watchHRSaga),
    fork(watchCandidateSaga)
  ])
}
