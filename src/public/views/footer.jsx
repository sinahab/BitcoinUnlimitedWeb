'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../lib/i18n';
import FooterSection from './components/footerSection.jsx';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.sections = [
            {
                title: strings().footer.latest,
                links: [
                    { href: '/articles', text: strings().footer.articles },
                    { href: '/resources/feemarket.pdf', text: strings().footer.fee },
                    { href: '/resources/subchains.pdf', text: strings().footer.subchains },
                    { href: '/resources/1txn.pdf', text: strings().footer.analysis }
                ]
            },
            {
                title: strings().footer.join,
                links: [
                    { href: 'https://www.bitco.in/forum', text: strings().footer.forum },
                    { href: 'https://reddit.com/r/btc', text: strings().footer.reddit1 },
                    { href: 'https://reddit.com/r/bitcoin_unlimited', text: strings().footer.reddit2 },
                    { href: 'mailto:trevinhofmann@gmail.com?subject=Bitcoin%20Unlimited%20Slack%20Invite&body=Hi%21%0D%0A%0D%0ACould%20you%20please%20invite%20me%20to%20the%20Bitcoin%20Unlimited%20Slack%20group%3F%20My%20email%20address%20is%20%5BINSERT%20EMAIL%20ADDRESS%20HERE%5D.%0D%0A%0D%0AThank%20you%21', text: strings().footer.slack },
                    { href: 'https://webchat.freenode.net/?channels=##btc', text: strings().footer.irc }
                ]
            },
            {
                title: strings().footer.news,
                links: [
                    { href: 'http://gavinandresen.ninja/time-to-roll-out-bigger-blocks', text: strings().footer.time },
                    { href: 'https://medium.com/faith-and-future/why-is-bitcoin-forking-d647312d22c1', text: strings().footer.why },
                    { href: 'https://medium.com/@octskyward/on-consensus-and-forks-c6a050c792e7#.s7d93q1a9', text: strings().footer.consensus },
                    { href: 'http://gavinandresen.ninja/designing-for-success', text: strings().footer.designing }
                ]
            }
        ]
    }

    render() {
        return (
            <div>
                <div className='banner'></div>
                <div className='footer__container center white px3'>
                    <div className="pb1">
                        { this.sections.map((section, i) => {
                            return (
                                <FooterSection key={i} title={section.title} links={section.links} />
                            )
                        }) }
                    </div>
                    <div className="py3">
                        <div>&copy; {strings().footer.copy}</div>
                    </div>
                </div>
            </div>
        );
    }

};

export default Footer;
