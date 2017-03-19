'use strict';

import React from 'react';
import {Link} from 'react-router';
import { strings } from '../../../lib/i18n';

const Menu = require('react-burger-menu').slide;

class MobileHeader extends React.Component {

    render() {
        return (
            <div className='header--mobile header__container clearfix'>
                <div className="left">
                    <Link to='/'><img src='/img/bitcoin-unlimited.png' className='header__logo--mobile'/></Link>
                </div>
                <div className="right">
                    <Menu className='center' isOpen={false} right>
                        <Link className='block my3 dim btn--primary' to='/download'>{strings().header.download.title}</Link>
                        <Link className='block my3 dim btn--secondary' to='/donate'>{strings().header.donate}</Link>
                        <div className='my3'>
                            <Link className='white header__link' to='/solutions'>{strings().header.solutions.title}</Link>
                        </div>
                        <div className='my3'>
                            <Link className='white header__link' to='/technologies'>{strings().header.technologies.title}</Link>
                        </div>
                        <div className='my3'>
                            <Link className='white header__link' to='/resources'>{strings().header.resources.title}</Link>
                        </div>
                        <div className='my3'>
                            <Link className='white header__link' to='/faq'>{strings().header.faq.title}</Link>
                        </div>
                        <div className='my3'>
                            <Link className='white header__link' to='/about'>{strings().header.about.title}</Link>
                        </div>
                    </Menu>
                </div>
            </div>
        )
    }
}

export default MobileHeader
