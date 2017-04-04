'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <ul className='py1'>
                <li className='pb1'>
                    { strings().about.contact.general } <a className='link--underline dim black' href="mailto:info@bitcoinunlimited.info">info@bitcoinunlimited.info</a>
                </li>
                <li>
                    { strings().about.contact.security } <a className='link--underline dim black' href="mailto:security@bitcoinunlimited.info">security@bitcoinunlimited.info</a>
                </li>
            </ul>
        );
    }
});
