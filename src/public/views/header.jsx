'use strict';

import React from 'react';
import WebHeader from './components/header/webHeader.jsx'
import MobileHeader from './components/header/mobileHeader.jsx'

export default React.createClass({
    render: function () {
        return (
            <div>
                <WebHeader />
                <MobileHeader />
                <div className='banner'></div>
            </div>
        );
    }

});
