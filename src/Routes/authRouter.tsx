import Login from '~/Pages/Auth/Login/Login'
import { IRouter } from './types'
import Register from '~/Pages/Auth/Register/Register'

export const AuthRoute: IRouter[] = [
  {
    path: '/login',
    exact: true,
    element: Login,
    isAuth: false
  },
  {
    path: '/register',
    exact: true,
    element: Register,
    isAuth: false
  }
]
