'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import Index from './pages/index.jsx';
import Solutions from './pages/solutions.jsx';
import Technologies from './pages/technologies.jsx';
import About from './pages/about.jsx';

import Download from './pages/download.jsx';
import Faq from './pages/faq.jsx';
import Buip from './pages/buip.jsx';
import Members from './pages/members.jsx';
import Resources from './pages/resources.jsx';
import Articles from './pages/articles.jsx';
import NotFound from './pages/not-found.jsx';
import Conferences from './pages/conferences.jsx';
import Donate from './pages/donate.jsx';

ReactDOM.render((
    <Router history={createHistory()}>
        <Route path='/'>
            <IndexRoute component={Index} />
            <Route path='index' component={Index} />
            <Route path="solutions(/:section)" component={Solutions} />
            <Route path='technologies(/:section)' component={Technologies} />
            <Route path='about(/:section)' component={About} />

            <Route path='download' component={Download} />
            <Route path='faq' component={Faq} />
            <Route path='buip' component={Buip} />
            <Route path='members' component={Members} />
            <Route path='resources' component={Resources} />
            <Route path='articles' component={Articles} />
            <Route path='conferences' component={Conferences} />
            <Route path='donate' component={Donate} />
            <Route path='*' component={NotFound} />
        </Route>
    </Router>
), document.getElementById('react-app'));
