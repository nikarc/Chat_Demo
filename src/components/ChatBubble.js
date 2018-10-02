import React from 'react';

export default props => <div className={`chat-bubble-wrap ${props.className} ${props.message.context}`}><div className={`chat-bubble ${props.message.context}`}>{props.message.text}</div></div>;