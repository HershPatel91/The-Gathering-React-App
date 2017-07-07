import React, { Component } from 'react'
import '../style.css'
import EventList from '../Components/EventList'
import Search from '../Components/Search'
import Map from '../Components/Map'
import DateSearch from '../Components/DateSearch'
import LocationSearch from '../Components/LocationSearch'
import $ from 'jquery'
import DateRangePicker from 'react-bootstrap-daterangepicker'



export default class Events extends Component {


  constructor(){
    super()
    this.state = {
    	searchTerm: "",
      dateRange: "06/30/2017 - 12/30/2017",
      locationTerm: "All"
    }
   this.handleChange = this.handleChange.bind(this);
   this.formatDate = this.formatDate.bind(this)
   this.filterParties = this.filterParties.bind(this)
  }



  componentDidMount(){
    $('#daterange').daterangepicker()
    $('#daterange').on('apply.daterangepicker', (e) => {this.handleChange(e)})
    this.formatDate()
}



  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    }) 
  }

  filterParties(){
      return this.state.locationTerm === "All" ? this.props.parties.filter((party)=> (party.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || party.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())) && ((Date.parse(party.date) > this.formatDate()[0]) && (Date.parse(party.date) < this.formatDate()[1]))) : this.props.parties.filter((party)=> (party.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || party.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())) && ((Date.parse(party.date) > this.formatDate()[0]) && (Date.parse(party.date) < this.formatDate()[1])) && (party.location_area === this.state.locationTerm))

  }

  formatDate(){
    let startDate = Date.parse(this.state.dateRange.slice(0,10))
    let endDate = Date.parse(this.state.dateRange.slice(13,24))
    let filter = [startDate, endDate]
    return filter
  }

  render(){

  return(
    <div>
    	<div className="col-md-12 container">
        <div className="col-md-1">
          <div className="row heightbuffer">
            <Map location={this.state.locationTerm} parties={this.filterParties()}/>
    		</div>
      </div>
   			<div className="col-md-6 col-md-offset-5">
           <div className="row">
              <h1 className="default_title">Events</h1>
           </div>
          <div className="row heightbuffersmall">
            <div className="col-md-4">
              <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
            </div>
            <div className="col-md-4">
              <DateSearch defaultValue={this.state.dateRange}/>
              </div>
            <div className="col-md-4">
              <LocationSearch locationTerm={this.state.locationTerm} handleChange={this.handleChange} />
            </div>
          </div>
        <div className="row" id="listscroll">
     				<EventList parties= {this.filterParties()} />
     		</div>
     </div>
     </div>
     </div>
    )
  }
}
