'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';
import Page from '../page.jsx'
import Section from '../components/section.jsx';

import BlockSize from '../components/resources/blockSize.jsx';
import Technical from '../components/resources/technical.jsx';
import NonTechnical from '../components/resources/nonTechnical.jsx';
import Buips from '../components/resources/buips.jsx';

class Resources extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedSection: this.props.params.section };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ selectedSection: nextProps.params.section })
    }

    render() {
        return (
            <Page name="resources" title={ strings().resources.title } subtitle={ strings().resources.subtitle } >
                <Section
                    key='block-size'
                    expanded={ this.state.selectedSection === 'block-size'}
                    title={ strings().resources.size.title }
                    body={ <BlockSize /> } />

                <Section
                    key='technical'
                    expanded={ this.state.selectedSection === 'technical'}
                    title={ strings().resources.technical.title }
                    body={ <Technical /> } />

                <Section
                    key='non-technical'
                    expanded={ this.state.selectedSection === 'non-technical'}
                    title={ strings().resources.nonTechnical.title }
                    body={ <NonTechnical /> } />

                <Section
                    key='buips'
                    expanded={ this.state.selectedSection === 'buips'}
                    title={ strings().resources.buips.title }
                    body={ <Buips /> } />
            </Page>
        );
    }
}

export default Resources
