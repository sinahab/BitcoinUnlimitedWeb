'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'
import Section from '../components/section.jsx';

import GeneralFaq from '../components/faq/generalFaq.jsx'

class Faq extends React.Component {
    selectedSection() { return (this.props.params.section) }

    render() {
        return (
            <Page title={ strings().faq.title } subtitle={ strings().faq.subtitle } >
                <Section
                    key='general'
                    expanded={this.selectedSection() === 'general'}
                    title={ strings().faq.general.title }
                    body={ <GeneralFaq /> } />

                <Section
                    key='users'
                    expanded={this.selectedSection() === 'users'}
                    title={ strings().faq.users.title }
                    body='' />

                <Section
                    key='nodes'
                    expanded={this.selectedSection() === 'nodes'}
                    title={ strings().faq.nodes.title }
                    body='' />

                <Section
                    key='miners'
                    expanded={this.selectedSection() === 'miners'}
                    title={ strings().faq.miners.title }
                    body='' />

                <Section
                    key='investors'
                    expanded={this.selectedSection() === 'investors'}
                    title={ strings().faq.investors.title }
                    body='' />
            </Page>
        );
    }
};

export default Faq
