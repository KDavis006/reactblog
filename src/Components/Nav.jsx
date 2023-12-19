import React from 'react'
import { Link } from 'react-router-dom'
  
import "../Styles/nav.css"
const Nav = () => {
  const deletion = (e) => {
    e.preventDefault();
    sessionStorage.clear();
  }
  return (
    <nav>
        <Link to="/home">Home</Link>
        <Link to="/create">Create Blog</Link>
        <Link to='/edit'>Edit Blog</Link>
        <Link to='/' onClick={() => deletion()}>Sign Out</Link>
    </nav>
  )
}

export default Nav