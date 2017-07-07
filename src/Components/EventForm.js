import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style.css'


export default class EventForm extends Component {

  constructor(){
    super()
    this.state = {
      title: "",
      time: "",
      date: "",
      description: "",
      location: "",
      location_area: "Financial District",
      capacity: "",
      image: "",
      cover: "",
      admin_id: 1
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
    this.setState({title: "", date: "", description: "", location: "", capacity: "", image: "", time: "", cover: "", location_area: "", admin_id: 1})
  }

  render(){

    return(
      <div>
        <form className="normal_text">
        <div className="form-group">
          <label for="Title" className="form_labels">Title</label>
          <input type='text' className="form-control" placeholder="Event Title" name="title" value={this.state.title} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Date" className="form_labels">Date</label>
          <input type='date' className="form-control" name="date" value={this.state.date} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Time" className="form_labels">Time</label>
          <input type='time' className="form-control" name="time" value={this.state.time} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Description" className="form_labels">Description</label>
          <textarea className="form-control" placeholder="Event Description" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
        </div>
        <div className="form-group">
          <label for="Address" className="form_labels">Address</label>
          <input type='address' className="form-control" name="location" value={this.state.location} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="neighborhood" className="form_labels">Neighborhood</label>
          <select className="form-control" name="location_area" value={this.state.location_area} onChange={this.handleChange}>
            <option>Financial District</option>
            <option>Chinatown</option>
            <option>Little Italy</option>
            <option>Soho</option>
            <option>Greenwich Village</option>
            <option>East Village</option>
            <option>Tribeca</option>
            <option>Midtown West</option>
            <option>West Village</option>
            <option>Central Park</option>
            <option>Midtown East</option>
            <option>Midtown</option>
            <option>Upper East Side</option>
            <option>Upper West Side</option>
            <option>Flatiron</option>
            <option>Chelsea</option>
          </select>
        </div>
        <div className="form-group">
          <label for="Capacity" className="form_labels">Capacity</label>
          <input type='number' className="form-control" placeholder="Capacity" name="capacity" value={this.state.capacity} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Cover" className="form_labels">Cover Charge</label>
          <input type='number' className="form-control" name="cover" value={this.state.cover} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Images" className="form_labels">Images</label>
          <input type='text' className="form-control" placeholder="Image URL" name="image" value={this.state.image} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <Link to='/'><button type='submit' className="btn event_button" onClick={this.handleSubmit} >Create an Event</button></Link>
        </div>
        </form>
      </div>  
    )
  }
}
