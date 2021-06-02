// rafce

import { Typography } from '@material-ui/core'
import React from 'react'
import './Profile.css'
// '../../assets/images/profile.jpg'
import profile_pic from '../../assets/images/profile1.jpg'
import CustomTimeline from '../Timeline/Timeline'

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>Md. Imrul Hasan</Typography>
                <Typography className='title'>Data Analyst</Typography>
            </div>
            <figure className='profile_image'>
            <img src={profile_pic} alt="Not Found"/>
            </figure>
            <div className='profile_information'>
                <CustomTimeline/>
                <br />
                <button>My Button</button>
            </div>
        </div>
    )
}

export default Profile
