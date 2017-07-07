import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

export default class ApprovalGuestlist extends Component {

  constructor() {
    super()
    this.state = {
      }
      this.handleAccept = this.handleAccept.bind(this)
      this.handleReject = this.handleReject.bind(this)
}

handleAccept(e){
  e.preventDefault()
  this.props.onAccept({id: e.target.value, status: "approved"} )
}

handleReject(e){
  e.preventDefault()
  this.props.onReject({id: e.target.value, status: "rejected"} )
}

  render() {
    let party
    let applied_guests

    if(this.props.hosted_party === "" || this.props.hosted_party ==="Pick a Hosted Event") {
        applied_guests = <h2 className="normal_text">Select a Party</h2>
      } else {
    party = this.props.parties.find(function(party) {return party.title === this.props.hosted_party}.bind(this))
    applied_guests = party.applied_guests.map(guest => {return <div><Link to={`/users/${guest.guest.id}`}><h3 className="normal_text">{guest.guest.name}</h3></Link><p className="normal_text">{guest.guest.description}</p><button type="submit" onClick = {this.handleAccept} className="event_button btn" value={guest.id}>Accept</button><button type="submit" value={guest.id} onClick = {this.handleReject} className="event_button btn heightbuffersmall">Reject</button></div>}) }


  	if (this.props.parties) {
  	return( 
  		<div>
  		  <div className="col-md-6">
  		      {applied_guests}
          	</div>
  		</div>)
       } else {
  		   window.location.href = "http://localhost:3001/myprofile"

  	}
  }
}
