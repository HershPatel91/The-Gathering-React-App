import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import '../style.css'


export default class UserForm extends Component {

  constructor(){
    super()
    this.state = {
      email: "",
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
    this.setState({email: "", password: "", name: "", gender: "", age: "", description: "", picture: ""})
  }

  render(){

    return(
      <div>
        <form>
        <div className="form-group">
          <label for="Email" className="form_labels">Email</label>
          <input type='text' className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}/>
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
          <label for="gender" className="form_labels">Gender</label>
          <select className="form-control" name="gender" value={this.state.gender} onChange={this.handleChange}>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
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
          <Link to='/'><button type='submit' className="btn welcome_button" onClick={this.handleSubmit} >Submit</button></Link>
        </div>
        </form>
      </div>  
    )
  }
}
