'use strict';

import React from 'react';

import Header from '../header.jsx';
import Footer from '../footer.jsx';
import Hero from '../components/index/hero.jsx';
import Solutions from '../components/index/solutions.jsx';
import Divider from '../components/index/divider.jsx';
import Technologies from '../components/index/technologies.jsx';


export default React.createClass({

    render: function() {
        return (
            <div id="index">
                <Header active='index' />
                <Hero />
                <Solutions />
                <Divider />
                <Technologies />
                <Footer />
            </div>
        );
    }

});
