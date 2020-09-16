import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import RemoteControl from '../layout/remote_control'
import ContactUser from '../layout/contact_user'

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={RemoteControl}/>
            <Route path="/contactUser" component={ContactUser} />
        </Switch>
    </HashRouter>
)
export default BasicRoute