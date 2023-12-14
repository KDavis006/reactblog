import React from 'react'

const Profile = () => {
  return (
    <div className="main">
     <header>
      <img src={User.image} alt="Profile Image" />
      <h1>{User.username}</h1>
     </header>
    </div>
  )
}

export default Profile