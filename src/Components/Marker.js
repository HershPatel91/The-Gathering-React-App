import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style.css'


export default class Marker extends Component {

  constructor(){
    super()
    this.state = {

    }

  }


  render(){

  return(
    <div>
      <Link to={`/events/${this.props.party.id}`}><span className="glyphicon glyphicon-map-marker" title={this.props.party.title}></span></Link>
     </div>
    )
  }
}
