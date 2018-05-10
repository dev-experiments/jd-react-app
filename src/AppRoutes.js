import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HotelsMainPage from './containers/HotelsMainPage';
import SearchFilterPage from './containers/search/SearchFilterPage';
import CalendarPage from './containers/search/CalendarPage';
import RoomSelectionPage from './containers/search/RoomSelectionPage';
//import Web from './../Web';


const AppRoutes = (
    <Switch>
        <Route exact path="/" component={HotelsMainPage} />
        <Route path="/search" component={SearchFilterPage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/roomSelection" component={RoomSelectionPage} />
        <Route path="/result" component={SearchFilterPage} />


    </Switch>
)

export default AppRoutes;