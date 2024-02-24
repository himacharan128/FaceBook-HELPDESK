// pages/dashboard.js
import React from 'react';
import Head from 'next/head';
import Auth from '../components/Auth/Auth';
import ConnectPage from '../components/Page/ConnectPage';
import DeletePage from '../components/Page/DeletePage';
import ConversationList from '../components/Conversation/ConversationList';
import ConversationThread from '../components/Conversation/ConversationThread';
import ReplyToMessage from '../components/Conversation/ReplyToMessage';

const Dashboard = () => {
  // State or logic to manage the selected conversation and page
  const selectedConversationId = 'some-conversation-id'; // Replace with your logic
  const selectedPageId = 'some-page-id'; // Replace with your logic

  return (
    <div>
      <Head>
        <title>FB Helpdesk Dashboard</title>
        {/* Additional head elements if needed */}
      </Head>

      <Auth />

      {/* Connect Page */}
      <ConnectPage />

      {/* Delete Page */}
      <DeletePage pageId={selectedPageId} />

      {/* Conversation List */}
      <ConversationList />

      {/* Conversation Thread */}
      <ConversationThread conversationId={selectedConversationId} />

      {/* Reply to Message */}
      <ReplyToMessage pageId={selectedPageId} />
    </div>
  );
};

export default Dashboard;
