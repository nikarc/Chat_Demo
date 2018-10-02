import React from 'react';
import ChatBubble from './ChatBubble';

class ChatWindow extends React.Component {
  render () {
    const { messages, className } = this.props;
    return (
      <div id="chat-window">
        <div id="chat-messages-wrap" className={className}>
          {messages.map((m, index) => <ChatBubble message={m} key={index} />)}
        </div>
      </div>
    );
  }
}

export default ChatWindow;