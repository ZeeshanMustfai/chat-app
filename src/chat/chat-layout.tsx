import React, { useState } from 'react';

import ChatArea from './chat-area';
import Header from './chat-header';
import Sidebar from './chat-side-bar';
import SidebarRight from './chat-side-bar-right';

import type { CallEntry, Contact, Message } from '../types';

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

  // Mock data
  const calls: CallEntry[] = [
    { id: '1', name: 'Kim Williamson', time: '2:34pm', status: 'missed', initials: 'KW', color: 'bg-purple-400' },
    { id: '2', name: 'Shane Watson', time: '2:34pm', status: 'outgoing', initials: 'SW', color: 'bg-green-400' },
    { id: '3', name: 'Hazellwood', time: '2:34pm', status: 'incoming', initials: 'H', color: 'bg-pink-400' },
    { id: '4', name: 'Zunaira Butt', time: '2:34pm', status: 'incoming', initials: 'ZB', color: 'bg-pink-400' },
    { id: '5', name: 'Kamran Masood', time: '2:34pm', status: 'outgoing', initials: 'KM', color: 'bg-purple-400' },
  ];

  const contacts: Contact[] = [
    { id: '1', name: 'Alina', phone: '092345784521', initials: 'A', color: 'bg-blue-400' },
    { id: '2', name: 'Anna', phone: '092345784521', initials: 'A', color: 'bg-green-400' },
    { id: '3', name: 'Brown', phone: '092345784521', initials: 'B', color: 'bg-orange-400' },
    { id: '4', name: 'Ben', phone: '092345784521', initials: 'B', color: 'bg-purple-400' },
    { id: '5', name: 'Cutting', phone: '092345784521', initials: 'C', color: 'bg-pink-400' },
    { id: '6', name: 'Carl', phone: '092345784521', initials: 'C', color: 'bg-indigo-400' },
  ];

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
