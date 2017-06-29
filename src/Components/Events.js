import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

export default function Events(props){

  return(
    
    <div>
      <h2></h2>
      <ul>
        { props.parties.map((party) => <li key={party.id}><Link to={`/parties/${party.id}`}>{ party.title }</Link></li>)}
      
      </ul>

    </div>
  )
}

