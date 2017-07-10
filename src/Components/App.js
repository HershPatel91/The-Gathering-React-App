import React, { Component } from 'react';
import { Route, withRouter} from 'react-router-dom'
import NavBar from './Navbar'
import Welcome from '../Components/Welcome'
import About from '../Components/About'
import Login from '../Components/Login'
import EventContainer from '../Container/EventContainer'
import {AuthAdapter} from '../Adapters'
import '../style.css'


class App extends Component {

  constructor() {
    super()
    this.state = {
      auth: {
        isLoggedIn: false,
        user: {} 
      }
    }

    this.logIn = this.logIn.bind(this)

  }

  componentDidMount(){
    if (localStorage.getItem('jwt')){
      AuthAdapter.currentUser()
      .then(user => this.setState({
        auth: {
          isLoggedIn: true,
          user: user
        }
      }))
    }
  }


  logIn(user){
    AuthAdapter.login(user)
   .then(user => {
     if (!user.error) {
      this.setState({
      auth: { isLoggedIn: true, user: user}
    })
       localStorage.setItem("user_id", user.id)
       this.props.history.push('/events')
     }
   })

 } 

  render() {
    return (
      <div className="App">
        <div className="App-header">
           <NavBar />
          <Route exact path='/about' render={() => <About />} />
          <Route exact path='/login' render={() => <Login  onSubmit={this.logIn}/>} />
          <Route exact path='/' render={() => <Welcome />} />
          <EventContainer user_id = {this.state.auth.user.id}/>
        </div>
      </div>
    );
  }
}

  export default withRouter(App); 
