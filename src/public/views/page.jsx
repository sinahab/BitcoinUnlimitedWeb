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
                <div>
                    <div>{ this.props.title }</div>
                    <div>{ this.props.subtitle }</div>

                    <div>
                        { this.props.sections.map((section) => {
                            return <Section key={section.key} expanded={section.expanded} title={section.title} body={section.body} />
                        }) }
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default Page
