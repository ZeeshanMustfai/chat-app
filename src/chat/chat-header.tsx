import { DownOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown } from 'antd';
import Image from 'next/image';
import React from 'react';

interface HeaderProps {
  selectedNumber: string;
  currentContact?: {
    name: string;
    lastSeen: string;
    avatar?: string;
  };
}

const Header: React.FC<HeaderProps> = ({ currentContact }) => {
  const numberItems = [
    { key: '1', label: 'Primary Number' },
    { key: '2', label: 'Secondary Number' },
  ];

  const moreItems = [
    { key: '1', label: 'Block Contact' },
    { key: '2', label: 'Delete Chat' },
  ];

  return (
    <div className="bg-white border-b border-gray-200 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 group flex-1 px-4 py-3">
          <div>
            <div className="text-[16px] text-black">Select your number</div>
            <Dropdown menu={{ items: numberItems }} trigger={['click']}>
              <Button className="purple-gradient !text-white shadow-sm !rounded-full px-4 hover:from-fuchsia-600 hover:to-blue-600 transition-all">
                All Numbers <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div className="flex items-center flex-1 justify-end ">
            <Button
              type="text"
              icon={<Image src="/chat/msg.svg" alt="Send" width={20} height={20} />}
              className="text-gray-600 hover:text-purple-500"
            />
            <Button
              type="text"
              icon={<Image src="/chat/phone.svg" alt="Send" width={20} height={20} />}
              className="text-gray-600 hover:text-purple-500"
            />
          </div>
        </div>

        <div className="flex items-center justify-between space-x-4 border-l border-r border-gray-200 flex-[3.45] px-4 py-3">
          <div className="flex items-center space-x-3">
            <Avatar src={currentContact?.avatar} className="bg-orange-400" size={55}>
              {currentContact?.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </Avatar>
            <div className="ml-2">
              <h3 className="font-bold text-black">{currentContact?.name}</h3>
              <p className="text-[1rem] text-[#ABABAB]">{currentContact?.lastSeen}</p>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <Button
              type="text"
              icon={<Image src="/chat/phone.svg" alt="Send" width={20} height={20} />}
              className="text-gray-600 hover:text-purple-500"
            />
            <Dropdown menu={{ items: moreItems }} trigger={['click']}>
              <Button
                type="text"
                icon={<Image src="/chat/dot.svg" alt="Send" width={20} height={20} />}
                className="text-gray-600 hover:text-purple-500"
              />
            </Dropdown>
          </div>
        </div>

        <div className="flex items-center space-x-2 flex-1 justify-end px-4 py-3">
          <Button
            type="text"
            icon={<Image src="/chat/info.svg" alt="Send" width={20} height={20} />}
            className="text-gray-600 hover:text-purple-500"
          />
          <Button
            type="text"
            icon={<Image src="/chat/setting.svg" alt="Send" width={20} height={20} />}
            className="text-gray-600 hover:text-purple-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
