
'use strict';

import React from 'react';
import Member from './member.jsx'

import MEMBERS from '../../../../data/members.json';

class Members extends React.Component {
    render() {
        return (
            <div className='pt3'>
                <div>
                    {
                        MEMBERS.withHeadshots.map((member) => {
                            return(
                                <Member
                                    key={member.avatar}
                                    image={ '../' + member.photoUrl }
                                    bio={member.bio}
                                    avatar={member.avatar}
                                    publicKey={member.publicKey}
                                    name={member.name}
                                    title={member.title}
                                    application={member.link} />
                            )
                        })
                    }
                </div>
                <div>
                    {
                        MEMBERS.withoutHeadshots.map((member) => {
                            return(
                                <Member
                                    key={member.avatar}
                                    name={member.name}
                                    avatar={member.avatar}
                                    publicKey={member.publicKey}
                                    application={member.link} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
};

export default Members
