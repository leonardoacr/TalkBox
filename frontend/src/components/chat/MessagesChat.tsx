import React from "react";

type Message = {
  id: number;
  message: string;
};

type MessagesChatProps = {
  messages: Message[];
};

const MessagesChat: React.FC<MessagesChatProps> = ({ messages }) => {
  return (
    <div className="overflow-y-auto flex-grow px-4">
      {messages.map((message) => (
        <div key={message.id} className="flex flex-col mb-2">
          <span className="text-gray-500">{message.id}</span>
          <div className="bg-blue-200 rounded-lg px-4 py-2 self-start">
            <span>{message.message}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessagesChat;
