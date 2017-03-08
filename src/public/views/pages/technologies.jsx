'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';

import Xthin from '../components/technologies/xthin.jsx'
import Page from '../page.jsx';
import Section from '../components/section.jsx';

class Technologies extends React.Component {
    selectedSection() { return (this.props.params.section || 'users') }

    makeParagraph(string, index) { return <p key={index}>{string}</p> }

    stringsToParagraphs(strings) {
        return strings.map((string, i) => this.makeParagraph(string, i))
    }

    render() {
        return (
            <Page name="technologies" title={ strings().technologies.title } subtitle={ strings().technologies.subtitle }>
                <Section
                    key='emergentConsensus'
                    expanded={this.selectedSection() === 'emergent-consensus'}
                    title={ strings().technologies.emergentConsensus.title }
                    body={ this.stringsToParagraphs(strings().technologies.emergentConsensus.body) } />

                <Section
                    key='xthin'
                    expanded={this.selectedSection() === 'xthin'}
                    title={ strings().technologies.xthin.title }
                    body={ <Xthin /> } />

                <Section
                    key='bandwidthShaping'
                    expanded={this.selectedSection() === 'bandwidth-shaping'}
                    title={ strings().technologies.bandwidthShaping.title }
                    body={ this.stringsToParagraphs(strings().technologies.bandwidthShaping.body) } />

                <Section
                    key='parallelValidation'
                    expanded={this.selectedSection() === 'parallel-validation'}
                    title={ strings().technologies.parallelValidation.title }
                    body={ this.stringsToParagraphs(strings().technologies.parallelValidation.body) } />

                <Section
                    key='ourResearch'
                    expanded={this.selectedSection() === 'research'}
                    title={ strings().technologies.ourResearch.title }
                    body={ this.stringsToParagraphs(strings().technologies.ourResearch.body) } />
            </Page>

        );
    }
}

export default Technologies
