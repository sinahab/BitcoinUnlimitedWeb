'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div className="hero__container center py3 white">
                <div className="slideshow">
                    <section>
                        <span></span>
                        <div>
                            <p className='p2 h1'>{ strings().index.hero.v2.titleOne }</p>
                        </div>
                    </section>
                    <section>
                        <span></span>
                        <div>
                            <p className='p2 h1'>{ strings().index.hero.v2.titleTwo }</p>
                        </div>
                    </section>
                    <section>
                        <span></span>
                        <div>
                            <p className='p2 h1'>{ strings().index.hero.v2.titleThree }</p>
                        </div>
                    </section>
                    <div className='slideshow__image--start'></div>
                </div>
                <Link className="h3 btn--primary-large hero--button" to='/download'>{strings().index.hero.v1.button}</Link>
            </div>
        );
    }
});
