import React from 'react'
import { Link } from 'react-router-dom'
import AttendedEvents from '../Components/AttendedEvents'
import AttendingEvents from '../Components/AttendingEvents'
import HostingEvents from '../Components/HostingEvents'
import AppliedEvents from '../Components/AppliedEvents'
import '../style.css'

export default function MyProfile({user}){

 if (!user) {
    return null
  }

return(
	<div className="container-fluid">
       <div className="col-md-6">
          <div className="row"> 
            <h1 className="default_title">{user.name}</h1>
          </div>
          <div className="row heightbuffersmall">
            <img src={user.picture} height="500"></img>
          </div>
          <div className="row">
        	<h1 className='default_title heightbuffersmall'>Age</h1>
        	<p className="normal_text">{user.age}</p>
          </div>
          <div className="row">
        	<h1 className='default_title heightbuffersmall'>User Bio</h1>
        	<p className="normal_text">{user.description}</p>
          </div>
          <div className="row heightbuffersmall">
          </div>
      </div>
      <div className="col-md-6"> 
         <div className="row">
            <h1 className='default_title'>Events Hosting</h1>
         </div>
            <div className="row" id="eventscroll">
              <h4 ><HostingEvents hosted_parties={user.hosted_events}/></h4>
            </div>
            <div className="row heightbuffersmall">
              <h4 className="default_title">Events Attending</h4>
              <div className="row"  id="eventscroll">
              <h4 className="default_title"><AttendingEvents attending_parties={user.attending_events}/></h4>
            </div>
            </div> 
            <div className="row heightbuffersmall">
              <h4 className="default_title">Events Applied</h4>
            </div>
            <div className="row" id="eventscroll">
              <h4 className="default_title" ><AppliedEvents applied_parties={user.applied_events}/></h4>
            </div>
       </div>
    </div>

	)


}
  