import { SetStateAction, useState } from "react"
import { Send } from "lucide-react"

const InputChat = ({
  onSendMessage,
}: {
  onSendMessage: (message: { id: number; message: string }) => void
}) => {
  const [message, setMessage] = useState<any>()

  const handleChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setMessage(event.target.value)
  }

  const handleSend = () => {
    const newMessage = {
      id: Date.now(),
      message,
    }
    console.log(newMessage)
    onSendMessage(newMessage)
    setMessage("")
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSend()
    }
  }

  return (
    <div className="sm:w- flex h-full w-full items-center ">
      <div className="mr-4 flex w-full items-center">
        <div className="mx-auto flex h-full w-11/12 items-center sm:w-10/12">
          <div className="mr-4 flex-grow">
            <div className="flex items-center rounded-full border-[1.5px] border-sky-800/80 shadow-md">
              <input
                className="w-full rounded-full px-4 py-4 leading-tight text-zinc-50 focus:outline-none"
                type="text"
                placeholder="Type your message here..."
                value={message}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
          <button
            className="font-bold text-sky-600 hover:text-sky-400"
            onClick={handleSend}
          >
            <Send />
          </button>
        </div>
      </div>
    </div>
  )
}

export default InputChat
