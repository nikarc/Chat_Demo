import React from 'react';
import ChatWindow from './ChatWindow';
import ChatBubble from './ChatBubble';

class Chat extends React.Component {
  state = {
    tempMessage: null,
    messages: [
      {
        text: 'Hello, how are you?',
        context: 'to'
      }
    ],
    textInput: ''
  }

  textInput = e => {
    const { target } = e;
    this.setState({
      textInput: target.innerHTML
    });
  }

  submitMessage = () => {
    const newMessage = {
      text: this.state.textInput,
      context: 'from'
    };

    const messages = [...this.state.messages, newMessage];

    this.refs.textInputDiv.innerHTML = '';
    this.setState({
      tempMessage: newMessage,
    });

    setTimeout(() => {
      this.setState({
        messages,
        textInput: '',
        tempMessage: null
      });
    }, 500);
  }

  render () {
    return (
      <div id="chat">
        <ChatWindow className={this.state.tempMessage ? 'slide' : ''} messages={this.state.messages} />
        <div id="chat-input-wrap">
          <div id="chat-input" contentEditable={true} onInput={this.textInput} ref="textInputDiv">
            {this.state.tempMessage ? <ChatBubble className="temp-message" message={this.state.tempMessage} /> : null}
          </div>
          <button className="app-btn" disabled={!this.state.textInput.length} onClick={this.submitMessage}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Chat;