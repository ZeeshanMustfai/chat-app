'use client';

import { CaretDownOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Avatar, Button, Collapse, Input } from 'antd';
import { useState } from 'react';

const { Panel } = Collapse;

const contactData = [
  { name: 'Alina', number: '0923456784521' },
  { name: 'Amna', number: '0923456784521' },
  { name: 'Brown', number: '0923456784521' },
  { name: 'Ben', number: '0923456784521' },
  { name: 'Cutting', number: '0923456784521' },
  { name: 'Caral', number: '0923456784521' },
];

export default function ContactList1() {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = contactData.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="h-screen w-full bg-white flex flex-col">
      {/* Contact Header */}
      <div className="flex justify-between items-center px-4 pt-4">
        <h2 className="text-xl font-semibold">Contact</h2>
        <Button
          size="small"
          shape="circle"
          icon={<PlusOutlined className="!text-white" />}
          className="purple-gradient text-white border-none shadow !hover:purple-gradient"
        />
      </div>

      {/* Search Input */}
      <div className="p-4 pb-2 border-gray-200 rounded-full">
        <Input
          placeholder="Search"
          prefix={<SearchOutlined className="text-gray-400 " />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="!rounded-full shadow-md bg-white border-none"
        />
      </div>

      {/* Contact List */}
      <div className="flex flex-1 overflow-y-auto">
        <div className="flex-1 px-4 pb-4">
          {['A', 'B', 'C'].map((section) => {
            const sectionContacts = filtered.filter((c) => c.name.charAt(0).toUpperCase() === section);
            return sectionContacts.length > 0 ? (
              <div key={section} className="mb-2">
                <p className="text-xs text-gray-500 font-semibold py-1">{section}</p>
                {sectionContacts.map((contact, i) => (
                  <div key={i} className="flex items-center py-2 space-x-3 ">
                    <Avatar size={32} className="border !border-purple-500 !text-purple-500 !bg-white font-bold ">
                      {contact.name?.[0]?.toUpperCase() ?? '?'}
                    </Avatar>
                    <div className="ml-2">
                      <p className="text-sm font-medium">{contact.name}</p>
                      <p className="text-xs text-gray-500">{contact.number}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : null;
          })}
        </div>

        {/* Alphabet Navigation */}
        <div className="w-5 flex flex-col items-center justify-start pr-2">
          {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((char) => (
            <span
              key={char}
              className="text-[10px] text-gray-400 hover:text-black cursor-pointer leading-4 hover:text-xl transition-transform"
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Collapse Sections */}
      <div className="border-t flex-1 overflow-y-auto">
        <Collapse
          bordered={false}
          className="border-b"
          expandIconPosition="end" // ⬅️ Move icon to the right
          expandIcon={({ isActive }) => (
            <Button
              size="small"
              shape="circle"
              icon={<CaretDownOutlined rotate={isActive ? 180 : 0} className="!text-white" />}
              className="!bg-[#666666] text-white border-none shadow !hover:purple-gradient"
            />
          )}
          ghost
        >
          <Panel
            key="1"
            header={<span className="font-bold text-xl">Recent</span>}
            className="!border-b !border-gray-200"
          >
            <p className="text-sm text-gray-500">No recent contacts</p>
          </Panel>
          <Panel
            key="2"
            header={<span className="font-bold text-xl">Favourites</span>}
            className="!border-b !border-gray-200"
          >
            <p className="text-sm text-gray-500">No favourites yet</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
