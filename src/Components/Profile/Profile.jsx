import React from 'react'
import './Profile.css'
import profile_icon from '../Asserts/base.png'

const Profile = () => {
  return (
    <div className='userProfile'>
      <div className='gradiant'></div>
      <div className="profile-down">
        <img src={profile_icon} alt=''></img>
        <div className="profile-title">Karthick C</div>
        <div className="profile-description">
          MERN-Stack Developer // Freelancer
        </div>
        <div className="profile-button"><a href='mailto.karthick@gmail.com'>Contact Me</a></div>
      </div>
    </div>
  )
}

export default Profile