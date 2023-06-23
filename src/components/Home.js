import React from 'react'
import {Link} from 'react-router-dom'
import './Style.css'

function Home(){
    return(
        <div>
            <div className='navbar'>
                <h2><b>REACT PROJECT</b></h2>

             <nav className='nav1'>
        <ul>
          <li>
            <Link to="/" className='home'><b>Home</b></Link>
          </li>
          <li>
            <Link to="/about" className='about'><b>About</b></Link>
          </li>
          <li>
            <Link to="/service" className='service'><b>Service</b></Link>
          </li>
          <li>
            <Link to="/sign" className='signin'><b>Sign In </b></Link>
          </li>
          <li>
            <Link to="/view" className='view'><b>View Page </b></Link>
          </li>
        </ul>
      </nav>
      </div>
      <div className='middle'><h1><b>Welcome to our site !!</b></h1></div>
      <div className='lower'>
      <h3>Easy to use !!</h3>
      <h3>Free for all beginners !!</h3>
      <h3> Easy coding !!</h3>
      </div>
       </div>
    )
}
export default Home;