'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'

import BlockSize from '../components/resources/blockSize.jsx';
import Technical from '../components/resources/technical.jsx';
import NonTechnical from '../components/resources/nonTechnical.jsx';
import Buips from '../components/resources/buips.jsx';

class Resources extends React.Component {
    constructor(props) {
        super(props)

        const selectedSection = this.props.params.section || 'technical'

        this.sections = [
            {
                key: 'block-size',
                expanded: selectedSection === 'block-size',
                title: strings().resources.size.title,
                body: (() => { return <BlockSize /> })()
            },
            {
                key: 'technical',
                expanded: selectedSection === 'technical',
                title: strings().resources.technical.title,
                body: (() => { return <Technical /> })()
            },
            {
                key: 'non-technical',
                expanded: selectedSection === 'non-technical',
                title: strings().resources.nonTechnical.title,
                body: (() => { return <NonTechnical /> })()
            },
            {
                key: 'buips',
                expanded: selectedSection === 'buips',
                title: strings().resources.buips.title,
                body: (() => { return <Buips /> })()
            }
        ]
    }

    render() {
        return (
            <Page
                name="resources"
                title={ strings().resources.title }
                subtitle={ strings().resources.subtitle }
                sections={ this.sections }
                />
        );
    }
}

export default Resources
