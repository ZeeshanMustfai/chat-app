import { Button, Card, Input } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';

import type { Message } from '../types';

interface ChatAreaProps {
  messages: Message[];
  currentContact?: {
    name: string;
    avatar?: string;
  };
  onSendMessage: (message: string) => void;
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages, onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="text-center">
          <span className="text-[16px] text-[#ABABAB]  px-3 py-1 rounded-full">Today 12:34 PM</span>
        </div>

        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isSent ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2  ${
                message.isSent ? 'purple-gradient text-white msg-sent' : 'bg-gray-100 text-gray-900 rounded-full'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-[10px] mt-1 text-right ${message.isSent ? ' text-purple-100' : 'text-[#ABABAB]'}`}>
                {message.time}
              </p>
            </div>
          </div>
        ))}

        {/* Typing indicator placeholder */}
        <div className="flex justify-start">
          <div className="bg-gray-100 rounded-2xl px-4 py-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <Card className="border-t border-gray-200 !rounded-none shadow-lg">
        <div className="flex items-center space-x-3">
          <div>
            <Button
              type="text"
              icon={<Image src="/chat/file.svg" alt="Send" width={30} height={30} />}
              className="text-gray-400"
            />
            <Button
              type="text"
              icon={<Image src="/chat/calender.svg" alt="Send" width={30} height={30} />}
              className="text-gray-400"
            />
          </div>
          <div className="flex-1">
            <Input
              placeholder="Type Message here"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="rounded-full border-0 !bg-[#F0F2F5] h-16"
              suffix={
                <div className="flex items-center space-x-2">
                  <Button
                    type="text"
                    icon={<Image src="/chat/emoji.svg" alt="Send" width={30} height={30} />}
                    size="small"
                    className="text-gray-400"
                  />
                  <Button
                    type="text"
                    icon={<Image src="/chat/mic.svg" alt="Send" width={30} height={30} />}
                    size="small"
                    className="text-gray-400"
                  />
                </div>
              }
            />
          </div>
          <Button
            type="primary"
            icon={<Image src="/chat/email.svg" alt="Send" width={30} height={30} />}
            onClick={handleSend}
            className="purple-gradient  hover:!purple-gradient !rounded-full !w-10 !h-10 flex items-center justify-center p-0"
          />
        </div>
      </Card>
    </div>
  );
};

export default ChatArea;
