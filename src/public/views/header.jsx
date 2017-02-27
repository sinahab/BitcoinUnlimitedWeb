'use strict';

import React from 'react';
import {Link} from 'react-router';
import { strings } from '../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div>
                <div className='header__container clearfix'>
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
                <div className='banner'></div>
            </div>
        );
    }

});
