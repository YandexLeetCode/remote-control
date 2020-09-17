import React from 'react';
import { HashRouter , Route, Switch, Redirect, Link } from 'react-router-dom';
import RemoteControl from '../component/remote_control'
import ContactUser from '../component/contact_user'
import Login from '../component/login'

const BasicRoute = () => (
    <Switch>
        <Route path="/remoteControl" component={RemoteControl}/>
        <Route path="/contactUser" component={ContactUser} />
        <Route path="/login" component={Login} />
    </Switch>
)
export default BasicRoute