import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import '../style.css'


export default class Login extends Component {

   constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onSubmit( this.state )
    this.setState({email: '', password: ''})
  }

  render(){

    return(
      <div>
        <form>
        <div className="form-group">
          <label for="Email" className="form_labels">Email</label>
          <input type='email' className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Password" className="form_labels">Password</label>
          <input type='password' className="form-control" name="password" value={this.state.password} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <Link to='/events'><button type='submit' className="btn welcome_button" onClick={this.handleSubmit} >Log In</button></Link>
        </div>
        </form>
      </div>  
    )
  }
}

