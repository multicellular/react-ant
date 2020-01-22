import React from 'react'
import {
    Route, Redirect, BrowserRouter,
    Switch
} from 'react-router-dom'
import { isLogin } from './common'

import * as Layout from '@pages/layouts' // 导航
import Home from '@pages/home' // 首页
import User, { UserInfo, UserAssets } from '@pages/user' // 首页
import Login, { Forgot, Register } from '@pages/login' // 登录相关

// const PrivateRoute = ({
//     children,
//     ...rest
// }) => {
//     return (<Route {...rest} render={() => children} />);
// }

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Redirect exact from='/' to="/home" />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgot" component={Forgot} />
            <Route exact path="/register" component={Register} />
            {/* <Route path="/user" component={User} onEnter={isLogin}>
                <Redirect exact from='/user' to='/user/info' />
                <Route exact path="/user/info" component={UserInfo} />
                <Route exact path="/user/info" component={UserInfo} />
            </Route> */}
            <Route
                path="/user"
                onEnter={isLogin}
                render={() => <User>
                    <Switch>
                        <Redirect exact from="/user" to='/user/info' />
                        <Route exact path="/user/info" component={UserInfo} />
                        <Route exact path="/user/assets" component={UserAssets} />
                    </Switch>
                </User>} >
            </Route>
            {/* <PrivateRoute path="/protected">
                <Route exact path="/nav" component={Layout.Nav} />
            </PrivateRoute> */}
            <Route component={Layout.Notfound} />
        </Switch>
    </BrowserRouter>
)

export default Routes;