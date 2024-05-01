import React from 'react'
import "./pages/_App.scss"

function App() {
  return (
    <div className='app-con'>
        <div className="nav-con">
            <nav>
                <div className="site-icon">
                    <img src="/venmo-logo.jpg" alt="icon" />
                    <h2> emno </h2>
                </div>
                <ul>
                    <li> Home </li>
                    <li> About us </li>
                    <li> Contact us </li>
                    <li> Services </li>
                </ul>
                <button> Sign up/Login </button>
            </nav>
        </div>
        <div className="hero-con">
            <div className="hero-inner">
                <div className="hero-title">
                    <h1> <span>Lorem ipsum</span> dolor sit amet, consectetur adipisicing elit. </h1>
                    <button> More... </button>
                </div>
                <img src="/hero-img.jpg" alt="hero" />
            </div>
        </div>
    </div>
  )
}

export default App