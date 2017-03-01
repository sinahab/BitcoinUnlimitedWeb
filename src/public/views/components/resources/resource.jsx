'use strict';

import React from 'react';

import {Link} from 'react-router';

export default React.createClass({

    render: function () {
        let html = typeof this.props.html === 'undefined' ? false : (<Link className='link--underline dim black' to={this.props.html}>[HTML]</Link>);
        let pdf = typeof this.props.pdf === 'undefined' ? false : (<a className='link--underline dim black' href={this.props.pdf}>[PDF]</a>);
        return (
            <li>
                {this.props.title} {html} {pdf}
            </li>
        );
    }

});
