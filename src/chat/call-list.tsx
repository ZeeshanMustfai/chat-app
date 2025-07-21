import { InfoCircleOutlined, PhoneOutlined } from '@ant-design/icons';
import { Avatar, Button, Card } from 'antd';
import React from 'react';

import type { CallEntry } from '../types';

interface CallsListProps {
  calls: CallEntry[];
  searchTerm: string;
}

const CallsList: React.FC<CallsListProps> = ({ calls, searchTerm }) => {
  const filteredCalls = calls.filter((call) => call.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // const getStatusColor = (status: string) => {
  //   switch (status) {
  //     case 'missed':
  //       return 'bg-red-500';
  //     case 'incoming':
  //       return 'bg-green-500';
  //     case 'outgoing':
  //       return 'bg-blue-500';
  //     default:
  //       return 'bg-gray-500';
  //   }
  // };

  // const getStatusIcon = (status: string) => {
  //   return status === 'outgoing' ? '📞' : '📱';
  // };

  return (
    <div className="w-full flex flex-col px-4">
      {/* Filter Tabs */}
      <div className="flex space-x-2 py-4">
        <div className="purple-gradient shadow-md rounded-full text-white">
          <Button type="text" className="!text-white">
            All
          </Button>
        </div>
        <div className=" rounded-full border border-purple-500 text-white">
          <Button type="text"> Missed</Button>
        </div>
        <div className="rounded-full border border-purple-500 text-white">
          <Button type="text"> Incoming</Button>
        </div>
      </div>

      {/* Calls List */}
      <div className="flex-1 overflow-y-auto !space-y-2">
        {filteredCalls.map((call) => (
          <Card
            key={call.id}
            variant="outlined"
            styles={{
              body: {
                padding: '12px 12px',
              },
            }}
            hoverable
            className="w-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center justify-between ">
              {/* Left Section */}
              <div className="flex items-center space-x-3 ml-2">
                <Avatar
                  size={40}
                  style={{
                    background: 'linear-gradient(to right, #a855f7, #ec4899)',
                    color: '#fff',
                    fontWeight: 600,
                  }}
                >
                  {call.initials}
                </Avatar>
                <div className="ml-2">
                  <p className="text-sm font-semibold text-gray-800">{call.name}</p>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <PhoneOutlined className="text-xs " />
                    <span>{call.status}</span>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex items-center flex-col">
                <span className="text-[10px] text-[#7A7A7A] mb-1">{call.time}</span>
                <InfoCircleOutlined className="!text-purple-500" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CallsList;
