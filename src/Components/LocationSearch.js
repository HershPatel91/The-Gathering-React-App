import React from 'react' 


const LocationSearch = (props) => {
  return (
    <div className="form-group">
          <select className="form-control normal_text" name="locationTerm"  onChange={props.handleChange}>
            <option>All</option>
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
  )
}

export default LocationSearch
