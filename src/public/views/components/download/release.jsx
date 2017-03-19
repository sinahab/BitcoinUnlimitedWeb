'use strict';

import React from 'react';
import { strings } from '../../../lib/i18n';

class Release extends React.Component {
    renderOsX() {
        if (this.props.osx32 || this.props.osx64 || this.props.osxDmg) {
            return (
                <div className='p1 align-top inline-block download__container'>
                    <img src="../../img/mac.png" alt="Mac OSX" />
                    <div className='pt1'>
                        <a className='pr1 dim black' href={this.props.osx64}>{strings().download.bit64}</a>
                        <a className='dim black' href={this.props.osx32}>{strings().download.bit32}</a>
                    </div>
                    <a className='block dim black' href={this.props.osxDmg}>{strings().download.dmg}</a>
                </div>
            )
        } else {
            return
        }
    }

    renderArm() {
        if (this.props.arm64 || this.props.arm32) {
            return (
                <div className='p1 align-top inline-block download__container'>
                    <img src="../../img/arm.png" alt="ARM" />
                    <div className='pt1'>
                        <a className='pr1 dim black' href={this.props.arm64}>{strings().download.bit64}</a>
                        <a className='dim black' href={this.props.arm32}>{strings().download.bit32}</a>
                    </div>
                </div>
            )
        } else {
            return
        }
    }

    render() {
        return (
            <div className='center pt3 pb2'>
                { this.renderOsX() }

                <div className='p1 align-top inline-block download__container'>
                    <img src="../../img/windows.png" alt="Windows" />
                    <div className='pt1'>
                        <a className='inline-block dim black pr1' href={this.props.windows64Exe}>{strings().download.bit64} ({strings().download.exe})</a>
                        <a className='inline-block dim black' href={this.props.windows64Zip}>{strings().download.bit64} ({strings().download.zip})</a>
                    </div>
                    <div>
                        <a className='inline-block dim black pr1' href={this.props.windows32Exe}>{strings().download.bit32} ({strings().download.exe})</a>
                        <a className='inline-block dim black' href={this.props.windows32Zip}>{strings().download.bit32} ({strings().download.zip})</a>
                    </div>
                </div>

                <div className='p1 align-top inline-block download__container'>
                    <img src="../../img/linux.png" alt="Linux" />
                    <div className='pt1'>
                        <a className='pr1 dim black' href={this.props.linux64}>{strings().download.bit64}</a>
                        <a className='dim black' href={this.props.linux32}>{strings().download.bit32}</a>
                    </div>
                </div>

                { this.renderArm() }

                <div className='pt3'>
                    <img className='icon--center pr1' src="../../img/github.png" alt="Source" /> {strings().download.view} <a className='link--underline black dim' href={this.props.source} target='_blank'>{strings().download.source}</a>.
                </div>

                <div className='left-align pt2'>
                    { this.props.children }
                </div>
            </div>
        )
    }
}


export default Release
