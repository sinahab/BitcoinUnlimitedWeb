'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'

import Contact from '../components/about/contact.jsx'
import Organization from '../components/about/organization.jsx'
import Members from '../components/about/members.jsx'

class About extends React.Component {
    constructor(props) {
        super(props)

        const selectedSection = this.props.params.section || 'organization'

        this.sections = [
            {
                key: 'organization',
                expanded: selectedSection === 'organization',
                title: strings().about.organization.title,
                body: (() => { return <Organization /> })()
            },
            {
                key: 'members',
                expanded: selectedSection === 'members',
                title: strings().about.members.title,
                body: (() => { return <Members /> })()
            },
            {
                key: 'join',
                expanded: selectedSection === 'join',
                title: strings().about.join.title,
                body: this.stringsToParagraphs(strings().about.join.body)
            },
            {
                key: 'contact',
                expanded: selectedSection === 'contact',
                title: strings().about.contact.title,
                body: (() => { return <Contact /> })()
            },
        ]
    }


    makeParagraph(string, index) { return <p key={index}>{string}</p> }

    stringsToParagraphs(strings) {
        return strings.map((string, i) => this.makeParagraph(string, i))
    }

    render() {
        return (
            <Page
                name="about"
                title={ strings().about.title }
                subtitle={ strings().about.subtitle }
                sections={ this.sections }
                />
        );
    }
}

export default About
