import './App.css'
// import About from './About'
// import Home from './Home'
import { lazy, Suspense } from 'react'

const Home = lazy( ()=>import('./Home') )
const About = lazy( ()=>import('./About') )

function App() {

  return (
    <>
      <h1>Lazy Loading</h1>
      <Suspense fallback = {<div>Wait Home is Loading.....</div>}>
        <Home/>
      </Suspense>
      <Suspense fallback = {<div>Wait About is Loading.....</div>}>
          <About/>    
      </Suspense>
    </>
  )
}

export default App
