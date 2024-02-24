import React, { useState } from 'react';
import axios from 'axios';

const ReplyToMessage = ({ pageId }) => {
  const [text, setText] = useState('');

  const handleReply = async () => {
    try {
      // Add API call to reply to a message
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/conversation/reply`, { pageId, text });

      console.log(response.data); // Handle response accordingly
      // You may want to update the UI or take further actions
    } catch (error) {
      console.error('Reply to message error:', error);
      // Handle reply error
    }
  };

  return (
    <div>
      <h2>Reply to Message</h2>
      <label>Message:</label>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <button onClick={handleReply}>Reply</button>
    </div>
  );
};

export default ReplyToMessage;
