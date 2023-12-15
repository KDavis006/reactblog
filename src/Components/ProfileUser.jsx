import React from 'react'

const ProfileUser = ({user}) => {
 const {username, image, email, blogs} = user
  return (
    <div className="main">
     {/* header area */}
     <header>
      <img src={image} alt="Profile Image" />
      <h1>{username}</h1>
     </header>
     <hr />

     {/* secondary nav */}
     <div className="second-nav">

     </div>
     {/* if */}
     

    </div>
  )
}

export default ProfileUser