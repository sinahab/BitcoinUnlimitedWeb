'use strict';

import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Section from './components/section.jsx';

class Page extends React.Component {

    render() {
        return (
            <div id={this.props.name}>
                <Header active={this.props.name} />
                <div className="p2 py4 center">
                    <div className="py2 h1">{ this.props.title }</div>
                    <div className="py2 h3">{ this.props.subtitle }</div>

                    <div className='inline-block left-align p2 pb4 section__container'>
                        { this.props.children }
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default Page