'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'
import GeneralFaq from '../components/faq/generalFaq.jsx'

class Faq extends React.Component {
    constructor(props) {
        super(props)

        const selectedSection = this.props.params.section

        this.sections = [
            {
                key: 'general',
                expanded: selectedSection === 'general',
                title: strings().faq.general.title,
                body: this.getGeneralFaqBody()
            },
            {
                key: 'users',
                expanded: selectedSection === 'users',
                title: strings().faq.users.title,
                body: ""
            },
            {
                key: 'nodes',
                expanded: selectedSection === 'nodes',
                title: strings().faq.nodes.title,
                body: ""
            },
            {
                key: 'miners',
                expanded: selectedSection === 'miners',
                title: strings().faq.miners.title,
                body: ""
            },
            {
                key: 'investors',
                expanded: selectedSection === 'investors',
                title: strings().faq.investors.title,
                body: ""
            }
        ]
    }

    getGeneralFaqBody() { return( <GeneralFaq /> ) }

    render() {
        return (
            <Page
                title={ strings().faq.title }
                subtitle={ strings().faq.subtitle }
                sections={this.sections} />
        );
    }
};

export default Faq
