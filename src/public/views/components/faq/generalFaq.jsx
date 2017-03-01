'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import Section from '../section.jsx'

class GeneralFaq extends React.Component {
    constructor(props) {
        super(props)

        this.sections = [
            {
                title: strings().faq.q1,
                body: this.getQ1Body(),
                expanded: false
            },
            {
                title: strings().faq.q2,
                body: this.getQ2Body(),
                expanded: false
            },
            {
                title: strings().faq.q3,
                body: this.getQ3Body(),
                expanded: false
            },
            {
                title: strings().faq.q4,
                body: this.getQ4Body(),
                expanded: false
            },
            {
                title: strings().faq.q5,
                body: this.getQ5Body(),
                expanded: false
            },
            {
                title: strings().faq.q6,
                body: this.getQ6Body(),
                expanded: false
            },
            {
                title: strings().faq.q7,
                body: this.getQ7Body(),
                expanded: false
            }
        ]
    }

    getQ1Body() {
        return (
            <div>
                <p>{strings().faq.a1a}</p>
                <p>{strings().faq.a1b}
                </p>
                <p>
                    {strings().faq.a1c}
                    {' '}
                    <a className='link--underline dim black' href='/resources/feemarket.html'>{strings().faq.a1d}</a>.
                </p>
            </div>
        )
    }

    getQ2Body() {
        return (
            <div>
                <p>{strings().faq.a2a}
                </p>
                <p>
                    {strings().faq.a2b}
                    {' '}
                    <a className='link--underline dim black' href='/resources/1txn.pdf'>{strings().faq.a2c}</a>.
                </p>
            </div>
        )
    }

    getQ3Body() {
        return (
            <div>
                <p>{strings().faq.a3a}
                </p>
                <p>{strings().faq.a3b}
                </p>
                <p>
                    <i>{strings().faq.a3c}</i>
                </p>
                <p>{strings().faq.a3d}</p>
                <p>
                    {strings().faq.a3e}
                    {' '}
                    <Link className='link--underline dim black' to='/articles'>{strings().faq.a3f}</Link></p>
            </div>
        )
    }

    getQ4Body() {
        return (
            <div>
                <p>{strings().faq.a4a}</p>
                <p>{strings().faq.a4b}</p>
            </div>
        )
    }

    getQ5Body() {
        return (
            <div>
                <p>{strings().faq.a5a}</p>
            </div>
        )
    }

    getQ6Body() {
        return (
            <div>
                <p>{strings().faq.a6a}</p>
            </div>
        )
    }

    getQ7Body() {
        return (
            <div>
                <p>{strings().faq.a7a}</p>
                <p>{strings().faq.a7b}</p>
                <p>
                    {strings().faq.a7c}
                    {' '}
                    <a className='link--underline dim black' href='https://en.wikipedia.org/wiki/Random_walk'>{strings().faq.a7d}</a>
                    {' '}
                    {strings().faq.a7e}
                </p>
                <p>{strings().faq.a7f}</p>
                <p>{strings().faq.a7g}</p>
            </div>
        )
    }

    render() {
        return (
            <div className="pt2">
                { this.sections.map((section, index) => {
                    return (
                        <Section key={index} expanded={false} title={section.title} body={section.body} />
                    )
                }) }
            </div>
        );
    }
};

export default GeneralFaq
