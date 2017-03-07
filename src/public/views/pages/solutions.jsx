'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'

import Users from '../components/solutions/users.jsx'
import UsersTitle from '../components/solutions/usersTitle.jsx'
import Nodes from '../components/solutions/nodes.jsx'
import NodesTitle from '../components/solutions/nodesTitle.jsx'
import Miners from '../components/solutions/miners.jsx'
import MinersTitle from '../components/solutions/minersTitle.jsx'
import Investors from '../components/solutions/investors.jsx'
import InvestorsTitle from '../components/solutions/investorsTitle.jsx'

class Solutions extends React.Component {
    constructor(props) {
        super(props)

        const selectedSection = this.props.params.section || 'users'

        this.sections = [
            {
                key: 'users',
                expanded: selectedSection === 'users',
                title: (() => { return <UsersTitle /> })(),
                body: (() => { return <Users /> })()
            },
            {
                key: 'nodes',
                expanded: selectedSection === 'nodes',
                title: (() => { return <NodesTitle /> })(),
                body: (() => { return <Nodes /> })()
            },
            {
                key: 'miners',
                expanded: selectedSection === 'miners',
                title: (() => { return <MinersTitle /> })(),
                body: (() => { return <Miners /> })()
            },
            {
                key: 'investors',
                expanded: selectedSection === 'investors',
                title: (() => { return <InvestorsTitle /> })(),
                body: (() => { return <Investors /> })()
            }
        ]
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
