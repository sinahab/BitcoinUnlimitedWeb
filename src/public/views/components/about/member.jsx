
'use strict';

import React from 'react';

class Member extends React.Component {
    renderImage() {
        if (this.props.image) {
            return (<img className='member__image' src={this.props.image} alt={this.props.name} />)
        } else {
            return
        }
    }

    render() {
        return (
            <div className='p2 inline-block member__container'>
                { this.renderImage() }
                <div className='pt1'>
                    <a className='black dim' href={this.props.application} target='_blank'>
                        {this.props.name}
                    </a>
                </div>
            </div>
        )
    }
}

export default Member
