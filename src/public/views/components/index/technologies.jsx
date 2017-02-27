'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div>
                <div>{ strings().index.technologies.title }</div>
                <div>{ strings().index.technologies.description }</div>

                <div>
                    <div>
                        <Link to="/technologies/emergent-consensus">{ strings().index.technologies.consensus.title }</Link>:
                        <div>{ strings().index.technologies.consensus.text }</div>
                    </div>
                    <div>
                        <Link to="/technologies/xthin">{ strings().index.technologies.xthin.title }</Link>:
                        <div>{ strings().index.technologies.xthin.text }</div>
                    </div>
                    <div>
                        <Link to="/technologies/bandwidth-shaping">{ strings().index.technologies.shaping.title }</Link>:
                        <div>{ strings().index.technologies.shaping.text }</div>
                    </div>
                    <div>
                        <Link to="/technologies/parallel-validation">{ strings().index.technologies.validation.title }</Link>:
                        <div>{ strings().index.technologies.validation.text }</div>
                    </div>
                    <div>
                        <Link to="/technologies/research">{ strings().index.technologies.research.title }</Link>:
                        <div>{ strings().index.technologies.research.text }</div>
                    </div>
                </div>
            </div>
        );
    }

});
