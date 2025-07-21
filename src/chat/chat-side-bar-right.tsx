import React from 'react';

import ContactList1 from './contact-list1';

import type { CallEntry, Contact } from '../types';

interface SidebarProps {
  calls: CallEntry[];
  contacts: Contact[];
  onContactSelect: (contact: Contact) => void;
}

const SidebarRight: React.FC<SidebarProps> = () => {
  return (
    <div className="w-80 bg-white border-l border-gray-200 h-screen flex flex-col">
      <ContactList1 />
    </div>
  );
};

export default SidebarRight;
