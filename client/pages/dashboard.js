// pages/dashboard.js
import React from 'react';
import Head from 'next/head';
import ConnectPage from '../components/Page/ConnectPage';
import DeletePage from '../components/Page/DeletePage';
import ConversationList from '../components/Conversation/ConversationList';
import ConversationThread from '../components/Conversation/ConversationThread';
import ReplyToMessage from '../components/Conversation/ReplyToMessage';

const Dashboard = () => {
  const selectedConversationId = 'some-conversation-id';
  const selectedPageId = 'some-page-id';

  return (
    <div>
      <Head>
        <title>FB Helpdesk Dashboard</title>
      </Head>
      {/* <Auth /> */}
      <ConnectPage />
      <DeletePage pageId={selectedPageId} />
      <ConversationList />
      <ConversationThread conversationId={selectedConversationId} />
      <ReplyToMessage pageId={selectedPageId} />
    </div>
  );
};

export default Dashboard;
