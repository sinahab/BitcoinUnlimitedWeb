'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'

class About extends React.Component {
    constructor(props) {
        super(props)

        const selectedSection = this.props.params.section || 'organization'

        this.sections = [
            {
                key: 'organization',
                expanded: selectedSection === 'organization',
                title: strings().about.organization.title,
                body: this.getOrganizationBody()
            },
            {
                key: 'members',
                expanded: selectedSection === 'members',
                title: strings().about.members.title,
                body: this.stringsToParagraphs(strings().about.members.body)
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
                body: this.stringsToParagraphs(strings().about.contact.body)
            },
        ]
    }

    getOrganizationBody() {
        return (
            <div>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum volutpat aliquam. Donec luctus purus vel lectus auctor, eget blandit ante lobortis. Sed non lectus faucibus, auctor augue at, feugiat odio. Ut nisl arcu, pretium faucibus massa nec, finibus lobortis neque. Aliquam vel orci a dolor efficitur placerat. Aenean luctus, ipsum eu feugiat vestibulum, enim elit auctor leo, vitae dapibus arcu tortor nec leo."</p>
                <p>Our Articles of Federation can be found <a className='link--underline dim black' href="/resources/BUarticles.pdf" target="_blank">here</a>.</p>
            </div>
        )
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