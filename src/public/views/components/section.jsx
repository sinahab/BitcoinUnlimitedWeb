'use strict';

import React from 'react';
import ArrowIcon from './icons/arrowIcon.jsx'

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

    render() {
        return (
            <div className='pt1 pb2'>
                <div onClick={this.toggleExpanded}>
                    <div className='inline pr1'> <ArrowIcon expanded={this.state.expanded} /> </div>
                    <div className='inline bold'> { this.props.title } </div>
                </div>
                <div className={'lh-copy pl2 ' + this.getExpandedClass()}>{ this.props.body }</div>
            </div>
        );
    }
}

export default Section
