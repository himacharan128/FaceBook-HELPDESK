// components/Conversation/ConversationThread.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConversationThread = ({ conversationId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages for the selected conversation from the server
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/conversation/${conversationId}`);
        setMessages(response.data.messages);
      } catch (error) {
        console.error('Fetch messages error:', error);
        // Handle fetching error
      }
    };

    fetchMessages();
  }, [conversationId]);

  return (
    <div>
      <h2>Conversation Thread</h2>
      <ul>
        {messages.map((message) => (
          <li key={message._id}>
            <p>{message.sender}: {message.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationThread;
