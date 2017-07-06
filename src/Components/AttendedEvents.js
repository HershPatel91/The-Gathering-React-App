import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'


export default function AttendedEvents (props){

  let parties = props.attended_parties.map((event) => event.party)

  return(
    
    <div>
      <div className="col-md-12 flow"> 
        { parties.map((party) => 
          <div className="card">
          <Link to={`/events/${party.id}`}><h3 className="default_header">{ party.title }</h3></Link>
          <p className="normal_text">{party.date}</p>
          <p className="normal_text">{party.description}</p>
          </div>
          )
        }
      </div>
        
    </div>
  )
}

