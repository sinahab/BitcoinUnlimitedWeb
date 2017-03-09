'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import Section from '../section.jsx'

class UserFaq extends React.Component {
    renderQ3Body() {
        return (
            <div className='inline'>
                { strings().faq.users.questions.q3.a1}&nbsp;
                <a className='link--underline dim black' href='https://medium.com/@peter_r/what-were-doing-with-bitcoin-unlimited-simply-6f71072f9b94#.hwib0s7qc' target='_blank'>{ strings().faq.users.questions.q3.a2 }</a>
            </div>
        )
    }

    renderQ37Body() {
        return (
            <div className='inline'>
                <p> { strings().faq.users.questions.q37.a1 } </p>
                <p> { strings().faq.users.questions.q37.a2 } </p>
            </div>
        )
    }

    renderQ38Body() {
        return (
            <div className='inline'>
                { strings().faq.users.questions.q38.a1}&nbsp;
                <a className='link--underline dim black' href='https://forum.bitcoin.com/full-clients-bitcoin-ultimate/tutorial-how-to-run-bitcoin-unlimited-node-on-a-raspberry-pi-3-t16682.html' target='_blank'>{ strings().faq.users.questions.q38.a2 }</a>
            </div>
        )
    }

    render() {
        return (
            <div className="pt2">
                <Section
                    title={ strings().faq.users.questions.q1.q }
                    body={ strings().faq.users.questions.q1.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q2.q }
                    body={ strings().faq.users.questions.q2.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q3.q }
                    body={ this.renderQ3Body() }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q4.q }
                    body={ strings().faq.users.questions.q4.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q5.q }
                    body={ strings().faq.users.questions.q5.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q6.q }
                    body={ strings().faq.users.questions.q6.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q7.q }
                    body={ strings().faq.users.questions.q7.a }
                    expanded={ true } />


                <Section
                    title={ strings().faq.users.questions.q8.q }
                    body={ strings().faq.users.questions.q8.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q9.q }
                    body={ strings().faq.users.questions.q9.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q10.q }
                    body={ strings().faq.users.questions.q10.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q11.q }
                    body={ strings().faq.users.questions.q11.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q12.q }
                    body={ strings().faq.users.questions.q12.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q13.q }
                    body={ strings().faq.users.questions.q13.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q14.q }
                    body={ strings().faq.users.questions.q14.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q15.q }
                    body={ strings().faq.users.questions.q15.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q16.q }
                    body={ strings().faq.users.questions.q16.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q17.q }
                    body={ strings().faq.users.questions.q17.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q18.q }
                    body={ strings().faq.users.questions.q18.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q19.q }
                    body={ strings().faq.users.questions.q19.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q20.q }
                    body={ strings().faq.users.questions.q20.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q21.q }
                    body={ strings().faq.users.questions.q21.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q22.q }
                    body={ strings().faq.users.questions.q22.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q23.q }
                    body={ strings().faq.users.questions.q23.a }
                    expanded={ true } />


                <Section
                    title={ strings().faq.users.questions.q24.q }
                    body={ strings().faq.users.questions.q24.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q25.q }
                    body={ strings().faq.users.questions.q25.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q26.q }
                    body={ strings().faq.users.questions.q26.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q27.q }
                    body={ strings().faq.users.questions.q27.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q28.q }
                    body={ strings().faq.users.questions.q28.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q29.q }
                    body={ strings().faq.users.questions.q29.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q30.q }
                    body={ strings().faq.users.questions.q30.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q31.q }
                    body={ strings().faq.users.questions.q31.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q32.q }
                    body={ strings().faq.users.questions.q32.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q33.q }
                    body={ strings().faq.users.questions.q33.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q34.q }
                    body={ strings().faq.users.questions.q34.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q35.q }
                    body={ strings().faq.users.questions.q35.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q36.q }
                    body={ strings().faq.users.questions.q36.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q37.q }
                    body={ this.renderQ37Body() }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q38.q }
                    body={ this.renderQ38Body() }
                    expanded={ true } />

                <Section
                    title={ strings().faq.users.questions.q39.q }
                    body={ strings().faq.users.questions.q39.a }
                    expanded={ true } />

            </div>
        );
    }
};

export default UserFaq
