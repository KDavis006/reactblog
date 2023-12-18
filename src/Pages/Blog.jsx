import React from 'react'
import Nav from '../Components/Nav'
import {useRef } from 'react'
import "../Styles/bloggy.css"
const Blog = () => {
    const doug = useRef(JSON.parse(sessionStorage.getItem("blogData")))
  return (
    <>
    <Nav></Nav>
    <div className='indBlog'>
        <img src={doug.current.image} alt="" />
        <h1>{doug.current.title} by {doug.current.author}</h1>
        <p>{doug.current.content}
        </p>
    </div>
    </>
  )
}

export default Blog