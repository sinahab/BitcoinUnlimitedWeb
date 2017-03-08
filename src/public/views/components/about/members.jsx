
'use strict';

import React from 'react';
import Member from './member.jsx'

import MEMBERS from '../../../../data/members.json';

class Members extends React.Component {
    render() {
        return (
            <div className='center pt3'>
                <Member image='../img/about/Andrew_Clifford.png' name='Andrew Clifford' />
                <Member image='../img/about/Andrew_Stone.png' name='Andrew Stone' />
                <Member image='../img/about/Peter_Rizun.png' name='Peter Rizun' />
                <Member image='../img/about/Andrea_Suisani.png' name='Andrea Suisani' />
                <Member image='../img/about/Peter_Tschipper.png' name='Peter Tschipper' />
                <Member image='../img/about/Roger_Ver.png' name='Roger Ver' />
                <Member image='../img/about/Christopher_Wilmer.png' name='Christopher Wilmer' />
                <Member image='../img/about/Haipo_Yang.png' name='Haipo Yang' />
                <div>
                    { MEMBERS.map((member) => {
                        return (<Member name={member.name} application={member.application}/>)
                    }) }
                </div>
            </div>
        );
    }
};

export default Members
