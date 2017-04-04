
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

    setClickableClass() {
        if (this.props.publicKey) {
            return('inline-block px0 member--clickable')
        } else {
            return('inline-block px0')
        }
    }

    renderTooltipBody() {
        let bio, name = ''

        if (this.props.bio) {
            bio = this.stringsToParagraphs(this.props.bio)
            name = <p className='bold center'> {this.props.name} </p>
        }

        return (
            <span>
                <div className='left-align'>
                    { name }
                    { bio }
                </div>
                <div className='left-align'>
                    Bitcoin address: {this.props.publicKey}
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
            <div className='p2 inline-block align-top member__container'>
                { this.renderImage() }

                <div className='pt1'>
                    <div> {this.props.name} </div>
                    <div data-tip data-for={this.props.publicKey} className={ this.setClickableClass() }>
                        ({this.props.avatar})
                    </div>
                </div>

                <ReactTooltip className='member__tooltip' place='bottom' event='click' id={this.props.publicKey}>
                    { this.renderTooltipBody() }
                </ReactTooltip>
            </div>
        )
    }
}

export default Member
