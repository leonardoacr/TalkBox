import { SetStateAction, useState } from "react";
import { Send } from "lucide-react";

const InputChat = ({
  onSendMessage,
}: {
  onSendMessage: (message: { id: number; message: string }) => void;
}) => {
  const [message, setMessage] = useState<any>();

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    const newMessage = {
      id: Date.now(),
      message,
    };
    console.log(newMessage);
    onSendMessage(newMessage);
    setMessage("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex items-center w-11/12 sm:w-10/12 h-full">
      <div className="flex mr-4 w-full items-center">
        <div className="flex items-center w-11/12 sm:w-10/12 h-full mx-auto">
          <div className="flex-grow mr-4">
            <div className="border-[1.5px] border-purple-800/80 rounded-full shadow-md flex items-center">
              <input
                className="rounded-full w-full px-4 py-4 text-neutral-700 leading-tight focus:outline-none"
                type="text"
                placeholder="Type your message here..."
                value={message}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
          <button
            className="text-sky-600 hover:text-sky-400 font-bold"
            onClick={handleSend}
          >
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputChat;
