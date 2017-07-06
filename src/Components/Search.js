import React from 'react'	


const Search = (props) => {
  return (
    <div className="ui huge fluid icon input normal_text">
      <input
        type="text"
        placeholder={"Search Events"}
        name = "searchTerm"
        value = {props.searchTerm}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default Search
