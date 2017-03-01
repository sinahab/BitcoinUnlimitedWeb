'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Resource from '../components/resources/resource.jsx';
import Page from '../page.jsx'

const RESOURCES = [
    {
        title: 'Articles of Federation',
        // html: '/articles',
        pdf: '/resources/BUarticles.pdf'
    },
    {
        title: 'A Transaction Fee Market Exists Without a Block Size Limit',
        pdf: '/resources/feemarket.pdf'
    },
    {
        title: 'Reduce Orphaning Risk and Improve Zero-Confirmation Security With Subchains',
        pdf: '/resources/subchains.pdf'
    },
    {
        title: 'An Examination of Single Transaction Blocks and Their Effect on Network Throughput and Block Size',
        pdf: '/resources/1txn.pdf'
    },
    {
        title: 'Bitcoin: A Peer-to-Peer Electronic Cash System',
        pdf: '/resources/bitcoin.pdf'
    }
];


class Resources extends React.Component {
    constructor(props) {
        super(props)

        const selectedSection = this.props.params.section || 'articles'

        this.sections = [
            {
                key: 'block-size',
                expanded: selectedSection === 'block-size',
                title: strings().resources.size.title,
                body: this.getBlockSizeBody()
            },
            {
                key: 'articles',
                expanded: selectedSection === 'articles',
                title: strings().resources.articles.title,
                body: this.getArticlesBody()
            },
            {
                key: 'buips',
                expanded: selectedSection === 'buips',
                title: strings().resources.buips.title,
                body: this.getBuipsBody()
            }
        ]
    }

    getBuipsBody() {
        return(
            <div className='py1'>
                <a className='link--underline dim black' href='https://bitco.in/forum/threads/buip001-unlimited-inspired-extensions-to-the-bitcoin-client.222' target='_blank'>BUIP-001</a>
                &nbsp;"Unlimited" inspired extensions to the Bitcoin Client&nbsp;
                <div className='inline green'>(PASSED on &nbsp;2/13/2016)</div>

            </div>
        )
    }

    getBlockSizeBody() {
        return (
            <div>
                <p>This chart shows the percentage of the network that will reject a block of a given size. The <a className="link--underline black dim" href="#">emergent block size</a> limit is defined as the greatest block size that no less than half of the hash power will accept.</p>
                <div className='center p1'>
                    <img className='section__image' src="../img/block-size.png" alt="Emergent Block Size Limit" />
                </div>
            </div>
        )
    }

    getArticlesBody() {
        let resources = RESOURCES.map(function(resource, i) {
            return (
                <Resource title={resource.title} html={resource.html} pdf={resource.pdf} key={i} />
            );
        });

        return (
            <ul>
                {resources}
            </ul>
        )
    }

    render() {
        return (
            <Page
                name="resources"
                title={ strings().resources.title }
                subtitle={ strings().resources.subtitle }
                sections={ this.sections }
                />
        );
    }
}

export default Resources
