import {NavLink} from 'react-router-dom'
import '../App.css'
import { lazy, Suspense } from 'react'

const RenderData = lazy( ()=>import('../component/RenderData') )


function About() {

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
      <h1>About </h1>
    </div>

    <Suspense fallback = {<div>Wait Data is Loading.....</div>}>
      <RenderData/>
    </Suspense>

    </>
  )
}

export default About