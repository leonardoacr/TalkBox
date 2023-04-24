import Header from "@/components/Header";
import MessagesChat, { Message } from "@/components/chat/MessagesChat";
import InputChat from "@/components/chat/InputChat";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsDesktop } from "@/store/isDesktopSlice";
import { RootState } from "@/store/store";
import HeaderChat from "@/components/chat/HeaderChat";
import { setTheme } from "@/store/themeSlice";

interface ChatProps {}

const Chat: React.FC<ChatProps> = () => {
  const [sentMessages, setSentMessages] = useState<Message[]>([]);
  const isDesktop = useSelector((state: RootState) => state.isDesktop.value);
  const mode = useSelector((state: RootState) => state.theme.mode);
  const connectivityStatus = useSelector(
    (state: RootState) => state.connectivity.status
  );

  useEffect(() => {
    console.log("Current connectivity status:", connectivityStatus);
  }, [connectivityStatus]);

  console.log("conect? ", connectivityStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTheme(mode));

    const handleResize = (): void => {
      const isDesktop = window.innerWidth >= 768; // 768 is the breakpoint for a small tablet
      dispatch(setIsDesktop(isDesktop));
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, mode]);

  const handleSendMessage = (message: Message) => {
    setSentMessages([...sentMessages, message]);
  };

  return (
    <div className="flex h-screen flex-col">
      <div className={`${isDesktop ? "ml-64" : ""}  flex-grow`}>
        <Header />
        {/* <div className="h-16 w-full items-center justify-center border border-x-0 border-b-0 border-neutral-700 pl-4 pt-1">
          <HeaderChat />
        </div> */}
        <div className="mx-4 mt-12 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64">
          <div className="w-full ">
            <div
              className="flex h-full w-full justify-center py-10"
              style={{ height: "calc(100vh - 18rem)" }}
            >
              <MessagesChat messages={sentMessages} username={""} />
            </div>
          </div>
          {/* <div>
            <button className="">CALL THE ORACLE</button>
          </div> */}
          <div className="flex h-28 items-center justify-center py-10">
            <InputChat onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
