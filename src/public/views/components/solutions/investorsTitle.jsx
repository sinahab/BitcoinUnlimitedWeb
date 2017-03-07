'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import InvestorIcon from '../icons/investorIcon.jsx'

export default React.createClass({

    render: function () {
        return (
            <div className="inline-block">
                <div className='inline pr1 icon--center'>
                    <InvestorIcon width='25' height='25' />
                </div>
                { strings().solutions.investors.title }
            </div>
        );
    }
});
