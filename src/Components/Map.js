import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import GoogleMap from 'google-map-react'
import Marker from '../Components/Marker'
import $ from 'jquery'




export default class Map extends Component {

constructor(){
    super()
    this.state = {
      center: [40.75, -73.98],
      zoom: 13
    }
  }

 

  componentWillReceiveProps(nextProps) {
  switch(nextProps.location){
      case "Greenwich Village":
          this.setState({
            center: [40.730824, -73.997330],
            zoom: 16
    })
          break
      case "All":
          this.setState({
            center: [40.75, -73.98],
            zoom: 13
    })
          break
      case "Financial District":
          this.setState({
            center: [40.7075, -74.0113],
            zoom: 15
    })
          break
      case "Chinatown":
          this.setState({
            center: [40.7158, -73.9970],
            zoom: 16
    })
          break
      case "Little Italy":
          this.setState({
            center: [40.7191, -73.9973],
            zoom: 16
    })
          break
      case "Soho":
          this.setState({
            center: [40.7233, -74.0030],
            zoom: 15
    })
          break
      case "East Village":
          this.setState({
            center: [40.7265, -73.9815],
            zoom: 15
    })
          break 
      case "Tribeca":
          this.setState({
            center: [40.7163, -74.0086],
            zoom: 15
    })
          break 
      case "Midtown West":
          this.setState({
            center: [40.7584, -73.9926],
            zoom: 15
    })
          break
      case "West Village":
          this.setState({
            center: [40.7358, -74.0036],
            zoom: 16
    })
          break
      case "Central Park":
          this.setState({
            center: [40.76749693, -73.97582943],
            zoom: 15
    })
          break
      case "Midtown East":
          this.setState({
            center: [40.7540, -73.9668],
            zoom: 15
    })
          break
      case "Midtown":
          this.setState({
            center: [40.7549, -73.9840],
            zoom: 15
    })
          break
      case "Upper East Side":
          this.setState({
            center: [40.7736, -73.9566],
            zoom: 15
    })
          break
      case "Upper West Side":
          this.setState({
            center: [40.7870, -73.9754],
            zoom: 15
    })
          break
      case "Chelsea":
          this.setState({
            center: [40.7465, -74.0014],
            zoom: 15
    })
          break
      case "Flatiron":
          this.setState({
            center: [40.7401, -73.9903],
            zoom: 15
    })
          break
}
}

 render() {
var markers = this.props.parties.map( party => { return <Marker lat={party.latitude} lng={party.longitude} party={party}/> })

    return (
    	<div style={{width:'45vw', height: '40vw'}}>
                <GoogleMap 
                  bootstrapURLKeys={{
                    key: 'AIzaSyCV7ebL929Rw856hMaN-eNskRA3a8OOANI',
                    language: 'en'
                  }}
                  center={this.state.center} zoom={this.state.zoom}>
                  {markers}
               </GoogleMap>
      </div>
      )
  }
  
}


