import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HotelsMainPage from './containers/HotelsMainPage';
import SearchFilterPage from './containers/search/SearchFilterPage';
import CalendarPage from './containers/search/CalendarPage';
import RoomSelectionPage from './containers/search/RoomSelectionPage';
import ResultsPage from './containers/result/ResultsPage';


const AppRoutes = (
    <Switch>
        <Route exact path="/" component={HotelsMainPage} />
        <Route exact path="/search" component={SearchFilterPage} />
        <Route exact path="/calendar" component={CalendarPage} />
        <Route exact path="/roomSelection" component={RoomSelectionPage} />
        <Route path="/results/:searchId" component={ResultsPage} />
        <Route path="/details/:docid/:hotelName" component={ResultsPage} />


    </Switch>
)

export default AppRoutes;