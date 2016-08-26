// VENDOR LIBS
import React from 'react';
import { applyRouterMiddleware, browserHistory, Router, Route, IndexRoute } from 'react-router';
import { useScroll } from 'react-router-scroll';

// LAYOUT COMPONENTS
import App from 'components/layout/app';

// COMMON COMPONENTS
import Cards from 'components/common/cards';
import Log from 'components/common/log';
import Users from 'components/common/users';

var airBookingRoutes = (
    <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
        <Route path="/" component={App}>
            <IndexRoute component={Cards} />
            <Route path="cards" component={Cards} />
            <Route path="users" component={Users} />
            <Route path="log" component={Log} />
        </Route>
    </Router>
);

export default airBookingRoutes;
