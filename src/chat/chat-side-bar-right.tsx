import React from 'react';

import ContactList from './contact-list';

import type { CallEntry, Contact } from '../types';

interface SidebarProps {
  calls: CallEntry[];
  contacts: Contact[];
  onContactSelect: (contact: Contact) => void;
}

const SidebarRight: React.FC<SidebarProps> = () => {
  return (
    <div className="hidden w-80 bg-white border-l border-gray-200 h-screen md:flex flex-col">
      <ContactList />
    </div>
  );
};

export default SidebarRight;
