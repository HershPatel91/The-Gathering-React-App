import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'


export default function HostingEvents (props){

  let parties = props.hosted_parties.map((party) => party)

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

