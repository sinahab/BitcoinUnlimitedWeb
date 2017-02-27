'use strict';

import React from 'react';

class FooterSection extends React.Component {
    formatLink(link, index) {
        return (
            <div key={ index } className='py1'>
                <a className='link dim' href={ link.href }>{ link.text }</a>
            </div>
        )
    }

    render() {
        return (
            <div key={this.props.key} className='py2 left-align align-top inline-block footer__section'>
                <h4>{ this.props.title }</h4>
                { this.props.links.map((link, i) => { return(this.formatLink(link, i)) }) }
            </div>
        )
    }
}

export default FooterSection
