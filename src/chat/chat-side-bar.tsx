import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React, { useState } from 'react';

import CallsList from './call-list';
import TabSwitch from './custom-tabs';

import type { CallEntry, Contact } from '../types';

interface SidebarProps {
  calls: CallEntry[];
  contacts?: Contact[];
  onContactSelect?: (contact: Contact) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ calls, contacts, onContactSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('calls');

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };
  console.log('contacts', contacts, onContactSelect);
  // const tabItems = [
  //   {
  //     key: 'messages',
  //     label: 'Messages',
  //     children: (
  //       <div className="px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200">Messages view</div>
  //     ),
  //   },
  //   {
  //     key: 'calls',
  //     label: 'Calls',
  //     children: <CallsList calls={calls} searchTerm={searchTerm} />,
  //   },
  // ];

  return (
    <div className="w-80 bg-[#EFF1F2] border-r border-gray-200 h-screen flex flex-col">
      {/* Tabs */}
      <div className="overflow-hidden pt-6 pb-2">
        {/* <Tabs
          defaultActiveKey="calls"
          items={tabItems}
          className="h-full"
          tabBarStyle={{ paddingLeft: '16px', paddingRight: '16px' }}
        /> */}
        <TabSwitch handleTabChange={handleTabChange} activeTab={activeTab} />
      </div>
      {/* Search */}
      <div className="p-4 pb-2 border-gray-200 rounded-full">
        <Input
          placeholder="Search"
          prefix={<SearchOutlined className="text-gray-400 " />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="!rounded-full shadow-md bg-white border-none"
        />
      </div>

      {activeTab === 'calls' && <CallsList calls={calls} searchTerm={searchTerm} />}
    </div>
  );
};

export default Sidebar;
