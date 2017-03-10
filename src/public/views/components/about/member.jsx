
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

    renderAvatar() {
        if (this.props.avatar) {
            return(<div>({this.props.avatar})</div>)
        } else {
            return('')
        }
    }

    render() {
        return (
            <div className='p2 inline-block align-top member__container'>
                { this.renderImage() }
                <div className='pt1'>
                    {this.props.name}{ this.renderAvatar() }
                </div>
            </div>
        )
    }
}

export default Member
