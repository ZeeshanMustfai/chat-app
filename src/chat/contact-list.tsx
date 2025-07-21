import { PlusOutlined, RightOutlined } from '@ant-design/icons';
import { Avatar, Button, Collapse } from 'antd';
import React, { useState } from 'react';

import type { Contact } from '../types';

interface ContactsListProps {
  contacts: Contact[];
  onContactSelect: (contact: Contact) => void;
}

const ContactsList: React.FC<ContactsListProps> = ({ contacts, onContactSelect }) => {
  const [activeKeys, setActiveKeys] = useState<string[]>([]);

  const groupedContacts = contacts.reduce((groups: { [key: string]: Contact[] }, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(contact);
    return groups;
  }, {});

  const items = Object.entries(groupedContacts).map(([letter, contacts]) => ({
    key: letter,
    label: (
      <div className="flex items-center justify-between">
        <span className="font-medium">
          {letter === 'recent' ? 'Recent' : letter === 'favourites' ? 'Favourites' : 'Contact'}
        </span>
        <Button type="text" size="small" icon={<PlusOutlined />} className="text-gray-400" />
      </div>
    ),
    children: (
      <div className="space-y-2">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            onClick={() => onContactSelect(contact)}
            className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer"
          >
            <Avatar className={contact.color} size={32}>
              {contact.initials}
            </Avatar>
            <div className="flex-1">
              <p className="font-medium text-gray-900 text-sm">{contact.name}</p>
              <p className="text-xs text-gray-500">{contact.phone}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <div className="p-4">
      <Collapse
        ghost
        activeKey={activeKeys}
        onChange={(keys) => setActiveKeys(Array.isArray(keys) ? keys : [keys])}
        items={items}
        expandIcon={({ isActive }) => <RightOutlined rotate={isActive ? 90 : 0} className="text-gray-400" />}
      />
    </div>
  );
};

export default ContactsList;
