'use strict';

import React from 'react';
import { strings } from '../../lib/i18n';

import OfficialRelease from '../components/download/official-release.jsx';
import InstallInstructions from '../components/download/install-instructions.jsx';
import Signatures from '../components/download/signatures.jsx';

import Page from '../page.jsx';

class Download extends React.Component {
    constructor(props) {
        super(props)

        const selectedSection = this.props.params.section || 'latest'

        this.sections = [
            {
                key: 'latest',
                expanded: selectedSection === 'latest',
                title: strings().download.latest.title,
                body: this.getLatestBody()
            },
            {
                key: 'notes',
                expanded: selectedSection === 'notes',
                title: strings().download.notes.title,
                body: this.getReleaseNodesBody()
            },
            {
                key: 'signatures',
                expanded: selectedSection === 'signatures',
                title: strings().download.signatures.title,
                body: this.getSignaturesBody()
            },
            {
                key: 'installation',
                expanded: selectedSection === 'installation',
                title: strings().download.installation.title,
                body: this.getInstallationBody()
            },
            {
                key: 'older',
                expanded: selectedSection === 'older',
                title: strings().download.older.title,
                body: ''
            },
        ]
    }

    getLatestBody() { return (<OfficialRelease />) }

    getReleaseNodesBody() {
        return (
            <p>
                {strings().download.notes.releasenotes_1_0_0_1} <a className='link--underlined dim black' href='https://bitco.in/forum/threads/buir-2017-01-29-statement-regarding-excessive-block-by-bitcoin-unlimited-software-29-jan-2017.1790/'>{strings().download.notes.here}</a>
                <br/>
                {strings().download.notes.releasenotes_1_0_0_0} <a className='link--underlined dim black' href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/release/doc/release-notes/release-notes-1.0.0.md'>{strings().download.notes.here}</a>
            </p>
        )
    }

    getInstallationBody() { return ( <InstallInstructions /> ) }

    getSignaturesBody() { return ( <Signatures /> ) }

    render() {
        return (
            <Page
                name="download"
                title={ strings().download.title }
                subtitle={ strings().download.subtitle }
                sections={ this.sections }
                />
        );
    }
}

export default Download
