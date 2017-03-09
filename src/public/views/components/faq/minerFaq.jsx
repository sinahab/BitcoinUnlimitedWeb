'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import Section from '../section.jsx'

class MinerFaq extends React.Component {
    render() {
        return (
            <div className="pt2">
                <Section
                    title={ strings().faq.miners.questions.q1.q }
                    body={ strings().faq.miners.questions.q1.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.miners.questions.q2.q }
                    body={ strings().faq.miners.questions.q2.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.miners.questions.q3.q }
                    body={ strings().faq.miners.questions.q3.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.miners.questions.q4.q }
                    body={ strings().faq.miners.questions.q4.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.miners.questions.q5.q }
                    body={ strings().faq.miners.questions.q5.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.miners.questions.q6.q }
                    body={ strings().faq.miners.questions.q6.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.miners.questions.q7.q }
                    body={ strings().faq.miners.questions.q7.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.miners.questions.q8.q }
                    body={ strings().faq.miners.questions.q8.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.miners.questions.q9.q }
                    body={ strings().faq.miners.questions.q9.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.miners.questions.q10.q }
                    body={ strings().faq.miners.questions.q10.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.miners.questions.q11.q }
                    body={ strings().faq.miners.questions.q11.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.miners.questions.q12.q }
                    body={ strings().faq.miners.questions.q12.a }
                    expanded={ true } />

            </div>
        );
    }
};

export default MinerFaq
