'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'
import UserIcon from '../components/icons/userIcon.jsx'
import InvestorIcon from '../components/icons/investorIcon.jsx'
import MinerIcon from '../components/icons/minerIcon.jsx'
import NodeIcon from '../components/icons/nodeIcon.jsx'

class Solutions extends React.Component {
    constructor(props) {
        super(props)

        const selectedSection = this.props.params.section || 'users'

        this.sections = [
            {
                key: 'users',
                expanded: selectedSection === 'users',
                title: this.getUsersTitle(),
                body: this.stringsToParagraphs(strings().solutions.users.body)
            },
            {
                key: 'nodes',
                expanded: selectedSection === 'nodes',
                title: this.getNodesTitle(),
                body: this.stringsToParagraphs(strings().solutions.nodes.body)
            },
            {
                key: 'miners',
                expanded: selectedSection === 'miners',
                title: this.getMinersTitle(),
                body: this.stringsToParagraphs(strings().solutions.miners.body)
            },
            {
                key: 'investors',
                expanded: selectedSection === 'investors',
                title: this.getInvestorsTitle(),
                body: this.stringsToParagraphs(strings().solutions.investors.body)
            }
        ]
    }

    makeParagraph(string, index) { return <p key={index}>{string}</p> }

    stringsToParagraphs(strings) {
        return strings.map((string, i) => this.makeParagraph(string, i))
    }

    getInvestorsTitle() {
        return (
            <div className="inline-block">
                <div className='inline pr1 icon--center'>
                    <InvestorIcon width='25' height='25' />
                </div>
                { strings().solutions.investors.title }
            </div>
        )
    }

    getUsersTitle() {
        return (
            <div className="inline-block">
                <div className='inline pr1 icon--center'>
                    <UserIcon width='20' height='24' />
                </div>
                { strings().solutions.users.title }
            </div>
        )
    }

    getMinersTitle() {
        return (
            <div className="inline-block">
                <div className='inline pr1 icon--center'>
                    <MinerIcon width='24' height='20' />
                </div>
                { strings().solutions.miners.title }
            </div>
        )
    }

    getNodesTitle() {
        return (
            <div className="inline-block">
                <div className='inline pr1 icon--center'>
                    <NodeIcon width='25' height='25' />
                </div>
                { strings().solutions.nodes.title }
            </div>
        )
    }

    render() {
        return (
            <Page
                name="solutions"
                title={ strings().solutions.title }
                subtitle={ strings().solutions.subtitle }
                sections={ this.sections }
                />
        );
    }
}

export default Solutions
