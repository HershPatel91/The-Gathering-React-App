import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
import MessageBoard from '../Components/MessageBoard'

export default class EventDetail extends Component {

  constructor() {
    super()
    this.state = {
      }
      this.handleSubmit=this.handleSubmit.bind(this)
  }


  
  

handleSubmit(e){
    e.preventDefault()
    this.props.onSubmit({guest_id: this.props.user.id, party_id: this.props.party.id, status: "applied"} )
  }

handleEdit(e){
  e.preventDefault()
  this.props.onSubmit({})
}

render(){

  let address
  let button_status
  let progress
  let applied_ids
  let approved_ids 
  let rejected_ids
  let message 

function setVariable(){
  if (this.props.party.approved_guests !== undefined && this.props.user !== undefined) {
    progress = this.props.party.approved_guests.length/this.props.party.capacity*100,
    approved_ids = this.props.party.approved_guests.map((guests) => guests.guest.id),
    applied_ids = this.props.party.applied_guests.map((guests) => guests.guest.id)
    rejected_ids = this.props.party.rejected_guests.map((guests) => guests.guest.id)
  } else {
    this.setState({ progress: 0 })
  }
}

function setButton(){
if(this.props.user && approved_ids.includes(this.props.user.id) && this.props.party){
    button_status = <Link to='../events'><button type="button" className="event_button btn">You are attending this event! More events.</button></Link>
  } else if (this.props.user && applied_ids.includes(this.props.user.id) && this.props.party) {
    button_status = <Link to='../events'><button type="button" className="event_button btn">You have applied to this event! More events.</button></Link> 
  } else if (this.props.user && rejected_ids.includes(this.props.user.id) && this.props.party) {
    button_status = <Link to='../events'><button type="button" className="event_button btn">You were rejected from the event! More events.</button></Link> 
  } else if (this.props.user && this.props.party.admin_id === this.props.user.id) {
    button_status = <Link to={`../events/${this.props.party.id}/edit`}><button type="button" className="event_button btn">Edit Event</button></Link> 
  } else if (this.props.party.capacity === this.props.party.approved_guests.length && this.props.party && this.props.user){
    button_status = <Link to='../events'><button type="button" className="event_button btn">Sorry, party is full! More events.</button></Link> 
  } else if (this.props.party && this.props.user) {
    button_status = <button type="submit" onClick = {this.handleSubmit} className="event_button btn">Add name to guest list!</button>
  } else {
    return null
  }
}

function setAddress(){
  if(approved_ids.includes(this.props.user.id) || this.props.party.admin_id === this.props.user.id){
    address = <h4 className="normal_text">Full Address: {this.props.party.location}</h4> 
  } else {
    address = <h4 className="normal_text"> (Full Address will be revealed once accepted!)</h4>
  }
}

function setMessage(){
  if(approved_ids.includes(this.props.user.id) || this.props.party.admin_id === this.props.user.id) {
       message =  <MessageBoard party = {this.props.party} onSubmit={this.props.onMessageSubmit} user={this.props.user}/>
     } else {
      null
  }
}

setVariable = setVariable.bind(this)
setAddress = setAddress.bind(this)
setButton = setButton.bind(this)
setMessage = setMessage.bind(this)




  if (this.props.party && this.props.user && this.props.party.approved_guests) {
    setVariable()
    setAddress()
    setButton()
    setMessage()

  return(
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6"> 
            <h1 className="default_title">{this.props.party.title}</h1>
          </div>
          <div className="col-md-6">
            <div className="col-md-3">
            <h1 className='default_title'>Description</h1>
            </div>
            <div className="col-md-9">
              {message}
            </div>
          </div>
      </div>
        <div className="row heightbuffer">
          <div className="col-md-6 leftbuffer">
            <img src={this.props.party.image} height="500"></img>
          </div>
          <div className="col-md-6">
            <div>
              <h4 className="normal_text">{this.props.party.description}</h4>
            </div>
            <div className="row heightbufferbig">
              <div className="col-md-3">
                <h4 className="default_title">Attendees</h4>
                <br></br>
                <h4 className="normal_text">{this.props.party.capacity-this.props.party.approved_guests.length} / {this.props.party.capacity} Spots Remaining</h4>
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
            <h4 className="normal_text">Date: {this.props.party.date}</h4>
            <br></br>
            <h4 className="normal_text">Time: {this.props.party.format_time}</h4>
            <br></br>
            <h4 className="normal_text">Location: {this.props.party.location_area}</h4>
            {address}
            <br></br>
            <Link to={`/users/${this.props.party.admin.id}`}><p className="normal_text">Host: { this.props.party.admin.name }</p></Link>
          </div>
            <div className="col-md-5">
              <div className="row" id="scroll">
              {this.props.party.approved_guests.map((approved)=> <Link to={`/users/${approved.guest.id}`}><img className='guest' src={approved.guest.picture} height="100" width='100'></img></Link>)}
              </div>
              <div className ="row heightbuffer">
                <div className="col-md-4">
                  <h2 className="default_title">Cover Charge: {this.props.party.cover}</h2>
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
  } else {
    window.location.href = `http://localhost:3001/events/`
   }
}
}
