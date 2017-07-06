import React, { Component } from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import EventForm from '../Components/EventForm'
import Welcome from '../Components/Welcome'
import About from '../Components/About'
import Login from '../Components/Login'
import Events from '../Components/Events'
import EventDetail from '../Components/EventDetail'
import UserForm from '../Components/UserForm'
import UserDetail from '../Components/UserDetail'
import MyProfile from '../Components/MyProfile'
import {PartiesAdapter, UsersAdapter, AuthAdapter} from '../Adapters'
import '../style.css'



class EventContainer extends Component {

  constructor() {
    super()
    this.state = {
      parties: [],
      users: [],
       auth: {
        isLoggedIn: false,
        user: {}
      },
    }

    this.createParty = this.createParty.bind(this)
    this.deleteParty = this.deleteParty.bind(this)
    this.updateParty = this.updateParty.bind(this)
    this.logIn = this.logIn.bind(this)
  }

  componentDidMount(){
      PartiesAdapter.all()
        .then( data => this.setState({ parties: data}) )
      UsersAdapter.all()
        .then( data => this.setState({ users: data}) )
    }


  logIn(user){
    AuthAdapter.currentUser(user)
   .then(user => {
     if (!user.error) {
       localStorage.setItem("user_id", user.id)
        this.props.history.push('/events')
     }
   })
 }

  createParty(party){
    PartiesAdapter.create(party)
      .then(party => this.setState((previousState) => {
        return {
          parties: [...previousState.parties, party]
        }
      })
    )
      this.props.history.push('/events')
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



  render() {
  return (
    	<div>
    	<Switch>
            <Route exact path='/newevent' render={() => <EventForm onSubmit={this.createParty}/>} />
            <Route exact path='/events' render={() => <Events parties={this.state.parties}/> } />
            <Route exact path='/events/:id' render={(routerProps) => {
              const id = routerProps.match.params.id
              const party = this.state.parties.find( p =>  p.id === parseInt(id) )
              return <EventDetail party={party}/> }} />
            <Route exact path='/myevents' render={() => {
              const id = localStorage.getItem('user_id')
              const user = this.state.users.find( p =>  p.id === parseInt(id) )
              return <MyProfile user={user}/> }} />
            <Route exact path='/users/:id' render={(routerProps) => {
              const id = routerProps.match.params.id
              const user = this.state.users.find( u =>  u.id === parseInt(id) )
              return <UserDetail user={user}/> }} />
            <Route exact path='/about' render={() => <About />} />
            <Route exact path='/' render={() => <Welcome />} />
            <Route exact path='/login' render={() => <Login  onSubmit={this.logIn}/>} />
            <Route exact path='/newuser' render={() => <UserForm />} />
         </Switch>
      </div>

    	)
      }
  }

  export default withRouter(EventContainer); 


