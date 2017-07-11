import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style.css'


export default class MessageInput extends Component {

  constructor(){
    super()
    this.state = {
      message: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onSubmit({party_id: this.props.party.id, user_id: this.props.user.id, message: this.state.message})
    this.setState({message: ""})
  }

  render(){

    return(
      <div className="panel-footer">
          <div className="input-group">
              <input id="btn-input" type="text" className="form-control input-sm normal_text" name="message" placeholder="Type your message here..." value={this.state.message} onChange={this.handleChange}/>
                  <span className="input-group-btn">
                      <button className="btn btn-warning btn-sm" id="btn-chat" onClick={this.handleSubmit}>Send</button>
                        </span>
                    </div>
                </div>
    )
  }
}
