'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../lib/i18n';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className='banner'></div>
                <div className='footer__container white'>
                    <div className="px2 pb1 center">
                        <div className='left-align align-top inline-block footer__section'>
                            <h4>{ strings().footer.news }</h4>
                            <a className='block py1 link dim' target='_blank' href='http://gavinandresen.ninja/time-to-roll-out-bigger-blocks'>{ strings().footer.time }</a>
                            <a className='block py1 link dim' target='_blank' href='https://medium.com/faith-and-future/why-is-bitcoin-forking-d647312d22c1'>{ strings().footer.why }</a>
                            <a className='block py1 link dim' target='_blank' href='https://medium.com/@octskyward/on-consensus-and-forks-c6a050c792e7#.s7d93q1a9'>{ strings().footer.consensus }</a>
                            <a className='block py1 link dim' target='_blank' href='http://gavinandresen.ninja/designing-for-success'>{ strings().footer.designing }</a>
                        </div>

                        <div className='left-align align-top inline-block footer__section'>
                            <h4>{ strings().footer.resources }</h4>
                            <Link className='block py1 link dim' to="/resources/technical">{ strings().footer.technical }</Link>
                            <Link className='block py1 link dim' to="/resources/non-technical">{ strings().footer.nonTechnical }</Link>
                        </div>

                        <div className='left-align align-top inline-block footer__section'>
                            <h4>{ strings().footer.join }</h4>
                            <a className='block py1 link dim' target='_blank' href='https://www.bitco.in/forum'>{ strings().footer.forum  }</a>
                            <a className='block py1 link dim' target='_blank' href='https://reddit.com/r/btc'>{ strings().footer.reddit1  }</a>
                            <a className='block py1 link dim' target='_blank' href='https://reddit.com/r/bitcoin_unlimited'>{ strings().footer.reddit2  }</a>
                            <a className='block py1 link dim' href='mailto:trevinhofmann@gmail.com?subject=Bitcoin%20Unlimited%20Slack%20Invite&body=Hi%21%0D%0A%0D%0ACould%20you%20please%20invite%20me%20to%20the%20Bitcoin%20Unlimited%20Slack%20group%3F%20My%20email%20address%20is%20%5BINSERT%20EMAIL%20ADDRESS%20HERE%5D.%0D%0A%0D%0AThank%20you%21'>{ strings().footer.slack }</a>
                            <a className='block py1 link dim' target='_blank' href='https://webchat.freenode.net/?channels=##btc'>{ strings().footer.irc }</a>
                        </div>

                        <div className='left-align align-top inline-block footer__section'>
                            <h4>{ strings().footer.about }</h4>
                            <Link className='block py1 link dim' to="/about/organization">{ strings().footer.organization }</Link>
                            <Link className='block py1 link dim' to="/about/members">{ strings().footer.members }</Link>
                        </div>
                    </div>
                    <div className="py3 center">
                        <div>&copy; {strings().footer.copy}</div>
                    </div>
                </div>
            </div>
        );
    }

};

export default Footer;
