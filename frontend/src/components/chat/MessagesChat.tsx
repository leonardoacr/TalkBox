import { Webhook } from "lucide-react"
import { format } from "date-fns"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"

export type Message = {
  id: number
  message: string
  received?: boolean
  receivedAt?: Date
  username?: string
}

type MessagesChatProps = {
  messages: Message[]
  username: string
}

const MessagesChat: React.FC<MessagesChatProps> = ({ messages, username }) => {
  const [receivedMessages, setReceivedMessages] = useState<Message[]>([])
  const isDesktop = useSelector((state: RootState) => state.isDesktop.value)

  useEffect(() => {
    const interval = setInterval(() => {
      const newMessage: Message = {
        id: Date.now(),
        message: `Received message #${receivedMessages.length + 1}`,
        received: true,
        receivedAt: new Date(),
        username: "Sender",
      }
      setReceivedMessages([...receivedMessages, newMessage])
    }, 3000)

    return () => clearInterval(interval)
  }, [messages, receivedMessages])

  const allMessages = [...messages, ...receivedMessages].sort((a, b) => {
    // Sort the messages based on the timestamp they were received
    if (a.receivedAt && b.receivedAt) {
      return b.receivedAt.getTime() - a.receivedAt.getTime()
    } else {
      return b.id - a.id // If timestamps are missing, sort by ID
    }
  })

  return (
    <div
      className={`flex flex-grow flex-col-reverse overflow-y-auto rounded px-2
     ${
       isDesktop
         ? "scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-purple-500 scrollbar-thumb-rounded"
         : "scrollbar-none"
     }`}
    >
      {allMessages.map((message) => {
        // Set the maximum width of the message based on its length
        const maxWidth = isDesktop
          ? Math.min(message.message.length * 15, (2 / 3) * 700)
          : Math.min(message.message.length * 10, (2 / 3) * 900)

        const minWidth = isDesktop ? "10rem" : "12rem"

        return (
          <div
            key={message.id}
            className={`mb-2 flex flex-col ${
              message.received ? "ml-4" : "mr-4 self-end"
            }`}
            style={{ minWidth, maxWidth }}
          >
            <div className="flex">
              <span className="font-semibold">
                {message.received ? message.username : username}
              </span>
              <Webhook className="pl-2 text-purple-600" />
              <span className="justify-center pl-2 pt-1 text-sm text-gray-500">
                {format(message.id, "MMMM dd hh:mm aaaa")}
              </span>
            </div>
            <div
              className={`break-words rounded-lg px-4 py-2 ${
                message.received ? "bg-purple-900/40" : "bg-sky-800/40"
              }`}
            >
              <span>{message.message}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MessagesChat
