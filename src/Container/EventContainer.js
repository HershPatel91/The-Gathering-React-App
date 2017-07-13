import React, { Component } from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import EventForm from '../Components/EventForm'
import Events from '../Components/Events'
import EventDetail from '../Components/EventDetail'
import EventEdit from '../Components/EventEdit'
import UserForm from '../Components/UserForm'
import UserDetail from '../Components/UserDetail'
import MyProfile from '../Components/MyProfile'
import MyProfileEdit from '../Components/MyProfileEdit'
import Notifications from '../Components/Notifications'
import {PartiesAdapter, UsersAdapter, AuthAdapter, PartyGuestsAdapter, FriendshipAdapter, MessagesAdapter} from '../Adapters'
import '../style.css'



class EventContainer extends Component {

  constructor() {
    super()
    this.state = {
      parties: [],
      users: [],
      friendships: [],
       auth: {
        isLoggedIn: false,
        user: {}
      },
    }

    this.createParty = this.createParty.bind(this)
    this.deleteParty = this.deleteParty.bind(this)
    this.updateParty = this.updateParty.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.loggedInUser = this.loggedInUser.bind(this)
    this.createPartyGuest = this.createPartyGuest.bind(this)
    this.updatePartyGuest = this.updatePartyGuest.bind(this)
    this.createFriendship = this.createFriendship.bind(this)
    this.updateFriendship = this.updateFriendship.bind(this)
    this.createMessage = this.createMessage.bind(this) 
    this.createUser = this.createUser.bind(this)
  }

  componentWillMount(){
    if (!localStorage.getItem('user_id')){
       this.props.history.push('/')
    } else {
      PartiesAdapter.all()
        .then( data => this.setState({ parties: data}) )
      UsersAdapter.all()
        .then( data => this.setState({ users: data}) ) 
      FriendshipAdapter.all()
        .then( data => this.setState({ friendships: data}) )
      }
    }


  createParty(party){
    debugger
    PartiesAdapter.create(party)
      .then(party => this.setState((previousState) => {
        return {
          parties: [...previousState.parties, party]
        }
      })
    )
      this.props.history.push('/events')
  }

createPartyGuest(partyguest){
    PartyGuestsAdapter.create(partyguest)
    .then( data => this.setState({ parties: data}) )   
   this.props.history.push('/events')
  }

createUser(user){
    UsersAdapter.create(user)
      .then(user => {
        localStorage.setItem("user_id", user.id)
        this.setState((previousState) => {
        return {
          users: [...previousState.users, user],
          auth: { isLoggedIn: true, user: user}
        }
      })}
    )
      this.props.history.push('/events')
  }

createFriendship(friendship){
    FriendshipAdapter.create(friendship)
      .then(friendship => this.setState((previousState) => {
        return {
            friendships: [...previousState.friendships, friendship]
        }
      })
    )
      this.props.history.push('/events')
  }

createMessage(message){
    MessagesAdapter.create(message)
    .then( data => this.setState({ parties: data}) )
  }

updatePartyGuest(partyguest){
    PartyGuestsAdapter.update(partyguest)
     .then( data => this.setState({ parties: data}) )
   this.props.history.push('/events')
  }

  updateFriendship(friendship){
    FriendshipAdapter.update(friendship)
     .then( data => this.setState({ users: data}) )
  }

  deleteParty(id){
    PartiesAdapter.destroy(id)
      .then( () => {
        this.setState( previousState => {
          return {
            students: previousState.parties.filter( party => party.id !== id )
          }
        })
      })
  }

  updateParty(party){
    PartiesAdapter.update(party).then(() => {
      this.setState(function(previousState){
        return {
          parties: previousState.parties.map(function(p){
            if (p.id !== party.id ) {
              return p
            } else {
              return party
            }
          })
        }
      })
      this.props.history.push(`/events/${party.id}`)
    })
  }

  updateUser(user){
    debugger
    UsersAdapter.update(user).then(() => {
      this.setState(function(previousState){
        return {
          users: previousState.users.map(function(u){
            if (u.id !== user.id ) {
              return u
            } else {
              return user
            }
          })
        }
      })
      this.props.history.push(`/myprofile`)
    })
  }

  loggedInUser(){
    const id = localStorage.getItem('user_id')
    const user = this.state.users.find( p =>  p.id === parseInt(id) )
    return user
  }

  render() {
  return (
    	<div>
    	<Switch>
            <Route exact path='/eventform' render={() => <EventForm onSubmit={this.createParty} user={this.loggedInUser()}/>} />
            <Route exact path='/events' render={() => <Events parties={this.state.parties}/> } />
            <Route exact path='/events/:id' render={(routerProps) => {
              const id = routerProps.match.params.id
              const party = this.state.parties.find( p =>  p.id === parseInt(id) )
              return <EventDetail party={party} user={this.loggedInUser()} onSubmit = {this.createPartyGuest} onMessageSubmit={this.createMessage}/> }} />
            <Route exact path='/events/:id/edit' render={(routerProps) => {
              const id = routerProps.match.params.id
              const party = this.state.parties.find( p =>  p.id === parseInt(id) )
              return <EventEdit party={party} onSubmit = {this.updateParty}/> }} />
            <Route exact path='/myprofile' render={() => <MyProfile user={this.loggedInUser()}/> } />
            <Route exact path='/myprofile/edit' render={() => <MyProfileEdit user={this.loggedInUser()} onSubmit={this.updateUser}/> } />
            <Route exact path='/users/:id' render={(routerProps) => {
              const id = routerProps.match.params.id
              const user = this.state.users.find( u =>  u.id === parseInt(id) )
              return <UserDetail user={user} current_user={this.loggedInUser()} onSubmit={this.createFriendship}/> }} />
            <Route exact path='/newuser' render={() => <UserForm onSubmit = {this.createUser}/>} />
            <Route exact path='/notifications' render={() => <Notifications parties={this.state.parties} user={this.loggedInUser()} onAccept={this.updatePartyGuest} onReject={this.updatePartyGuest} onAcceptFriend={this.updateFriendship} onRejectFriend={this.updateFriendship}/>} />
         </Switch>
      </div>

    	)
      }
  }

  export default withRouter(EventContainer); 


