'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';

import Header from '../header.jsx';
import Footer from '../footer.jsx';
import Section from '../components/section.jsx'

class Technologies extends React.Component {
    constructor(props) {
        super(props)

        this.sections = [
            {
                key: 'emergentConsensus',
                title: strings().technologies.emergentConsensus.title,
                expanded: this.props.params.section === 'emergent-consensus',
                body: this.stringsToParagraphs(strings().technologies.emergentConsensus.body)
            },
            {
                key: 'xthin',
                title: strings().technologies.xthin.title,
                expanded: this.props.params.section === 'xthin',
                body: this.getXthinBody()
            },
            {
                key: 'bandwidthShaping',
                title: strings().technologies.bandwidthShaping.title,
                expanded: this.props.params.section === 'bandwidth-shaping',
                body: this.stringsToParagraphs(strings().technologies.bandwidthShaping.body)
            },
            {
                key: 'parallelValidation',
                title: strings().technologies.parallelValidation.title,
                expanded: this.props.params.section === 'parallel-validation',
                body: this.stringsToParagraphs(strings().technologies.parallelValidation.body)
            },
            {
                key: 'ourResearch',
                title: strings().technologies.ourResearch.title,
                expanded: this.props.params.section === 'research',
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
                <img src="img/xthin.png" alt="Xthin" />
                <p>
                    Test results validated that Xthin improved block propagation times by a factor of 5.6x across the normal P2P network, by a factor of 8.7x across the Great Firewall of China, while reducing the number of bytes required by a factor of 24x. For further information, please refer to our <a href="#">five-part Xthin article series</a>.
                </p>
            </div>

        )
    }

    render() {
        return (
            <div id='technologies'>
                <Header active='technologies' />
                <div>
                    <div>{ strings().technologies.title }</div>
                    <div>{ strings().technologies.subtitle }</div>

                    <div>
                        { this.sections.map((section) => {
                            return <Section key={section.key} expanded={section.expanded} title={section.title} body={section.body} />
                        }) }
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default Technologies
