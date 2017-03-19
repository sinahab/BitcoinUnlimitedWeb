'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

import Release from './release.jsx'

class OfficialRelease extends React.Component {
    render() {
        return (
            <div className='lh-copy py1'>
                <p>{ strings().download.latest.download } ({strings().download.latest.version}, {strings().download.latest.date}):</p>

                <Release
                    osx64='/downloads/bitcoinUnlimited-1.0.1.1-osx64.tar.gz'
                    osx32='/downloads/bitcoinUnlimited-1.0.1.1-osx.dmg'
                    osxDmg='/downloads/bitcoinUnlimited-1.0.1.1-osx.tar.gz'
                    windows64Exe='/downloads/bitcoinUnlimited-1.0.1.1-win64-setup.exe'
                    windows64Zip='/downloads/bitcoinUnlimited-1.0.1.1-win64.zip'
                    windows32Exe='/downloads/bitcoinUnlimited-1.0.1.1-win32-setup.exe'
                    windows32Zip='/downloads/bitcoinUnlimited-1.0.1.1-win32.zip'
                    linux64='/downloads/bitcoinUnlimited-1.0.1.1-linux64.tar.gz'
                    linux32='/downloads/bitcoinUnlimited-1.0.1.1-linux32.tar.gz'
                    arm64='/downloads/bitcoinUnlimited-1.0.1.1-arm64.tar.gz'
                    arm32='/downloads/bitcoinUnlimited-1.0.1.1-arm32.tar.gz'
                    source='https://github.com/BitcoinUnlimited/BitcoinUnlimited/tree/release'>

                    <p className='pt2'>
                        {strings().download.latest.verify} {' '} {strings().download.latest.signatures}
                    </p>
                </Release>
            </div>
        )
    }
}

export default OfficialRelease
