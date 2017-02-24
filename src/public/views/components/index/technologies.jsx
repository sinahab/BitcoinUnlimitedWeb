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
                        <div>{ strings().index.technologies.consensus.title }:</div>
                        <div>{ strings().index.technologies.consensus.text }</div>
                    </div>
                    <div>
                        <div>{ strings().index.technologies.xthin.title }:</div>
                        <div>{ strings().index.technologies.xthin.text }</div>
                    </div>
                    <div>
                        <div>{ strings().index.technologies.shaping.title }:</div>
                        <div>{ strings().index.technologies.shaping.text }</div>
                    </div>
                    <div>
                        <div>{ strings().index.technologies.validation.title }:</div>
                        <div>{ strings().index.technologies.validation.text }</div>
                    </div>
                    <div>
                        <div>{ strings().index.technologies.research.title }:</div>
                        <div>{ strings().index.technologies.research.text }</div>
                    </div>
                </div>
            </div>
        );
    }

});
