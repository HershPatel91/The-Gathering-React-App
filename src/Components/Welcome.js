import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'



export default function About(){
  return(
    <div className="about_background">
    	<div>
      <h1 className="header">Welcome to the Gathering </h1>
      </div>
      <div>
      	<br></br>
      	<br></br>
      	<br></br>
      	<br></br>
      	<br></br>
      	<br></br>
      	<br></br>
      	<br></br>
      	<br></br>
      	<br></br>
      	<Link to='../login'><button type="button" className="welcome_button col-md-6 btn">Log in</button></Link>
      	<Link to='../newuser'><button type="button" className="welcome_button col-md-6 col-md-offset-2 btn">New User</button></Link>
      	</div>
    </div>
  )
}
