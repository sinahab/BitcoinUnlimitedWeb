'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import Section from '../section.jsx'

class UserFaq extends React.Component {
    renderQ4Body() {
        return (
            <div className='inline'>
                { strings().faq.investors.questions.q4.a1}&nbsp;
                <a className='link--underline dim black' href='https://bitco.in/forum/threads/bitcoin-unlimited-financial-report-1-june-2016-31-december-2016.1818/' target='_blank'>{ strings().faq.investors.questions.q4.a2 }</a>
            </div>
        )
    }

    render() {
        return (
            <div className="pt2">
                <Section
                    title={ strings().faq.investors.questions.q1.q }
                    body={ strings().faq.investors.questions.q1.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.investors.questions.q2.q }
                    body={ strings().faq.investors.questions.q2.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.investors.questions.q3.q }
                    body={ strings().faq.investors.questions.q3.a }
                    expanded={ true } />


                <Section
                    title={ strings().faq.investors.questions.q4.q }
                    body={ this.renderQ4Body() }
                    expanded={ true } />
            </div>
        );
    }
};

export default UserFaq
