import React from 'react';

interface TabSwitchProps {
  handleTabChange?: (key: string) => void;
  activeTab?: string;
}

export default function TabSwitch({ handleTabChange, activeTab }: TabSwitchProps) {
  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-full p-2 flex shadow-md">
        <button
          onClick={() => handleTabChange?.('messages')}
          className={`cursor-pointer px-5 py-1.5 rounded-full text-[16px] font-medium transition-all duration-200 ${
            activeTab === 'messages' ? 'purple-gradient text-white shadow-sm' : 'text-[#212121]'
          }`}
        >
          Messages
        </button>

        <button
          onClick={() => handleTabChange?.('calls')}
          className={`cursor-pointer px-5 py-1.5 rounded-full text-[16px] font-medium transition-all duration-200 ${
            activeTab === 'calls' ? 'purple-gradient text-white shadow-md' : 'text-[#212121]'
          }`}
        >
          Calls
        </button>
      </div>
    </div>
  );
}
