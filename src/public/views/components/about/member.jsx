
'use strict';

import React from 'react';
import ReactTooltip from 'react-tooltip'

class Member extends React.Component {
    renderImage() {
        if (this.props.image) {
            return (<img className='member__image' src={this.props.image} alt={this.props.name} />)
        } else {
            return
        }
    }

    renderTitle() {
        if (this.props.title) {
            return ( <div> {this.props.title} </div> )
        } else {
            return
        }
    }

    setClickableClass() {
        if (this.hasTooltip()) {
            return('inline-block px0 member--clickable')
        } else {
            return('inline-block px0')
        }
    }

    hasTooltip() {
        const value = (this.props.publicKey || this.props.bio) ? true : false
        return value
    }

    renderTooltipBody() {
        let bio, name, bitcoin_address = ''

        if (this.props.bio) {
            bio = this.stringsToParagraphs(this.props.bio)
            name = <p className='bold center'> {this.props.name} </p>
        }

        if (this.props.publicKey) {
            bitcoin_address = "Bitcoin address: " + this.props.publicKey
        }

        return (
            <span>
                <div className='left-align'>
                    { name }
                    { bio }
                </div>
                <div className='left-align'>
                    { bitcoin_address }
                </div>
            </span>
        )
    }

    makeParagraph(string, index) { return <p key={index}>{string}</p> }

    stringsToParagraphs(strings) {
        return strings.map((string, i) => this.makeParagraph(string, i))
    }

    render() {
        return (
            <div className='p2 pb3 center inline-block align-top member__container'>
                { this.renderImage() }

                <div className='pt1'>
                    <div> {this.props.name} </div>
                    <div data-tip data-for={this.hasTooltip() ? this.props.avatar : ''} className={ this.setClickableClass() }>
                        ({this.props.avatar})
                    </div>
                    { this.renderTitle() }
                </div>

                <ReactTooltip className='member__tooltip' place='bottom' globalEventOff='click' event='click' id={this.props.avatar}>
                    { this.renderTooltipBody() }
                </ReactTooltip>
            </div>
        )
    }
}

export default Member
