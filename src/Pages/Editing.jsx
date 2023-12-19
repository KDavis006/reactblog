import {useState, useRef} from 'react'

const Editing = () => {
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
   window.location.href = '/home'
 }

  return (
    <div>
     <Nav />
     <div className="createBody">
      <article className="createSection">
        <form onSubmit={handleSubmit} className="createForm">
          <div className="createArea">
            <input type="text" maxLength='100' name='title' value={data.current.title} onChange={(e) => setTitle(e.target.value)} placeholder='title'/>
          </div>
          <div className="createArea">
            <input type="text" maxLength='250' name='description' value={data.current.description} onChange={(e) => setDescription(e.target.value)} placeholder='description'/>
          </div>
          <div className="createArea">
            <input type="text" name='content' value={data.current.content} onChange={(e) => setContent(e.target.value)} placeholder='content'/>
          </div>
          <div className="createArea">
            <input type="text" name='image' value={data.current.image} onChange={(e) => setImage(e.target.value)} placeholder='image url'/>
          </div>
          <button className="submitButton">Create Blog</button>
        </form>
      </article>
     </div>
    </div>
  )
}

export default Editing