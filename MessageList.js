import React from "react";

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((msg) => (
        <div key={msg.id}>
          <strong>{msg.user}: </strong>
          <span>{msg.text}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
