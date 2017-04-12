'use strict';

import React from 'react';
import WebHeader from './components/header/webHeader.jsx'
import MobileHeader from './components/header/mobileHeader.jsx'

class Header extends React.Component {
    render() {
        return (
            <div>
                <WebHeader />
                <MobileHeader />
                <div className='banner'></div>
            </div>
        );
    }
};

export default Header
