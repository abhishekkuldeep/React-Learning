import { useState } from "react"
import "../App.css"
import { NavLink } from "react-router-dom"

function Home() {
  const [data,setData] = useState([]);

  const renderData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then( (res) => res.json() )
        .then( (res) => setData(res) )
  }
  return (
   <>
    <div className='header'>
      <p>
        <NavLink to='/'>Home</NavLink>
      </p>
      <p>
        <NavLink to='/about'>About</NavLink>
      </p>
    </div>

    <div>
      <button onClick={renderData}>Click here..</button>
      {
        data.map( (e) =>(
          <li key={e.id}>
              <li className="innerList">{e.id}</li>
              <li className="innerList">{e.userId}</li>
              <li className="innerList">{e.title}</li>
              <li className="innerList">{e.body}</li>

          </li>
      ))
      }
    </div>

   </> 

  )
}

export default Home