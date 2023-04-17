import Header from "@/components/Header";
import HeaderChat from "@/components/chat/HeaderChat";
import MessagesChat from "@/components/chat/MessagesChat";
import InputChat from "@/components/chat/InputChat";

const Chat = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow">
        <div className="relative h-28 pt-1 pl-4 border  border-neutral-700">
          <HeaderChat />
        </div>
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64">
          <div
            className="h-full pl-4 py-10"
            style={{ height: "calc(100vh - 18rem)" }}
          >
            <MessagesChat messages={[]} />
          </div>
          <div className="h-28 pl-4 py-10  justify-center items-center flex">
            <InputChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
