'use strict';

import React from 'react';

class LinkDropdown extends React.Component {
    render() {
        return (
            <div className="dropdown__container">
                <div className="dropdown__title">
                    {this.props.title}
                </div>
                <div className="dropdown__content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default LinkDropdown
