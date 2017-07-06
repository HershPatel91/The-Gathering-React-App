import React from 'react'

export default function NavBar(){
  return (
  <nav className="navbar navbar-inverse bg-inverse">
  <div className="col-md-12 flow"> 
    <a  className="col-md-2" href="../"><h2 className="main">The Gathering</h2></a>
    <a  className="col-md-3 col-md" href="../events"><h1 className="link">View Events</h1></a>
    <a   className="col-md-3 col-md" href="../newevent"><h1 className="link">Create New Event</h1></a>
    <a  className="col-md-2 col-md" href="../myevents"><h1 className="link">My Events</h1></a>
    <a  className="col-md-2 col-md" href="../about"><h1 className="link">About</h1></a>
    
</div>
</nav>
)
}