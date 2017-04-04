
'use strict';

import React from 'react';
import Member from './member.jsx'

import MEMBERS from '../../../../data/members.json';

class Members extends React.Component {
    render() {
        return (
            <div className='center pt3'>
                {
                    MEMBERS.withHeadshots.map((member) => {
                        return(
                            <Member
                                image={ '../' + member.photoUrl }
                                avatar={member.avatar}
                                publicKey={member.publicKey}
                                name={member.name}
                                application={member.link} />
                        )
                    })
                }
                {
                    MEMBERS.withoutHeadshots.map((member) => {
                        return(
                            <Member
                                name={member.name}
                                avatar={member.avatar}
                                publicKey={member.publicKey}
                                application={member.link} />
                        )
                    })
                }
            </div>
        );
    }
};

export default Members