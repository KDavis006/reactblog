import React from 'react'

const ProfileUser = ({user}) => {
 const {name, image, email, blogs} = user
  return (
    <div className="main">
     {/* header area */}
     <header>
      <img src={image} alt="Profile Image" />
      <h1>{name}</h1>
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