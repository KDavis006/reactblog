import {useState, useRef} from 'react'
import Nav from '../Components/Nav'

const Create = () => {
  const person = useRef(JSON.parse(sessionStorage.getItem('currentUser')));
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  
 const [good, setGood] = useState(sessionStorage.getItem('good') || false)
  let author = person.current[1]

  const handleSubmit = (e) => {
    e.preventDefault()

    if(title === ''){
      alert('Please enter a title')
    } else if(description === ''){
      alert('Please enter a description')
    } else if(content === ''){
      alert('Please enter a content')
    } else if(image === ''){
      alert('Please enter a image')
    } else {
      fetch('http://localhost:5000/blogs', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, description, image, content, author})
      })
      setGood(true)
    }
  }

  if(good === true){
   window.location.href = '/home'
 }


  return (
    <div><Nav />
    <div className="createBody">
      <article className="createSection">
        <form onSubmit={handleSubmit} className="createForm">
          <div className="createArea">
            <input type="text" maxLength='100' name='title' onChange={(e) => setTitle(e.target.value)} placeholder='title'/>
          </div>
          <div className="createArea">
            <input type="text" maxLength='250' name='description' onChange={(e) => setDescription(e.target.value)} placeholder='description'/>
          </div>
          <div className="createArea">
            <input type="text" name='content' onChange={(e) => setContent(e.target.value)} placeholder='content'/>
          </div>
          <div className="createArea">
            <input type="text" name='image' onChange={(e) => setImage(e.target.value)} placeholder='image url'/>
          </div>
          <button className="submitButton">Create Blog</button>
        </form>
      </article>
    </div>
    </div>
  )
}

export default Create