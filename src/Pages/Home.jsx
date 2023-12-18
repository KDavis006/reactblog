import {useEffect,useState} from 'react'
import HomeBlog from '../Components/HomeBlog'
import "../Styles/home.css"
import Nav from '../Components/Nav'
const Home = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        async function fetchData() {
            let result = await fetch("http://localhost:5000/blogs",{
            method:"GET",
            // body: JSON.stringify({name,email}),
            headers:{"Content-Type":"application/json"}
        })
        result = await result.json()
        console.log(result)
        setBlogs(result)
        }
        fetchData().catch(err=>console.log(err));
    },[])
  return (
    <>
    <Nav></Nav>
    <div className='blogCon'>
    {blogs.map((x,i)=>{
        return <HomeBlog key={i} data={x} />
    })}
    </div>
    </>
  )
}

export default Home