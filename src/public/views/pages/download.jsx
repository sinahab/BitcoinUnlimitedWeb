'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';

import OfficialRelease from '../components/download/official-release.jsx';
import InstallInstructions from '../components/download/install-instructions.jsx';
import Signatures from '../components/download/signatures.jsx';
import ReleaseNotes from '../components/download/releaseNotes.jsx';

import Page from '../page.jsx';
import Section from '../components/section.jsx';

class Download extends React.Component {
    selectedSection() { return (this.props.params.section || 'latest') }

    render() {
        return (
            <Page name="download" title={ strings().download.title } subtitle={ strings().download.subtitle } >
                <Section
                    key='latest'
                    expanded={this.selectedSection() === 'latest'}
                    title={ strings().download.latest.title }
                    body={ <OfficialRelease /> } />

                <Section
                    key='notes'
                    expanded={this.selectedSection() === 'notes'}
                    title={ strings().download.notes.title }
                    body={ <ReleaseNotes /> } />

                <Section
                    key='signatures'
                    expanded={this.selectedSection() === 'signatures'}
                    title={ strings().download.signatures.title }
                    body={ <Signatures /> } />

                <Section
                    key='installation'
                    expanded={this.selectedSection() === 'installation'}
                    title={ strings().download.installation.title }
                    body={ <InstallInstructions /> } />

                <Section
                    key='older'
                    expanded={this.selectedSection() === 'older'}
                    title={ strings().download.older.title }
                    body={ '' } />
            </Page>
        );
    }
}

export default Download
