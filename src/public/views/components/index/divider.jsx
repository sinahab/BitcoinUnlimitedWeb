'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div> { strings().index.divider } </div>
        );
    }

});
