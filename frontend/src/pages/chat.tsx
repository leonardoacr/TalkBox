import Header from "@/components/Header";
import HeaderChat from "@/components/chat/HeaderChat";
import MessagesChat, { Message } from "@/components/chat/MessagesChat";
import InputChat from "@/components/chat/InputChat";
import { useState } from "react";

interface ChatProps {}

const Chat: React.FC<ChatProps> = () => {
  const [sentMessages, setSentMessages] = useState<Message[]>([]);

  const handleSendMessage = (message: Message) => {
    setSentMessages([...sentMessages, message]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow">
        <div className="h-28 pt-1 pl-4 border justify-center items-center w-full  border-neutral-700 border-x-0">
          <HeaderChat />
        </div>
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-96 ">
          <div className="w-full">
            <div
              className="h-full pl-4 py-10 w-full justify-center flex"
              style={{ height: "calc(100vh - 18rem)" }}
            >
              <MessagesChat messages={sentMessages} username={""} />
            </div>
          </div>
          {/* <div>
            <button className="">CALL THE ORACLE</button>
          </div> */}
          <div className="h-28 pl-4 py-10 justify-center items-center flex">
            <InputChat onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
