import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { collection, query, orderBy, onSnapshot, addDoc } from "firebase/firestore";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async (message) => {
    if (message.trim()) {
      await addDoc(collection(db, "messages"), {
        text: message,
        user: auth.currentUser.email,
        timestamp: new Date(),
      });
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <MessageList messages={messages} />
      <ChatInput onSendMessage={sendMessage} />
    </div>
  );
};

export default Chat;
