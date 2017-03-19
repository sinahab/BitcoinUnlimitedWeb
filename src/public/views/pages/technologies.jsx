'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';

import Xthin from '../components/technologies/xthin.jsx'
import Page from '../page.jsx';
import Section from '../components/section.jsx';

class Technologies extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedSection: this.props.params.section };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ selectedSection: nextProps.params.section })
    }

    makeParagraph(string, index) { return <p key={index}>{string}</p> }

    stringsToParagraphs(strings) {
        return strings.map((string, i) => this.makeParagraph(string, i))
    }

    render() {
        return (
            <Page name="technologies" title={ strings().technologies.title } subtitle={ strings().technologies.subtitle }>
                <Section
                    key='emergentConsensus'
                    expanded={ this.state.selectedSection === 'emergent-consensus'}
                    title={ strings().technologies.emergentConsensus.title }
                    body={ this.stringsToParagraphs(strings().technologies.emergentConsensus.body) } />

                <Section
                    key='xthin'
                    expanded={ this.state.selectedSection === 'xthin'}
                    title={ strings().technologies.xthin.title }
                    body={ <Xthin /> } />

                <Section
                    key='bandwidthShaping'
                    expanded={ this.state.selectedSection === 'bandwidth-shaping'}
                    title={ strings().technologies.bandwidthShaping.title }
                    body={ this.stringsToParagraphs(strings().technologies.bandwidthShaping.body) } />

                <Section
                    key='parallelValidation'
                    expanded={ this.state.selectedSection === 'parallel-validation'}
                    title={ strings().technologies.parallelValidation.title }
                    body={ this.stringsToParagraphs(strings().technologies.parallelValidation.body) } />

                <Section
                    key='ourResearch'
                    expanded={ this.state.selectedSection === 'research'}
                    title={ strings().technologies.ourResearch.title }
                    body={ this.stringsToParagraphs(strings().technologies.ourResearch.body) } />
            </Page>

        );
    }
}

export default Technologies
