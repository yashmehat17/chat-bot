import React, { useState } from "react";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSend}>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatInput;
