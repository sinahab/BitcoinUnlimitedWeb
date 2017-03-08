'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div>
                <p> { strings().about.contact.body } <a className='link--underline dim black' href="mailto:info@bitcoinunlimited.info">info@bitcoinunlimited.info</a>.</p>
            </div>

        );
    }
});
