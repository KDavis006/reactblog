import {useState, useRef, useEffect} from 'react'
import Nav from '../Components/Nav'
import { useNavigate } from 'react-router-dom'
const Edit = () => {
  const navigate = useNavigate()
  const empty = useRef(0)
 const [blogs, setBlogs] = useState([])
 const person = useRef(JSON.parse(sessionStorage.getItem('currentUser')));
 let author = person.current[1]

 useEffect(()=>{
  async function fetchData() {
   let result = await fetch("http://localhost:5000/blogs")
   result = await result.json()
   setBlogs(result)
  }
  fetchData().catch(err=>console.log(err));
 },[])

 const clicky=(x)=>{
  sessionStorage.setItem("editData", JSON.stringify(x))
  navigate('/editing');
 }
  return (
   <>
   <Nav />
    {blogs.map((x,i)=>{
     if (x.author === author) {
      empty.current=1
      return (
       <div className='blogHome' key={i}>
        <button blogdata={x} onClick={()=>{
         clicky(x)}}>
         <img src={x.image} alt="" />
         <div className='imgText'>
          <h1>{x.title}</h1>
          <h3>By: {x.author}</h3>
          <h3>{x.description}</h3>
         </div>
        </button>
       </div>
      )
     }
    return true
    })
    }
    {!empty.current&&<h1 style={{margin:"auto",textAlign:"center"}}>No Blogs To Edit</h1>}
   </>
  )
}

export default Edit