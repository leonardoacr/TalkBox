import Connectivity from "@/components/Connectivity";
import LoginForm from "@/components/index/LoginForm";
import { Moon, Sun } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

import io from "socket.io-client";
import { RootState } from "@/store/store";

export default function Home() {
  const [connectivityStatus, setConnectivityStatus] =
    useState<string>("DISCONNECTED");

  const [data, setData] = useState<number>(10);
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  const router = useRouter();

  const handleLogin = () => {
    router.push("/chat");
  };

  const toggleMode = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    // const socket = io("http://localhost:8000");
    // socket.on("connect", () => {
    //   console.log("Socket.IO connected");
    //   setConnectivityStatus("STABLE");
    // });
    // socket.on("randomData", (data: any) => {
    //   const randomNumber = parseInt(data.randomNumber);
    //   setData(randomNumber);
    // });
    // return () => {
    //   socket.close();
    // };
  }, []);

  return (
    <div className={`flex `}>
      <div className="flex w-screen h-screen justify-center items-center">
        <div className="rounded border border-slate-600 p-10 shadow-lg shadow-purple-900 relative lg:w-1/4 w-11/12">
          <button className="absolute top-4 right-4" onClick={toggleMode}>
            {mode === "dark" ? <Moon /> : <Sun />}
          </button>
          <h1 className="text-center lg:text-6xl text-4xl mb-4">
            <span className="text-sky-600 font-bold">Talk</span>
            <span className="text-purple-800 font-bold">Box</span>
          </h1>
          <LoginForm onSubmit={handleLogin} />
          <div className="mt-4">
            <div className="absolute bottom-0 right-0">
              <div className="flex items-center pr-2">
                <Connectivity status={connectivityStatus} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
