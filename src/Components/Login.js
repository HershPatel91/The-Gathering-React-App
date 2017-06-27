import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

export default class Login extends Component {

   constructor(){
    super()
    this.state = {
      username: '',
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
    this.setState({username: '', password: ''})
  }

  render(){

    return(
      <div>
        <form>
        <div className="form-group">
          <label for="Username" className="form_labels">Username</label>
          <input type='text' className="form-control" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Password" className="form_labels">Password</label>
          <input type='password' className="form-control" name="password" value={this.state.password} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <Link to='/'><button type='submit' className="btn btn-primary welcome_button" onClick={this.handleSubmit} >Log In</button></Link>
        </div>
        </form>
      </div>  
    )
  }
}

