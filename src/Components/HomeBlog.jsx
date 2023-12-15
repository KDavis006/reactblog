import React from 'react'

const HomeBlog = ({data}) => {
  return (
    <>
    <div className='blogHome'>
        <img src={data.image} alt="" />
        <div className='imgText'>
          <h1>{data.title}</h1>
          <h3>By: {data.author}</h3>
          <h3>{data.description}</h3>
        </div>
    </div>
    </>
  )
}

export default HomeBlog