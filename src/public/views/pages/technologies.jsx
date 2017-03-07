'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';

import Page from '../page.jsx';

class Technologies extends React.Component {
    constructor(props) {
        super(props)

        const selectedSection = this.props.params.section || 'xthin'

        this.sections = [
            {
                key: 'emergentConsensus',
                title: strings().technologies.emergentConsensus.title,
                expanded: selectedSection === 'emergent-consensus',
                body: this.stringsToParagraphs(strings().technologies.emergentConsensus.body)
            },
            {
                key: 'xthin',
                title: strings().technologies.xthin.title,
                expanded: selectedSection === 'xthin',
                body: this.getXthinBody()
            },
            {
                key: 'bandwidthShaping',
                title: strings().technologies.bandwidthShaping.title,
                expanded: selectedSection === 'bandwidth-shaping',
                body: this.stringsToParagraphs(strings().technologies.bandwidthShaping.body)
            },
            {
                key: 'parallelValidation',
                title: strings().technologies.parallelValidation.title,
                expanded: selectedSection === 'parallel-validation',
                body: this.stringsToParagraphs(strings().technologies.parallelValidation.body)
            },
            {
                key: 'ourResearch',
                title: strings().technologies.ourResearch.title,
                expanded: selectedSection === 'research',
                body: this.stringsToParagraphs(strings().technologies.ourResearch.body)
            }
        ]
    }

    makeParagraph(string, index) { return <p key={index}>{string}</p> }

    stringsToParagraphs(strings) {
        return strings.map((string, i) => this.makeParagraph(string, i))
    }

    getXthinBody() {
        return (
            <div>
                { this.makeParagraph(strings().technologies.xthin.body[0]) }
                { this.makeParagraph(strings().technologies.xthin.body[1]) }
                <div className='center'>
                    <img className="section__image" src="img/xthin.png" alt="Xthin" />
                </div>
                <p>
                    Test results validated that Xthin improved block propagation times by a factor of 5.6x across the normal P2P network, by a factor of 8.7x across the Great Firewall of China, while reducing the number of bytes required by a factor of 24x. For further information, please refer to our <a className='black dim link--underline' href="#">five-part Xthin article series</a>.
                </p>
            </div>

        )
    }

    render() {
        return (
            <Page
                name="technologies"
                title={ strings().technologies.title }
                subtitle={ strings().technologies.subtitle }
                sections={ this.sections }
                />
        );
    }
}

export default Technologies
