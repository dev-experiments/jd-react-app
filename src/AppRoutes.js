import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HotelsMainPage from './containers/HotelsMainPage';
//import Web from './../Web';


const AppRoutes = (
    <Switch>
        
        {/* Web routes */}
        <Route path="/search" component={HotelsMainPage} />

        {/* other routes */}
        <Route exact path="*" component={HotelsMainPage} />
    </Switch>
)

export default AppRoutes;