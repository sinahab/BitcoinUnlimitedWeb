'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';

import Header from '../header.jsx';
import Footer from '../footer.jsx';

export default React.createClass({

    render: function() {
        return (
            <div id='not-found'>
                <Header active='not-found' />
                <div className="p2 py4 center not-found__container">
                    <div className="py2 h1">{strings().notfound.error}</div>
                    <div className="py3 h3">{strings().notfound.message}</div>
                </div>
                <Footer />
            </div>
        );
    }
});
