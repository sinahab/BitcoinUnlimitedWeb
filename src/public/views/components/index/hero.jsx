'use strict';

import React from 'react';
import {Link} from 'react-router';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div>
                <div>{strings().index.hero.title}</div>
                <div>{strings().index.hero.subtitle}</div>
                <Link to='/download'>{strings().index.hero.button}</Link>
            </div>
        );
    }
});
