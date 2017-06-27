import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

export default class EventForm extends Component {

  constructor(){
    super()
    this.state = {
      title: "",
      date: "",
      description: "",
      address: "",
      capacity: "",
      images: []
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
    this.setState({title: "", date: "", description: "", address: "", capacity: "", images: []})
  }

  render(){

    return(
      <div>
        <form>
        <div className="form-group">
          <label for="Title" className="form_labels">Title</label>
          <input type='text' className="form-control" placeholder="Event Title" name="title" value={this.state.title} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Date" className="form_labels">Date</label>
          <input type='date' className="form-control" name="date" value={this.state.date} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Description" className="form_labels">Description</label>
          <textarea className="form-control" placeholder="Event Description" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
        </div>
        <div className="form-group">
          <label for="Address" className="form_labels">Address</label>
          <input type='address' className="form-control" name="address" value={this.state.address} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Capacity" className="form_labels">Capacity</label>
          <input type='number' className="form-control" placeholder="Capacity" name="capacity" value={this.state.capacity} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Images" className="form_labels">Images</label>
          <input type='text' className="form-control" placeholder="Image URL" name="images" value={this.state.images} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <Link to='/'><button type='submit' className="btn btn-primary welcome_button" onClick={this.handleSubmit} >Create an Event</button></Link>
        </div>
        </form>
      </div>  
    )
  }
}
