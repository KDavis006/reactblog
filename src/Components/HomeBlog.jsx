import React from 'react'

const HomeBlog = ({data}) => {
  const clicky=()=>{
    sessionStorage.setItem("blogData",data)
    window.location.href = "/blog"
  }
  return (
    <>
    <div className='blogHome'>
      <button blogdata={data} onClick={()=>clicky()}>
      <img src={data.image} alt="" />
        <div className='imgText'>
          <h1>{data.title}</h1>
          <h3>By: {data.author}</h3>
          <h3>{data.description}</h3>
        </div>
      </button>
    </div>
    </>
  )
}

export default HomeBlog