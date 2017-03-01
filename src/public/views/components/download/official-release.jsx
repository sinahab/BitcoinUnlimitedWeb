'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

class OfficialRelease extends React.Component {
    render() {
        return (
            <div className='lh-copy py1'>
                <p>{ strings().download.latest.download } ({strings().download.latest.version}, {strings().download.latest.date}):</p>

                <div className='center py3'>
                    <div className='p1 align-top inline-block download__container'>
                        <img src="../../img/mac.png" alt="Mac OSX" />
                        <div className='pt1'>
                            <a className='pr1 link--underlined dim black' href='/downloads/bitcoinUnlimited-1.0.0.1-osx64.tar.gz'>{strings().download.latest.bit64}</a>
                            <a className='link--underlined dim black' href='/downloads/bitcoinUnlimited-1.0.0.1-osx.tar.gz'>{strings().download.latest.bit32}</a>
                        </div>
                        <a className='block link--underlined dim black' href='/downloads/bitcoinUnlimited-1.0.0.1-osx.dmg'>{strings().download.latest.dmg}</a>
                    </div>

                    <div className='p1 align-top inline-block download__container'>
                        <img src="../../img/windows.png" alt="Windows" />
                        <div className='pt1'>
                            <a className='inline-block link--underlined dim black pr1' href='/downloads/bitcoinUnlimited-1.0.0.1-win64-setup.exe'>{strings().download.latest.bit64} ({strings().download.latest.exe})</a>
                            <a className='inline-block link--underlined dim black' href='/downloads/bitcoinUnlimited-1.0.0.1-win64.zip'>{strings().download.latest.bit64} ({strings().download.latest.zip})</a>
                        </div>
                        <div>
                            <a className='inline-block link--underlined dim black pr1' href='/downloads/bitcoinUnlimited-1.0.0.1-win32-setup.exe'>{strings().download.latest.bit32} ({strings().download.latest.exe})</a>
                            <a className='inline-block link--underlined dim black' href='/downloads/bitcoinUnlimited-1.0.0.1-win32.zip'>{strings().download.latest.bit32} ({strings().download.latest.zip})</a>
                        </div>
                    </div>

                    <div className='p1 align-top inline-block download__container'>
                        <img src="../../img/linux.png" alt="Linux" />
                        <div className='pt1'>
                            <a className='pr1 link--underlined dim black' href='/downloads/bitcoinUnlimited-1.0.0.1-linux64.tar.gz'>{strings().download.latest.bit64}</a>
                            <a className='link--underlined dim black' href='/downloads/bitcoinUnlimited-1.0.0.1-linux32.tar.gz'>{strings().download.latest.bit32}</a>
                        </div>
                    </div>

                    <div className='p1 align-top inline-block download__container'>
                        <img src="../../img/arm.png" alt="ARM" />
                        <div className='pt1'>
                            <a className='pr1 link--underlined dim black' href='/downloads/bitcoinUnlimited-1.0.0.1-arm64.tar.gz'>{strings().download.latest.bit64}</a>
                            <a className='link--underlined dim black' href='/downloads/bitcoinUnlimited-1.0.0.1-arm32.tar.gz'>{strings().download.latest.bit32}</a>
                        </div>
                    </div>
                </div>

                <div className='py2'>
                    <img className='icon--center pr1' src="../../img/github.png" alt="Source" /> {strings().download.latest.view} <a className='link--underlined black dim' href='https://github.com/BitcoinUnlimited/BitcoinUnlimited/tree/release' target='_blank'>{strings().download.latest.source}</a>.
                </div>

                <p>
                    {strings().download.latest.verify} {' '} {strings().download.latest.signatures}
                </p>
            </div>
        )
    }
}


export default OfficialRelease
