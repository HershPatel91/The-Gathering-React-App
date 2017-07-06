import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

export default function EventDetail({party}){
  

  let progress
  let button_status
  
  if (party !== undefined) {
    progress = party.approved_guests.length/party.capacity*100
  } else {
    progress = 0
  }

  if (!party) {
    return null
  }

  if (party.capacity === party.approved_guests.length && party){
    button_status = <Link to='../events'><button type="button" className="event_button btn">Sorry, party is full! More events.</button></Link>
  } else if (party) {
    button_status = <Link to='../events'><button type="button" className="event_button btn">Add name to guest list!</button></Link>
  } else {
    return null
  }

  return(
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6"> 
            <h1 className="default_title">{party.title}</h1>
          </div>
          <div className="col-md-6"> 
            <h1 className='default_title'>Description</h1>
          </div>
      </div>
        <div className="row heightbuffer">
          <div className="col-md-6 leftbuffer">
            <img src={party.image} height="500"></img>
          </div>
          <div className="col-md-6">
            <div>
              <h4 className="normal_text">{party.description}</h4>
            </div>
            <div className="row heightbufferbig">
              <div className="col-md-3">
                <h4 className="default_title">Attendees</h4>
                <br></br>
                <h4 className="normal_text">{party.capacity-party.approved_guests.length} / {party.capacity} Spots Remaining</h4>
              </div>
              <div className="col-md-9 heightbuffersmall">
                <div className='progress'>
                  <div className='progress-bar'
                    id="pb"
                    role='progressbar'
                    aria-valuenow='70'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{width: `${progress}%`}}>
                 </div>
                </div>
              </div>
           </div> 
          </div>
        <div className="row heightbuffer">
          <div className="col-md-6 leftbufferdetail heightbuffersmall">
            <h4 className="normal_text">Date: {party.date}</h4>
            <br></br>
            <h4 className="normal_text">Time: {party.time}</h4>
            <br></br>
            <h4 className="normal_text">Location: {party.location_area}</h4>
            <h4 className="normal_text"> (Full Address will be revealed once accepted!)</h4>
            <br></br>
            <Link to={`/users/${party.admin.id}`}><p className="normal_text">Host: { party.admin.name }</p></Link>
          </div>
            <div className="col-md-5">
              <div className="row" id="scroll">
              {party.approved_guests.map((approved)=> <Link to={`/users/${approved.guest.id}`}><img className='guest' src={approved.guest.picture} height="100" width='100'></img></Link>)}
              </div>
              <div className ="row heightbuffer">
                <div className="col-md-4">
                  <h2 className="default_title">Cover Charge: ${party.cover}</h2>
                </div>
                <div className="col-md-6 col-md-offset-1">
                  <br></br>
                  {button_status}
                </div>
              </div>
            </div>
          </div>
    </div>
    </div>
  </div>
  )
}
