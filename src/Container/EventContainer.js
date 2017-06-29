import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import EventForm from '../Components/EventForm'
import Welcome from '../Components/Welcome'
import About from '../Components/About'
import Login from '../Components/Login'
import Events from '../Components/Events'
import UserForm from '../Components/UserForm'
import { Link } from 'react-router-dom'
import {PartiesAdapter} from '../Adapters'


export default class EventContainer extends Component {

  constructor() {
    super()
    this.state = {
      parties: []
    }
    this.createParty = this.createParty.bind(this)
    this.deleteParty = this.deleteParty.bind(this)
    this.updateParty = this.updateParty.bind(this)
  }

  componentDidMount(){
      PartiesAdapter.all()
        .then( data => this.setState({ parties: data}) )
    }

  createParty(party){
    PartiesAdapter.create(party)
      .then(student => this.setState((previousState) => {
        return {
          students: [...previousState.parties, party]
        }
      })
    )
  }

  deleteParty(id){
    PartiesAdapter.destroy(id)
      .then( () => {
        this.setState( previousState => {
          return {
            students: previousState.parties.filter( party => party.id !== id )
          }
        })
        this.props.history.push("/events")
      })
  }

  updateParty(party){
    // student {id: 32, name: "Ian Candi"}
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
      this.props.history.push(`/parties/${party.id}`)
    })
  }

  render() {
    return (
    	<div>
    	 
    	<Switch>
            <Route exact path='/newevent' render={() => <EventForm />} />
            <Route exact path='/events' render={() => <Events parties={this.state.parties}/> } />
            <Route exact path='/about' render={() => <About />} />
            <Route exact path='/' render={() => <Welcome />} />
            <Route exact path='/login' render={() => <Login />} />
            <Route exact path='/newuser' render={() => <UserForm />} />
         </Switch>
      </div>

    	)
      }
  }


