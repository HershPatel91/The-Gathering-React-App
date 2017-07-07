import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
import HostingNots from '../Components/HostingNots'
import ApprovalGuestlist from '../Components/ApprovalGuestlist'
import FriendRequests from '../Components/FriendRequests'



export default class Notifications extends Component {

  constructor() {
    super()
    this.state = {
    	hosted_party: ""
      }
    this.handleChange = this.handleChange.bind(this)
}

handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    }) 
  }


  render() {
  	if (this.props.user) {
  	return( 
  		<div>
  		  <div className="col-md-6">
  		  	<div className="row">
  		  		<h1 className="default_title leftbufferdetail">Guestlist Awaiting Approval</h1>
  		  	</div>
          	<div className="row"> 
          		<HostingNots hosted_parties = {this.props.user.hosted_events} parties={this.props.parties} handleChange={this.handleChange} hosted_party={this.state.hosted_party} />
          	</div>
          	<div className="row">
          	<ApprovalGuestlist hosted_party={this.state.hosted_party} parties={this.props.parties} onAccept={this.props.onAccept} onReject={this.props.onReject}/>
          	</div>
          </div>
          <div className="col-md-6">
  		  	<div className="row">
  		  		<h1 className="default_title leftbufferdetail">Friend Requests</h1>
  		  	</div>
  		  	<br></br>
  		  	<br></br>
  		  	<br></br>
          	<div className="row">
          		<FriendRequests user={this.props.user} onAcceptFriend = {this.props.onAcceptFriend} onRejectFriend = {this.props.onRejectFriend}/>
          	</div>
         </div>
		</div>
  	) } else {
  		   window.location.href = "http://localhost:3001/myprofile"

  	}
  }
}
