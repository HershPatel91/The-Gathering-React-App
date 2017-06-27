import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

export default class UserForm extends Component {

  constructor(){
    super()
    this.state = {
      username: "",
      password: "",
      name: "",
      gender: "",
      age: "",
      description: "",
      picture: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    this.setState({username: "", password: "", name: "", gender: "", age: "", description: "", picture: ""})
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
          <label for="password" className="form_labels">Password</label>
          <input type='password' className="form-control" name="password" value={this.state.password} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Name" className="form_labels">Name</label>
          <input type="text" className="form-control" placeholder="Full Name" name="name" value={this.state.name} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Address" className="form_labels">Gender</label>
          <input type='gender' className="form-control" placeholder="Gender" name="gender" value={this.state.gender} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Age" className="form_labels">Age</label>
          <input type='number' className="form-control" placeholder="Age" name="age" value={this.state.age} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Description" className="form_labels">Description</label>
          <input type='textarea' className="form-control" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Picture" className="form_labels">Picture URL</label>
          <input type='text' className="form-control" placeholder="Picture URL" name="picture" value={this.state.picture} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <Link to='/'><button type='submit' className="btn btn-primary welcome_button" onClick={this.handleSubmit} >Submit</button></Link>
        </div>
        </form>
      </div>  
    )
  }
}
