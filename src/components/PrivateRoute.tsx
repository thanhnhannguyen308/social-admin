import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { Login } from '../pages/Account/Login'

export const PrivateRoute = ({children, ...rest} : RouteProps): JSX.Element => {
    return (
        <Route {...rest} children={() => (false ? children : <Login /> )}></Route>
    )
}
