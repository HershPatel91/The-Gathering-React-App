import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
import $ from 'jquery'
import MessageInput from '../Components/MessageInput'
import MessageList from '../Components/MessageList'


export default class MessageBoard extends Component {

  constructor() {
    super()
    this.state = {
      }
  }

  componentDidMount(){
  $(document).on('click', '.panel-heading span.icon_minim', function (e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
})
}

render(){

  return(
    <div className="container">
    <div className="row chat-window col-xs-5 col-md-7" id="chat_window_1" styleName="margin-left:10px;">
        <div className="col-xs-12 col-md-12">
          <div className="panel panel-default">
                <div className="panel-heading top-bar">
                    <div className="col-md-8 col-xs-8">
                        <h3 className="panel-title"><span className="glyphicon glyphicon-comment"></span> Party Chat!</h3>
                    </div>
                    <div className="col-md-4 col-xs-4" styleName="text-align: right;">
                        <a href="#"><span id="minim_chat_window" className="glyphicon glyphicon-minus icon_minim"></span></a>
                    </div>
                </div>
                <div className="panel-body msg_container_base">
                  <MessageList messages={this.props.party.messages} user={this.props.user}/>
                  <MessageInput user={this.props.user} party={this.props.party} onSubmit = {this.props.onSubmit}/>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}

