import React, { Component } from 'react';

import Home from './Component/home';
import Sign from './Component/signUp';
import Dashboard from './Component/dashboard';
import Message from './Component/message';
import NotFound from './Component/notFound';
import Login from './Component/login';
import { Router, Route, browserHistory} from 'react-router';
class AppRoutes extends Component {
    render() {
        return (

<Router history = {browserHistory}>
<Route exact path="/" component={Home}/>
<Route path='/home' component={Home} />
<Route path='/login' component={Login} />
<Route path='/sign' component={Sign} />
<Route path='/dashboard' component={Dashboard} />
<Route path='/message' component={Message} />
<Route path='*' component={NotFound} />



</Router>
        )
    }
}
export default AppRoutes;