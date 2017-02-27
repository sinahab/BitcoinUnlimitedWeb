'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div className="hero__container center py3 white">
                    <div className="h1 py2">{strings().index.hero.title}</div>
                    <div className="h2 py3">{strings().index.hero.subtitle}</div>
                <div className="mt3 pb3 pt4">
                    <Link className="h3 dim btn--primary-large" to='/download'>{strings().index.hero.button}</Link>
                </div>
            </div>
        );
    }
});
