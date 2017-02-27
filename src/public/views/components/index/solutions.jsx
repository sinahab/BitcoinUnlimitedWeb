'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div className="p2 py4 center">
                <div className="py2 h1">{ strings().index.solutions.title }</div>
                <div className="py3 h3 pb4">{ strings().index.solutions.description }</div>

                <div>
                    <div className="align-top left-align px4 py3 inline-block info__container">
                        <div className='bold'>{ strings().index.solutions.users.title }</div>
                        <div className='lh-copy py1'>{ strings().index.solutions.users.body }</div>
                        <Link className='link--underline dim gray pt1' to="/solutions/users">{ strings().index.solutions.link }</Link>
                    </div>
                    <div className="align-top left-align px4 py3 inline-block info__container">
                        <div className='bold'>{ strings().index.solutions.nodes.title }</div>
                        <div className='lh-copy py1'>{ strings().index.solutions.nodes.body }</div>
                        <Link className='link--underline dim gray pt1' to="/solutions/nodes">{ strings().index.solutions.link }</Link>
                    </div>
                </div>
                <div>
                    <div className="align-top left-align px4 py3 inline-block info__container">
                        <div className='bold'>{ strings().index.solutions.miners.title }</div>
                        <div className='lh-copy py1'>{ strings().index.solutions.miners.body }</div>
                        <Link className='link--underline dim gray pt1' to="/solutions/miners">{ strings().index.solutions.link }</Link>
                    </div>

                    <div className="align-top left-align px4 py3 inline-block info__container">
                        <div className='bold'>{ strings().index.solutions.investors.title }</div>
                        <div className='lh-copy py1'>{ strings().index.solutions.investors.body }</div>
                        <Link className='link--underline dim gray pt1' to="/solutions/investors">{ strings().index.solutions.link }</Link>
                    </div>
                </div>

            </div>
        );
    }

});
