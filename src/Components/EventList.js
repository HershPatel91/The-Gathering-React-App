import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'


export default function EventList (props){


  return(
    
    <div>
      <div className="col-md-12 flow"> 
        { props.parties.map((party) => 
          <div className="border">
          <Link to={`/events/${party.id}`}><h3 className="default_header">{ party.title }</h3></Link>
          <p className="normal_text">{party.date}</p>
          <p className="normal_text">{party.format_time}</p>
          <p className="normal_text">{party.location_area}</p>
          <p className="normal_text">{party.description}</p>
          <Link to={`/users/${party.admin.id}`}><p className="normal_text">Host: { party.admin.name }</p></Link>
          </div>
          )
        }
      </div>
        
    </div>
  )
}

