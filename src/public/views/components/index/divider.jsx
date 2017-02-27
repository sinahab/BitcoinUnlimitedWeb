'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div className="h3 center white divider__container">
                <p className="inline-block left-align lh-copy divider__text">{ strings().index.divider }</p>
            </div>
        );
    }

});
