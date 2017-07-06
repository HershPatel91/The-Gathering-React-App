import React from 'react'
import { Link } from 'react-router-dom'
import AttendedEvents from '../Components/AttendedEvents'
import AttendingEvents from '../Components/AttendingEvents'
import '../style.css'

export default function UserDetail({user}){

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
        	<button>Add Friend</button>
          </div>
      </div>
      <div className="col-md-6"> 
         <div className="row">
            <h1 className='default_title'>Past Events</h1>
         </div>
            <div className="row">
              <h4><AttendedEvents attended_parties={user.attended_events}/></h4>
            </div>
            <div className="row heightbufferuser">
              <h4 className="default_title">Events Attending</h4>
            </div>
            <div className="row">
              <h4 className="default_title"><AttendingEvents attending_parties={user.attending_events}/></h4>
            </div>
       </div>
    </div>

	)


}
  