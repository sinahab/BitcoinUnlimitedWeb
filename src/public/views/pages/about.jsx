'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'
import Section from '../components/section.jsx';

import Contact from '../components/about/contact.jsx'
import Organization from '../components/about/organization.jsx'
import Members from '../components/about/members.jsx'

class About extends React.Component {
    selectedSection() { return (this.props.params.section || 'organization') }

    makeParagraph(string, index) { return <p key={index}>{string}</p> }

    stringsToParagraphs(strings) {
        return strings.map((string, i) => this.makeParagraph(string, i))
    }

    render() {
        return (
            <Page name="about" title={ strings().about.title } subtitle={ strings().about.subtitle } >
                <Section
                    key='organization'
                    expanded={this.selectedSection() === 'organization'}
                    title={ strings().about.organization.title }
                    body={ <Organization /> } />

                <Section
                    key='members'
                    expanded={this.selectedSection() === 'members'}
                    title={ strings().about.members.title }
                    body={ <Members /> } />

                <Section
                    key='join'
                    expanded={this.selectedSection() === 'join'}
                    title={ strings().about.join.title }
                    body={ this.stringsToParagraphs(strings().about.join.body) } />

                <Section
                    key='contact'
                    expanded={this.selectedSection() === 'contact'}
                    title={ strings().about.contact.title }
                    body={ <Contact /> } />
            </Page>
        );
    }
}

export default About
