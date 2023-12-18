import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
import Profile from "../Pages/Profile"
import "../Styles/nav.css"
const Nav = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/">React Blog</Link>
        <Link to="/profile">Profile</Link>
    </nav>
  )
}

export default Nav