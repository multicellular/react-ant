import React from 'react'
import { Route, Redirect, BrowserRouter/* , Redirect */, Switch } from 'react-router-dom'
import { isLogin } from './common'

import * as Base from '@pages/base' // 基础
import Home from '@pages/home' // 首页

const PrivateRoute = ({ children, ...rest }) => {
    return (
        <Route   {...rest} render={() => children} />
    );
}

export default () => (
    <BrowserRouter>
        <Switch>
            <Redirect to="/home" from='/' exact />
            <Route exact path="/home" component={Home} />
            {/* <Route path="/login" component={base.login} /> */}
            <Route exact path="/user" component={Base.Footer} onEnter={isLogin}>
                <Redirect exact from='/user' to='/nav' />
                <Route exact path="/nav" component={Base.Nav} />
            </Route>
            <PrivateRoute path="/protected">
                <Route exact path="/nav" component={Base.Nav} />
            </PrivateRoute>
            <Route component={Base.Notfound} />
        </Switch>
    </BrowserRouter>
)