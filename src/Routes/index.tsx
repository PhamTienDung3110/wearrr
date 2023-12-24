import { IRouter } from './types'
import Dashboard from '~/Pages/Dashboard/Dashboard'
import Employer from '~/Pages/Employer/Employer'
import Candidate from '~/Pages/Candidate/Candidate'
import DetailEmployer from '~/Pages/Employer/DetailEmployer/DetailEmployer'
import DetailCandidate from '~/Pages/Candidate/DetailCandidate/DetailCandidate'
import SettingPassword from '~/Pages/SettingPassword/SettingPassword'
export const RouteContainer: IRouter[] = [
  {
    path: '/',
    exact: true,
    element: Dashboard,
    isAuth: false
  },
  {
    path: '/product',
    exact: true,
    element: Employer,
    isAuth: false
  },
  {
    path: '/candidate',
    exact: true,
    element: Candidate,
    isAuth: false
  },
  {
    path: '/setting-password',
    exact: true,
    element: SettingPassword,
    isAuth: false
  },
  {
    path: '/employer/detail/:id',
    exact: true,
    element: DetailEmployer,
    isAuth: false
  },
  {
    path: '/candidate/detail/:id',
    exact: true,
    element: DetailCandidate,
    isAuth: false
  }
]