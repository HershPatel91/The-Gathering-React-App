import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

export default class FriendRequests extends Component {

  constructor() {
    super()
    this.state = {
      }
      this.handleAccept = this.handleAccept.bind(this)
      this.handleReject = this.handleReject.bind(this)
}

handleAccept(e){
  e.preventDefault()
  this.props.onAcceptFriend({id: e.target.value, status: "approved"} )
}

handleReject(e){
  e.preventDefault()
  this.props.onRejectFriend({id: e.target.value, status: "rejected"} )
}

  render() {
    let requests

    if (this.props.user) {
      requests = this.props.user.incoming_friend_requests.map(request => {return <div><Link to={`/users/${request.user.id}`}><h3 className="normal_text">{request.user.name}</h3></Link><p className="normal_text">{request.user.description}</p><button type="submit" onClick = {this.handleAccept} className="event_button btn" value={request.id}>Accept</button><button type="submit" value={request.id} onClick = {this.handleReject} className="event_button btn heightbuffersmall">Reject</button></div>}) 
    }

    if (this.props.user){

    return( 
      <div>
        <div className="col-md-6">
          {requests}
            </div>
      </div>)

       } else {
         window.location.href = "http://localhost:3001/myprofile"

    }
  }
}
