import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import AttendedEvents from '../Components/AttendedEvents'
import AttendingEvents from '../Components/AttendingEvents'
import '../style.css'

export default class UserDetail extends Component {

  constructor() {
    super()
    this.state = {
      }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.friendIds = this.friendIds.bind(this)
    this.setButton = this.setButton.bind(this)
}

handleSubmit(e){
  e.preventDefault()
  this.props.onSubmit({related_user_id: this.props.user.id, user_id: this.props.current_user.id, status: "requested"} )
}

setButton(){
  let id = this.friendIds()
  if (id.includes(this.props.current_user.id)) {
    return <button className="event_button">Hi Friend!</button>
  } else {
    return <button className="event_button" onClick={this.handleSubmit}>Add Friend</button>
  }
}

friendIds(){
  let user_friends_users = this.props.user.friends.map((friend) => friend.user.id)
  let user_friends_friends = this.props.user.friends.map((friend) => friend.friend.id)
  let all_friends = user_friends_users.concat(user_friends_friends)
  return all_friends
}

render() {

  if (!this.props.user) {
    return null
  } else if(this.props.user.id === this.props.current_user.id) {

    window.location.href = "http://localhost:3001/myprofile"

  } else {

return(
	<div className="container-fluid">
       <div className="col-md-6">
          <div className="row"> 
            <h1 className="default_title">{this.props.user.name}</h1>
          </div>
          <div className="row heightbuffersmall">
            <img src={this.props.user.picture} height="500"></img>
          </div>
          <div className="row">
        	<h1 className='default_title heightbuffersmall'>Age</h1>
        	<p className="normal_text">{this.props.user.age}</p>
          </div>
          <div className="row">
        	<h1 className='default_title heightbuffersmall'>User Bio</h1>
        	<p className="normal_text">{this.props.user.description}</p>
          </div>
          <div className="row heightbuffer">
            {this.setButton()}
          </div>
      </div>
      <div className="col-md-6"> 
         <div className="row">
            <h1 className='default_title'>Past Events</h1>
         </div>
            <div className="row">
              <h4><AttendedEvents attended_parties={this.props.user.attended_events}/></h4>
            </div>
            <div className="row heightbufferuser">
              <h4 className="default_title">Events Attending</h4>
            </div>
            <div className="row">
              <h4 className="default_title"><AttendingEvents attending_parties={this.props.user.attending_events}/></h4>
            </div>
       </div>
    </div>

	)
}
}
}
  