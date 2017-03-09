'use strict';

import React from 'react';
import {Link} from 'react-router';
import { strings } from '../lib/i18n';

var Menu = require('react-burger-menu').slide;


export default React.createClass({
    showSettings: function(event) {
        event.preventDefault();
    },

    render: function () {
        return (
            <div>
                <div className='header--web header__container--web clearfix'>
                    <div className="left">
                        <Link to='/'><img src='/img/bitcoin-unlimited.png' className='header__logo'/></Link>
                    </div>
                    <div className="right">
                        <Link className='header__link black inline-block mx2 py2' to='/solutions'>{strings().header.solutions}</Link>
                        <Link className='header__link black inline-block mx2 py2' to='/technologies'>{strings().header.technologies}</Link>
                        <Link className='header__link black inline-block mx2 py2' to='/resources'>{strings().header.resources}</Link>
                        <Link className='header__link black inline-block mx2 py2' to='/faq'>{strings().header.faq}</Link>
                        <Link className='header__link black inline-block mx2 py2' to='/about'>{strings().header.about}</Link>
                        <Link className='inline-block mx2 py2 dim btn--secondary' to='/donate'>{strings().header.donate}</Link>
                        <Link className='inline-block mx2 py2 dim btn--primary' to='/download'>{strings().header.download}</Link>
                    </div>
                </div>
                <div className='header--mobile header__container clearfix'>
                    <div className="left">
                        <Link to='/'><img src='/img/bitcoin-unlimited.png' className='header__logo--mobile'/></Link>
                    </div>
                    <div className="right">
                        <Menu className='center' isOpen={false} right>
                            <Link className='block my3 dim btn--primary' to='/download'>{strings().header.download}</Link>
                            <Link className='block my3 dim btn--secondary' to='/donate'>{strings().header.donate}</Link>
                            <div className='my3'>
                                <Link className='white header__link' to='/solutions'>{strings().header.solutions}</Link>
                            </div>
                            <div className='my3'>
                                <Link className='white header__link' to='/technologies'>{strings().header.technologies}</Link>
                            </div>
                            <div className='my3'>
                                <Link className='white header__link' to='/resources'>{strings().header.resources}</Link>
                            </div>
                            <div className='my3'>
                                <Link className='white header__link' to='/faq'>{strings().header.faq}</Link>
                            </div>
                            <div className='my3'>
                                <Link className='white header__link' to='/about'>{strings().header.about}</Link>
                            </div>
                        </Menu>
                    </div>
                </div>
                <div className='banner'></div>
            </div>
        );
    }

});
