// components/Conversation/ConversationList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ConversationList = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    // Fetch conversations from the server
    const fetchConversations = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/conversation`);
        setConversations(response.data);
      } catch (error) {
        console.error('Fetch conversations error:', error);
        // Handle fetching error
      }
    };

    fetchConversations();
  }, []);

  return (
    <div>
      <h2>Conversations</h2>
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation._id}>
            <p>{/* Display relevant information from the conversation */}</p>
            {/* You need to display information such as customer name, last message, etc. */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;
