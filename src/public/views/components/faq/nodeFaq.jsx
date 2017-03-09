'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import Section from '../section.jsx'

class NodeFaq extends React.Component {
    render() {
        return (
            <div className="pt2">
                <Section
                    title={ strings().faq.nodes.questions.q1.q }
                    body={ strings().faq.nodes.questions.q1.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.nodes.questions.q2.q }
                    body={ strings().faq.nodes.questions.q2.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.nodes.questions.q3.q }
                    body={ strings().faq.nodes.questions.q3.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.nodes.questions.q4.q }
                    body={ strings().faq.nodes.questions.q4.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.nodes.questions.q5.q }
                    body={ strings().faq.nodes.questions.q5.a }
                    expanded={ true } />

                <Section
                    title={ strings().faq.nodes.questions.q6.q }
                    body={ strings().faq.nodes.questions.q6.a }
                    expanded={ true } />
            </div>
        );
    }
};

export default NodeFaq
