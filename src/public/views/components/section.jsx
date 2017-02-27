'use strict';

import React from 'react';

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.expanded || false
        };

        this.toggleExpanded = this.toggleExpanded.bind(this);
    }

    getExpandedClass() {
        if (this.state.expanded === false) {
            return("display-none")
        }
    }

    toggleExpanded() {
        this.setState(Object.assign(this.state, {expanded: !this.state.expanded }))
        return
    }

    renderDisclosureArrow() {
        if (this.state.expanded === true) {
            return (
                <svg onClick={this.toggleExpanded} width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 10L0 0h10" fill="#000" fill-rule="evenodd"/>
                </svg>
            )
        } else {
            return (
                <svg onClick={this.toggleExpanded} width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 5L0 10V0" fill="#000" fill-rule="evenodd"/>
                </svg>
            )
        }
    }

    render() {
        return (
            <div>
                { this.renderDisclosureArrow() }
                { this.props.title }
                <div className={this.getExpandedClass()}>{ this.props.body }</div>
            </div>
        );
    }
}

export default Section
