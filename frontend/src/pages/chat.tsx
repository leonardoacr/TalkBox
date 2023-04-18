import Header from "@/components/Header"
import HeaderChat from "@/components/chat/HeaderChat"
import MessagesChat, { Message } from "@/components/chat/MessagesChat"
import InputChat from "@/components/chat/InputChat"
import { useState } from "react"

interface ChatProps {}

const Chat: React.FC<ChatProps> = () => {
  const [sentMessages, setSentMessages] = useState<Message[]>([])

  const handleSendMessage = (message: Message) => {
    setSentMessages([...sentMessages, message])
  }

  return (
    <div className="flex h-screen flex-col">
      <div className="ml-64 flex-grow ">
        <Header />
        <div className="h-16 w-full items-center justify-center border border-x-0 border-b-0 border-neutral-700  pl-4 pt-1">
          {/* <HeaderChat /> */}
        </div>
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 ">
          <div className="w-full ">
            <div
              className="flex h-full w-full justify-center py-10 pl-4"
              style={{ height: "calc(100vh - 18rem)" }}
            >
              <MessagesChat messages={sentMessages} username={""} />
            </div>
          </div>
          {/* <div>
            <button className="">CALL THE ORACLE</button>
          </div> */}
          <div className="flex h-28 items-center justify-center py-10 pl-4">
            <InputChat onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
