import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

export default function HostingNots (props){

  let parties = props.hosted_parties.map((party) => party)
  let choices = parties.map((party) => {return <option>{party.title}</option>})

  return(
    
    <div>
     <div className="form-group">
        <select className="form-control normal_text" name="hosted_party" value={props.hosted_party} onChange={props.handleChange}>
          <option>Pick a Hosted Event</option>
          {choices}
        </select>  
        </div>  
    </div>
  )
}