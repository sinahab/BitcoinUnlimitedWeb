'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';

export default React.createClass({

    render: function () {
        return (
            <div>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum volutpat aliquam. Donec luctus purus vel lectus auctor, eget blandit ante lobortis. Sed non lectus faucibus, auctor augue at, feugiat odio. Ut nisl arcu, pretium faucibus massa nec, finibus lobortis neque. Aliquam vel orci a dolor efficitur placerat. Aenean luctus, ipsum eu feugiat vestibulum, enim elit auctor leo, vitae dapibus arcu tortor nec leo."</p>
                <p>Our Articles of Federation can be found <a className='link--underline dim black' href="/resources/BUarticles.pdf" target="_blank">here</a>.</p>
            </div>

        );
    }
});
