// components/Page/ConnectPage.js
import React, { useState } from 'react';
import axios from 'axios';

const ConnectPage = () => {
  const [pageId, setPageId] = useState('');

  const handleConnect = async () => {
    try {
      // Add API call to connect FB page
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/page`, { pageId });

      console.log(response.data); // Handle response accordingly
      // You may want to update the UI or take further actions
    } catch (error) {
      console.error('Connect page error:', error);
      // Handle connection error
    }
  };

  return (
    <div>
      <h2>Connect FB Page</h2>
      <label>Page ID:</label>
      <input type="text" value={pageId} onChange={(e) => setPageId(e.target.value)} />
      <br />
      <button onClick={handleConnect}>Connect Page</button>
    </div>
  );
};

export default ConnectPage;
