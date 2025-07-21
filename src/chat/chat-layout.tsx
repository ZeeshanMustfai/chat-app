import React, { useState } from 'react';

import { calls, contacts } from '@/constants';
import ChatArea from './chat-area';
import Header from './chat-header';
import Sidebar from './chat-side-bar';
import SidebarRight from './chat-side-bar-right';

import type { Contact, Message } from '../types';

const MainLayout: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello, how are you available for meeting',
      time: '9:30AM',
      isSent: false,
    },
    {
      id: '2',
      text: 'Hello',
      time: '9:30AM',
      isSent: true,
    },
    {
      id: '3',
      text: 'Hello, how are you available for meeting',
      time: '9:31AM',
      isSent: true,
    },
    {
      id: '4',
      text: 'Hello, how are you available for meeting',
      time: '9:32AM',
      isSent: true,
    },
    {
      id: '5',
      text: 'Hello',
      time: '9:34AM',
      isSent: false,
    },
    {
      id: '6',
      text: 'Hello, how are you available for meeting',
      time: '9:34AM',
      isSent: false,
    },
  ]);

  const handleContactSelect = (contact: Contact) => {
    setSelectedContact(contact);
  };

  const handleSendMessage = (message: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      time: new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }),
      isSent: true,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Header
        selectedNumber="All Numbers"
        currentContact={
          selectedContact
            ? {
                name: selectedContact.name,
                lastSeen: 'Last seen at 2:34pm',
                avatar: selectedContact.avatar,
              }
            : {
                name: 'Mishal Irfan',
                lastSeen: 'Last seen at 2:34pm',
              }
        }
      />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar calls={calls} contacts={contacts} onContactSelect={handleContactSelect} />
        <ChatArea
          messages={messages}
          currentContact={
            selectedContact
              ? {
                  name: selectedContact.name,
                  avatar: selectedContact.avatar,
                }
              : {
                  name: 'Mishal Irfan',
                }
          }
          onSendMessage={handleSendMessage}
        />
        <SidebarRight calls={calls} contacts={contacts} onContactSelect={handleContactSelect} />
      </div>
    </div>
  );
};

export default MainLayout;
