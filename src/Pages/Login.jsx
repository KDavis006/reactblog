import {useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";

const Login = () => {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [login, setLogin] = useState(sessionStorage.getItem('authenticated') || false)
 const people = useRef([])

 useEffect(() => {
  fetch('http://localhost:5000/users')
  .then(response => {
   return response.json();
  }).then(res => {
   people.current = res
  })
 }, [])

 const handleSubmit = (e) => {
  e.preventDefault();
  people.current.map(person => {
   console.log(person.email, email, person.password, password)
   if(email === person.email && password === person.password){
    console.log('work')
    sessionStorage.setItem('authenticated', true);
    sessionStorage.setItem('currentUser', JSON.stringify([person.id, person.name, person.email]));
    setLogin(true);
    console.log(login)
   }
   return person
  })
 }

 if(login === true){
  console.log('e')
   window.location.href = '/home'
 }

 
  return (
   <div className='signBody'>
    <article className='signSection'>
     <form onSubmit={handleSubmit} className='signForm'>
      <div className='signArea'>
       <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='input' placeholder='Email'/>
      </div>
      <div className='signArea'>
       <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='input' placeholder='Password'/>
      </div>
      <button type='submit' className='submitButton'>Login</button>
     </form>
     <p className='gotIt'>Don't have an account? <Link to={'/'} className='account'>Sign Up</Link></p>
    </article>
   </div>
  )
}

export default Login