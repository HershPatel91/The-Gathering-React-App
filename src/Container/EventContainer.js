import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import EventForm from '../Components/EventForm'
import About from '../Components/About'
import Welcome from '../Components/Welcome'
import Login from '../Components/Login'
import UserForm from '../Components/UserForm'


export default class EventContainer extends Component {

  constructor() {
    super()
    this.state = {
      
    }
}

  render() {
    return (
    	<div>
    	<Switch>
            <Route exact path='/newevent' render={() => <EventForm />} />
            <Route exact path='/welcome' render={() => <Welcome />} />
            <Route exact path='/about' render={() => <About />} />
            <Route exact path='/login' render={() => <Login />} />
            <Route exact path='/newuser' render={() => <UserForm />} />
         </Switch>
         </div>

    	)
  }
}

