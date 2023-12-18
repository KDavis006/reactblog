import {useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";

const SignUp = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [login, setLogin] = useState(sessionStorage.getItem("authenticated")|| false)
 const people = useRef([])
 const taken = useRef(false);

 useEffect(() => {
  fetch('http://localhost:5000/users')
  .then(response => {
   return response.json();
  }).then(res => {
   people.current = res
   console.log(people.current)
  })
 }, [])

 const handleSubmit = () => {
  people.current.map(person => {
   if(email === person.email || name === person.name) {
    taken.current = true;
   }
   return person;
  })

  if(taken.current === true) {
   alert('Email or Username is already taken')
  } else {
   postData()
   sessionStorage.setItem('authenticated', true);
   setLogin(true)
  }
 }

 if(login === true){
  window.location.replace('/login');
 }

 async function postData() {
  try {
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  } catch (err) {
    console.error('There was a problem with the fetch operation:', err);
  }
}


  return (
   <div className='loginBody'>
    <article className='loginSection'>
     <form className='loginForm'>
      <div className='loginArea'>
       <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} className='input' placeholder='Name'/>
      </div>
      <div className='loginArea'>
       <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='input' placeholder='Email'/>
      </div>
      <div className='loginArea'>
       <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='input' placeholder='Password'/>
      </div>
      <button className='submitButton' onClick={() => handleSubmit()}>Create Account</button>
     </form>
     <p className='gotIt'>Already have an account? <Link to={'/login'} className='account'>Sign In</Link></p>
    </article>
   </div>
  )
}

export default SignUp