import {useEffect} from 'react'

const Home = () => {
    useEffect(async()=>{
        let result = await fetch("http://localhost:3000/blogs",{
            method:"Get",
            // body: JSON.stringify({name,email}),
            // headers:{"Content-Type":"application/json"}
        })
        result = await result.json()
        console.log(result)
    },[])
  return (
    <div>Home</div>
  )
}

export default Home