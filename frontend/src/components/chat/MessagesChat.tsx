import { Webhook } from "lucide-react";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";

export type Message = {
  id: number;
  message: string;
  received?: boolean;
  receivedAt?: Date;
  username?: string;
};

type MessagesChatProps = {
  messages: Message[];
  username: string;
};

const MessagesChat: React.FC<MessagesChatProps> = ({ messages, username }) => {
  const [receivedMessages, setReceivedMessages] = useState<Message[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newMessage: Message = {
        id: Date.now(),
        message: `Received message #${receivedMessages.length + 1}`,
        received: true,
        receivedAt: new Date(),
        username: "Sender",
      };
      setReceivedMessages([...receivedMessages, newMessage]);
    }, 3000);

    return () => clearInterval(interval);
  }, [messages, receivedMessages]);

  const allMessages = [...messages, ...receivedMessages].sort((a, b) => {
    // Sort the messages based on the timestamp they were received
    if (a.receivedAt && b.receivedAt) {
      return b.receivedAt.getTime() - a.receivedAt.getTime();
    } else {
      return b.id - a.id; // If timestamps are missing, sort by ID
    }
  });

  return (
    <div
      className="overflow-y-auto flex-grow px-4 flex flex-col-reverse scrollbar-thin
     scrollbar-thumb-purple-500 scrollbar-track-gray-700 rounded scrollbar-thumb-rounded"
    >
      {allMessages.map((message) => (
        <div
          key={message.id}
          className={`flex flex-col mb-2 w-96 ${
            message.received ? "ml-4" : "mr-4 self-end"
          }`}
        >
          <div className="flex">
            <span className="font-semibold">
              {message.received ? message.username : username}
            </span>
            <Webhook className="text-purple-600 pl-2" />
            <span className="text-gray-500 pl-2 text-sm justify-center pt-1">
              {format(message.id, "MMMM dd hh:mm aaaa")}
            </span>
          </div>
          <div
            className={`min-w-1/4 px-4 rounded-lg py-2 break-words ${
              message.received ? "bg-purple-900/40 " : "bg-sky-800/40"
            }`}
          >
            <span>{message.message}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessagesChat;
