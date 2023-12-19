import {useState, useRef} from 'react'
import { useNavigate } from "react-router-dom";
import Nav from '../Components/Nav'

const Editing = () => {
  const navigate = useNavigate()
 const data = useRef(JSON.parse(sessionStorage.getItem("editData")))
 const [title, setTitle] = useState(data.current.title)
 const [description, setDescription] = useState(data.current.description)
 const [content, setContent] = useState(data.current.content)
 const [image, setImage] = useState(data.current.image) 
 const [good, setGood] = useState(sessionStorage.getItem('good') || false)

 const handleSubmit = (e) => {
  e.preventDefault();
  fetch(`http://localhost:5000/blogs/${data.current.id}`, {
   method: 'PUT',
   headers: {'Content-Type': 'application/json'},
   body: JSON.stringify({title, description, image, content})
  })
  setGood(true)
 }

 if(good === true){
   navigate('/home');
 }

  return (
    <div>
     <Nav />
     <div className="createBody">
      <article className="createSection">
        <form onSubmit={handleSubmit} className="createForm">
          <div className="createArea">
            <input type="text" maxLength='100' name='title' defaultValue={data.current.title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className="createArea">
            <input type="text" maxLength='250' name='description' defaultValue={data.current.description} onChange={(e) => setDescription(e.target.value)}/>
          </div>
          <div className="createArea">
            <input type="text" name='content' defaultValue={data.current.content} onChange={(e) => setContent(e.target.value)}/>
          </div>
          <div className="createArea">
            <input type="text" name='image' defaultValue={data.current.image} onChange={(e) => setImage(e.target.value)}/>
          </div>
          <button className="submitButton">Create Blog</button>
        </form>
      </article>
     </div>
    </div>
  )
}

export default Editing