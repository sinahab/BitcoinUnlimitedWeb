'use strict';

import React from 'react';
import {Link} from 'react-router';
import { strings } from '../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div>
                <div className='header--web header__container clearfix'>
                    <div className="left">
                        <Link to='/'><img src='/img/bitcoin-unlimited.png' className='header__logo'/></Link>
                    </div>
                    <div className="right">
                        <Link className='header__link inline-block mx2 py2' to='/solutions'>{strings().header.solutions}</Link>
                        <Link className='header__link inline-block mx2 py2' to='/technologies'>{strings().header.technologies}</Link>
                        <Link className='header__link inline-block mx2 py2' to='/resources'>{strings().header.resources}</Link>
                        <Link className='header__link inline-block mx2 py2' to='/faq'>{strings().header.faq}</Link>
                        <Link className='header__link inline-block mx2 py2' to='/about'>{strings().header.about}</Link>
                        <Link className='inline-block mx2 py2 dim btn--secondary' to='/donate'>{strings().header.donate}</Link>
                        <Link className='inline-block mx2 py2 dim btn--primary' to='/download'>{strings().header.download}</Link>
                    </div>
                </div>
                <div className='header--mobile header__container clearfix'>
                    <div className="left">
                        <Link to='/'><img src='/img/bitcoin-unlimited.png' className='header__logo'/></Link>
                    </div>
                    <div className="right">
                        <svg className='py1 mx2' height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 10h24c1.104 0 2-.896 2-2s-.896-2-2-2H4c-1.104 0-2 .896-2 2s.896 2 2 2zm24 4H4c-1.104 0-2 .896-2 2s.896 2 2 2h24c1.104 0 2-.896 2-2s-.896-2-2-2zm0 8H4c-1.104 0-2 .896-2 2s.896 2 2 2h24c1.104 0 2-.896 2-2s-.896-2-2-2z"/>
                        </svg>
                    </div>
                </div>
                <div className='banner'></div>
            </div>
        );
    }

});
