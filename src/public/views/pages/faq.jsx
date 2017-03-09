'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'
import Section from '../components/section.jsx';

import UserFaq from '../components/faq/userFaq.jsx'
import NodeFaq from '../components/faq/nodeFaq.jsx'
import MinerFaq from '../components/faq/minerFaq.jsx'
import InvestorFaq from '../components/faq/investorFaq.jsx'

class Faq extends React.Component {
    selectedSection() { return (this.props.params.section) }

    render() {
        return (
            <Page title={ strings().faq.title } subtitle={ strings().faq.subtitle } >
                <Section
                    key='users'
                    expanded={this.selectedSection() === 'users'}
                    title={ strings().faq.users.title }
                    body={ <UserFaq /> } />

                <Section
                    key='nodes'
                    expanded={this.selectedSection() === 'nodes'}
                    title={ strings().faq.nodes.title }
                    body={ <NodeFaq /> } />

                <Section
                    key='miners'
                    expanded={this.selectedSection() === 'miners'}
                    title={ strings().faq.miners.title }
                    body={ <MinerFaq /> } />

                <Section
                    key='investors'
                    expanded={this.selectedSection() === 'investors'}
                    title={ strings().faq.investors.title }
                    body={ <InvestorFaq /> } />
            </Page>
        );
    }
};

export default Faq
