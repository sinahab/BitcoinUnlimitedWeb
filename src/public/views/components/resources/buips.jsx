'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div className='py1'>
                <ul>
                    <li>
                        <a className='link--underline dim black' href='https://bitco.in/forum/threads/buip001-unlimited-inspired-extensions-to-the-bitcoin-client.222' target='_blank'>BUIP-001</a>
                        &nbsp;"Unlimited" inspired extensions to the Bitcoin Client&nbsp;
                        <div className='inline'>(PASSED on &nbsp;2/13/2016)</div>
                    </li>
                </ul>
            </div>
        );
    }
});
