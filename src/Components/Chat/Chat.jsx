import React, { useState } from 'react';

import './Chat.css';

function Chat() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleSendMessage() {
    if (inputText.trim() === '') {
      return;
    }

    const newMessage = {
      id: Date.now(),
      text: inputText.trim(),
      highlighted: true,
    };

    setMessages(prevMessages => {
        const updatedMessages = prevMessages.map(message => {
          if (message.highlighted) {
            return { ...message, highlighted: false };
          }
          return message;
        });
        return [newMessage, ...updatedMessages];
      });
  
      setInputText('');
    }
  
    return (
      <div className="wrapper">
        <h1 className="title">Comments</h1>
        <div className="form">
          <div className="inputfield">
            <input type="text" value={inputText} onChange={handleInputChange} id="newComment" />
          </div>
          <div className="inputfield">
            <button className="btn" onClick={handleSendMessage}>
              Send
            </button>
          </div>
          <ul>
            {messages.map(message => (
              <li
                key={message.id}
                style={{ backgroundColor: message.highlighted ? '#ffeeba' : 'transparent' }}
              >
                {message.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default Chat;