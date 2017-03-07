'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import Index from './pages/index.jsx';
import Solutions from './pages/solutions.jsx';
import Technologies from './pages/technologies.jsx';
import About from './pages/about.jsx';
import Donate from './pages/donate.jsx';
import Resources from './pages/resources.jsx';
import Faq from './pages/faq.jsx';
import Download from './pages/download.jsx';

import Members from './pages/members.jsx';
import NotFound from './pages/not-found.jsx';
import Conferences from './pages/conferences.jsx';

ReactDOM.render((
    <Router onUpdate={() => window.scrollTo(0, 0)} history={createHistory()}>
        <Route path='/'>
            <IndexRoute component={Index} />
            <Route path='index' component={Index} />
            <Route path="solutions(/:section)" component={Solutions} />
            <Route path='technologies(/:section)' component={Technologies} />
            <Route path='about(/:section)' component={About} />
            <Route path='donate' component={Donate} />
            <Route path='resources(/:section)' component={Resources} />
            <Route path='faq(/:section)' component={Faq} />
            <Route path='download(/:section)' component={Download} />

            <Route path='members' component={Members} />
            <Route path='conferences' component={Conferences} />
            <Route path='*' component={NotFound} />
        </Route>
    </Router>
), document.getElementById('react-app'));
