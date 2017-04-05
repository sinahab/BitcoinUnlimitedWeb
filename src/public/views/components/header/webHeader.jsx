'use strict';

import React from 'react';
import {Link} from 'react-router';
import { strings } from '../../../lib/i18n';
import Dropdown from '../dropdown.jsx'

class WebHeader extends React.Component {

    render() {
        return (
            <div className='header--web header__container--web clearfix'>
                <div className="left">
                    <Link to='/'><img src='/img/bitcoin-unlimited.png' className='header__logo'/></Link>
                </div>
                <div className="right">
                    <Dropdown title={<Link className='non-decorated black inline-block mx2 py2' to='/solutions'>{strings().header.solutions.title}</Link>}>
                        <Link className='non-decorated black block p2' to='/solutions/users'>{strings().header.solutions.users}</Link>
                        <Link className='non-decorated black block p2' to='/solutions/nodes'>{strings().header.solutions.nodes}</Link>
                        <Link className='non-decorated black block p2' to='/solutions/miners'>{strings().header.solutions.miners}</Link>
                        <Link className='non-decorated black block p2' to='/solutions/investors'>{strings().header.solutions.investors}</Link>
                    </Dropdown>

                    <Dropdown title={<Link className='non-decorated black inline-block mx2 py2' to='/technologies'>{strings().header.technologies.title}</Link>}>
                        <Link className='non-decorated black block p2' to='/technologies/adjustable-block-size-cap'>{strings().header.technologies.adjustableCap}</Link>
                        <Link className='non-decorated black block p2' to='/technologies/xthin'>{strings().header.technologies.xthin}</Link>
                        <Link className='non-decorated black block p2' to='/technologies/parallel-validation'>{strings().header.technologies.parallelValidation}</Link>
                    </Dropdown>

                    <Dropdown title={<Link className='non-decorated black inline-block mx2 py2' to='/resources'>{strings().header.resources.title}</Link>}>
                        <Link className='non-decorated black block p2' to='/resources/technical'>{strings().header.resources.technical}</Link>
                        <Link className='non-decorated black block p2' to='/resources/non-technical'>{strings().header.resources.nonTechnical}</Link>
                    </Dropdown>

                    <Dropdown title={<Link className='non-decorated black inline-block mx2 py2' to='/faq'>{strings().header.faq.title}</Link>}>
                        <Link className='non-decorated black block p2' to='/faq/users'>{strings().header.faq.users}</Link>
                        <Link className='non-decorated black block p2' to='/faq/nodes'>{strings().header.faq.nodes}</Link>
                        <Link className='non-decorated black block p2' to='/faq/miners'>{strings().header.faq.miners}</Link>
                        <Link className='non-decorated black block p2' to='/faq/investors'>{strings().header.faq.investors}</Link>
                    </Dropdown>

                    <Dropdown title={<Link className='non-decorated black inline-block mx2 py2' to='/about'>{strings().header.about.title}</Link>}>
                        <Link className='non-decorated black block p2' to='/about/organization'>{strings().header.about.organization}</Link>
                        <Link className='non-decorated black block p2' to='/about/members'>{strings().header.about.members}</Link>
                        <Link className='non-decorated black block p2' to='/about/join'>{strings().header.about.join}</Link>
                        <Link className='non-decorated black block p2' to='/about/contact'>{strings().header.about.contact}</Link>
                    </Dropdown>

                    <Link className='inline-block mx2 py2 dim btn--secondary' to='/donate'>{strings().header.donate}</Link>
                    <Link className='inline-block mx2 py2 dim btn--primary' to='/download'>{strings().header.download.title}</Link>
                </div>
            </div>
        )
    }
}

export default WebHeader
