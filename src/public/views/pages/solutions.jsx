'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'
import Section from '../components/section.jsx';

import Users from '../components/solutions/users.jsx'
import UsersTitle from '../components/solutions/usersTitle.jsx'
import Nodes from '../components/solutions/nodes.jsx'
import NodesTitle from '../components/solutions/nodesTitle.jsx'
import Miners from '../components/solutions/miners.jsx'
import MinersTitle from '../components/solutions/minersTitle.jsx'
import Investors from '../components/solutions/investors.jsx'
import InvestorsTitle from '../components/solutions/investorsTitle.jsx'

class Solutions extends React.Component {
    selectedSection() { return (this.props.params.section || 'users') }

    render() {
        return (
            <Page name="solutions" title={ strings().solutions.title } subtitle={ strings().solutions.subtitle }>
                <Section
                    key='users'
                    expanded={this.selectedSection() === 'users'}
                    title={ <UsersTitle /> }
                    body={ <Users /> } />

                <Section
                    key='nodes'
                    expanded={this.selectedSection() === 'nodes'}
                    title={ <NodesTitle /> }
                    body={ <Nodes /> } />

                <Section
                    key='miners'
                    expanded={this.selectedSection() === 'miners'}
                    title={ <MinersTitle /> }
                    body={ <Miners /> } />

                <Section
                    key='investors'
                    expanded={this.selectedSection() === 'investors'}
                    title={ <InvestorsTitle /> }
                    body={ <Investors /> } />
            </Page>
        );
    }
}

export default Solutions
