import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'


export default function MessageList (props){

  return(
    
    <div>
      <div className="col-md-12 flow"> 
        { props.messages.map((message) => 
          <div className="row msg_container base_sent">
              <div className="col-md-10 col-xs-10">
                <div className="messages msg_sent">
                    <p className="normal_text">{message.message}</p>
                    <time className="small_text_grey"datetime={message.created_at}>{message.user.name} {message.datetime}</time>
                </div>
              </div>
              <div class="col-md-2 col-xs-2 avatar">
                <img className="message_img"src={message.user.picture} class=" img-responsive " />
              </div>
          </div>
          )
        }
      </div>
        
    </div>
  )
}

