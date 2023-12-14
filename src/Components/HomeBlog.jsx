import React from 'react'

const HomeBlog = ({data}) => {
  return (
    <>
    <div>
        <h1>{data.image}</h1>
        <h1>{data.title}</h1>
        <h1>{data.author}</h1>
        <h1>{data.description}</h1>
    </div>
    </>
  )
}

export default HomeBlog