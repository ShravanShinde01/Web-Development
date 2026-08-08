import React from 'react'
import "../components/User.css"
import { useParams } from 'react-router-dom'

const User = () => {

  const params = useParams();

  return (
      <div className="profile-container">

      <div className="profile-card">

        <div className="profile-image">
          S
        </div>

      <h1>{params.username}</h1>
        <p className="username">@{params.username}</p>

        <div className="profile-info">

          <div>
            <span>Email</span>
            <p>{params.username}@example.com</p>
          </div>

          <div>
            <span>Phone</span>
            <p>+91 9876543210</p>
          </div>

          <div>
            <span>Location</span>
            <p>Maharashtra, India</p>
          </div>

        </div>

        <button className="edit-btn">
          Edit Profile
        </button>

      </div>

    </div>
  )
}

export default User
