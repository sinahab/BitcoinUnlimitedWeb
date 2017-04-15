'use strict';

import React from 'react';
import { Link } from 'react-router';
import { strings } from '../../../lib/i18n';
import Section from '../section.jsx'

class MythsFaq extends React.Component {
    render() {
        return (
            <div className="pt2">

                <Section
                    title={ "Is Bitcoin Unlimited an attack?" }
                    body={ <div>
                        <p>
                            Some people accuse Bitcoin Unlimited of being nothing but an attack against Bitcoin. This is not true. Bitcoin Unlimited is a grassroots project by a growing number of members of the Bitcoin community which wish ensure the growth of Bitcoin transactions. It is nothing but a manifestation of dissatisfaction with the scaling path Bitcoin took last three years, that has found a growing number of supporters although being censored from the main media channels of Bitcoin since the beginning.
                        </p>
                        <p>
                            Example of attack accusations:
                        </p>
                        <ul>
                            <li><a className='link--underline dim black' href="http://archive.is/1kfyU" target="_blank">archive.is/1kfyU</a></li>
                        </ul>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "Is Roger Ver the boss of Bitcoin Unlimited?" }
                    body={ <div>
                        <p>
                            No. Roger Ver and Bitcoin Unlimited just share both concerns and visions: Like BU, Roger is concerned about the path of Bitcoin development and the tolerance against censorship in the community. Like BU, Roger’s vision of Bitcoin is to be digital P2P cash, not an expensive and slow settlement system for banks and networks of payment channels, that might exist some day. For this reasons Roger decided to mine with Bitcoin Unlimited in the pool he created for Bitcoin.com.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "Did Bitcoin Unlimited's consensus mechanism fail when Bitcoin.com mined a block too large?" }
                    body={ <div>
                        <p>
                            Shortly after the release of Bitcoin Unlimited 1.0.0.0 Bitcoin.com’s mining pool mined a block with a size bigger than 1MB, which was immediately orphaned. There has been no other damage than Bitcoin.com losing one block reward. But it was said that this problem was caused by a failure of Bitcoin Unlimited’s consensus mechanism.
                        </p>
                        <p>
                            This is untrue. The block was created too large because of a bug in the block creation algorithm. It had nothing to do with Bitcoin Unlimited’s consensus mechanism.
                        </p>
                        <p>
                            Further information:
                        </p>
                        <ul>
                            <li><a className='link--underline dim black' href="https://forum.bitcoin.com/mining/bitcoin-com-s-excessive-block-pool-analysis-t16844.html" target="_blank">Report of Pool Operator of Bitcoin.com</a></li>
                            <li><a className='link--underline dim black' href="https://bitco.in/forum/threads/buir-2017-01-29-statement-regarding-excessive-block-by-bitcoin-unlimited-software-29-jan-2017.1790/" target="_blank">Incident Report by Bitcoin Unlimited</a></li>
                        </ul>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "Is Bitcoin Unlimited hostile to Bitcoin Core?" }
                    body={ <div>
                        <p>
                            In the heated public debate it sometimes appears that Bitcoin Unlimited and Bitcoin Core are two hostile camps fighting tooth and nail. The boring reality however is that the developers of both Bitcoin Unlimited as Bitcoin Core are Pro-Bitcoin and Pro-Open-Source. Despite having other opinions about the blocksize, everybody in both groups agrees that he likes bitcoin and good software (and pictures of cats). On most issues the individual members of both groups share an overwhelming consensus, enjoy to cooperate and aim to do so in the future.
                        </p>
                    </div> }
                    expanded={ false } />

                <Section
                    title={ "Will Bitcoin Unlimited give full control to the miner?" }
                    body={ <div>
                        <p>
                            Some people said that Bitcoin Unlimited’s settings simulate control of nodes while giving the miner full control about the properties of Bitcoin. This is not true. In fact, with EB and AD Bitcoin Unlimited gives the user MORE instead of less options to interoperate with miners, including the degree of deterrence for miners when they violate rules.
                        </p>
                        <p>
                            Bitcoin Unlimited does not eliminate Nakamoto Consensus and Bitcoin’s resilience against attacks.
                        </p>
                    </div> }
                    expanded={ false } />


                <Section
                    title={ "Is Bitcoin Unlimited a tool of the Chinese government?" }
                    body={ <div>
                        <p>
                            Bitcoin Unlimited has been accused of being a tool of the Chinese government to control Bitcoin by giving the miners the power to control Bitcoin. This is untrue. Bitcoin Unlimited enjoys cooperation with Chinese miners - as with every other actor in the ecosystem -  but is in not affiliated with or paid by them. Bitcoin Unlimited accepted the application of Bitmain’s Jihan Wu as a member and is open for other miners to apply.
                        </p>
                        <p>
                            If the Chinese government wanted to use the miners to break Bitcoin, by the way, it would not need Bitcoin Unlimited. In fact, if it wanted, Bitcoin Unlimited would be one of the worst ways to do compared to other options.
                        </p>
                    </div> }
                    expanded={ false } />

            </div>
        );
    }
};

export default MythsFaq
