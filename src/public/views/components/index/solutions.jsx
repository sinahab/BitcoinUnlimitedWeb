'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div>
                <div>{ strings().index.solutions.title }</div>
                <div>{ strings().index.solutions.description }</div>

                <div className="row">
                    <div className="col-md-6">
                        <div>{ strings().index.solutions.users.title }</div>
                        <div>{ strings().index.solutions.users.body }</div>
                        <Link to="/">{ strings().index.solutions.link }</Link>
                    </div>
                    <div className="col-md-6">
                        <div>{ strings().index.solutions.nodes.title }</div>
                        <div>{ strings().index.solutions.nodes.body }</div>
                        <Link to="/">{ strings().index.solutions.link }</Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div>{ strings().index.solutions.miners.title }</div>
                        <div>{ strings().index.solutions.miners.body }</div>
                        <Link to="/">{ strings().index.solutions.link }</Link>
                    </div>

                    <div className="col-md-6">
                        <div>{ strings().index.solutions.investors.title }</div>
                        <div>{ strings().index.solutions.investors.body }</div>
                        <Link to="/">{ strings().index.solutions.link }</Link>
                    </div>
                </div>

            </div>
        );
    }

});
