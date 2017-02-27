'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div className="p2 py4 center">
                <div className="py2 h1">{ strings().index.technologies.title }</div>

                <div className="inline-block left-align py3 technologies__container">
                    <div className="h3 pb3">{ strings().index.technologies.description }</div>
                    <div className='py2 lh-copy'>
                        <Link className='link--underline dim black' to="/technologies/emergent-consensus">{ strings().index.technologies.consensus.title }</Link>:
                        <div className="inline">&nbsp;{ strings().index.technologies.consensus.text }</div>
                    </div>
                    <div className='py2 lh-copy'>
                        <Link className='link--underline dim black' to="/technologies/xthin">{ strings().index.technologies.xthin.title }</Link>:
                        <div className="inline">&nbsp;{ strings().index.technologies.xthin.text }</div>
                    </div>
                    <div className='py2 lh-copy'>
                        <Link className='link--underline dim black' to="/technologies/bandwidth-shaping">{ strings().index.technologies.shaping.title }</Link>:
                        <div className="inline">&nbsp;{ strings().index.technologies.shaping.text }</div>
                    </div>
                    <div className='py2 lh-copy'>
                        <Link className='link--underline dim black' to="/technologies/parallel-validation">{ strings().index.technologies.validation.title }</Link>:
                        <div className="inline">&nbsp;{ strings().index.technologies.validation.text }</div>
                    </div>
                    <div className='py2 lh-copy'>
                        <Link className='link--underline dim black' to="/technologies/research">{ strings().index.technologies.research.title }</Link>:
                        <div className="inline">&nbsp;{ strings().index.technologies.research.text }</div>
                    </div>
                </div>
            </div>
        );
    }

});
