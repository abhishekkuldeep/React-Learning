import { useState, useEffect } from "react"
import '../App.css'

function RenderData() {
    const [data, setData] = useState([]);

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( (res) => res.json() )
        .then( (res) => setData(res) )
    },[] )

  return (
    <>
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
    </>

  )
}

export default RenderData