import React from 'react'

//import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Dave Doub <br></br>
        Husband <br></br>
        Father <br></br>
        Sailer <br></br>
        Engineer <br></br>
        Extraordinaire


        </strong>
      </h1>
    </div>
 
  </header>
)

export default Header
