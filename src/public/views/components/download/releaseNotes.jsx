'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

class ReleaseNotes extends React.Component {
    render() {
        return (
            <ul>
                <li className='pb1'>
                    {strings().download.notes.releasenotes_1_0_1_1}
                </li>
                <li className='pb1'>
                    {strings().download.notes.releasenotes_1_0_1_0} <a className='link--underline dim black' href='https://bitco.in/forum/threads/announcement-bitcoin-unlimited-general-release-1-0-0.1783/page-2#post-35605'>{strings().download.notes.here}</a>.
                </li>
                <li className='pb1'>
                    {strings().download.notes.releasenotes_1_0_0_1} <a className='link--underline dim black' href='https://bitco.in/forum/threads/buir-2017-01-29-statement-regarding-excessive-block-by-bitcoin-unlimited-software-29-jan-2017.1790/'>{strings().download.notes.here}</a>.
                </li>
                <li className='pb1'>
                    {strings().download.notes.releasenotes_1_0_0_0} <a className='link--underline dim black' href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/blob/release/doc/release-notes/release-notes-1.0.0.md'>{strings().download.notes.here}</a>.
                </li>
            </ul>
        )
    }
}

export default ReleaseNotes
