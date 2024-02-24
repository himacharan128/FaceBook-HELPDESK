import React from 'react';
import axios from 'axios';

const DeletePage = ({ pageId }) => {
  const handleDelete = async () => {
    try {
      // Add API call to delete FB page
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/page/${pageId}`);

      console.log(response.data); // Handle response accordingly
      // You may want to update the UI or take further actions
    } catch (error) {
      console.error('Delete page error:', error);
      // Handle deletion error
    }
  };

  return (
    <div>
      <h2>Delete FB Page</h2>
      <p>Page ID: {pageId}</p>
      <button onClick={handleDelete}>Delete Page</button>
    </div>
  );
};

export default DeletePage;
