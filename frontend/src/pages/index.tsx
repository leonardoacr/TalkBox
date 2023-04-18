import Connectivity from "@/components/Connectivity"
import LoginForm from "@/components/Index/LoginForm"
import { Moon, Sun } from "lucide-react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../store/themeSlice"

import io from "socket.io-client"
import { RootState } from "@/store/store"

export default function Home() {
  const [connectivityStatus, setConnectivityStatus] =
    useState<string>("DISCONNECTED")

  const [data, setData] = useState<number>(10)
  const mode = useSelector((state: RootState) => state.theme.mode)
  const dispatch = useDispatch()

  const router = useRouter()

  const handleLogin = () => {
    router.push("/chat")
  }

  const toggleMode = () => {
    dispatch(toggleTheme())
  }

  useEffect(() => {
    const socket = io("http://localhost:8000")
    socket.on("connect", () => {
      console.log("Socket.IO connected")
      setConnectivityStatus("CONNECTED")
    })
    socket.on("randomData", (data: any) => {
      const randomNumber = parseInt(data.randomNumber)
      setData(randomNumber)
    })
    return () => {
      socket.close()
    }
  }, [])

  return (
    <div className={`flex `}>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="relative w-11/12 rounded border border-slate-600 p-10 shadow-lg shadow-purple-900 lg:w-1/4">
          <button className="absolute right-4 top-4" onClick={toggleMode}>
            {mode === "dark" ? <Moon /> : <Sun />}
          </button>
          <h1 className="mb-4 text-center text-4xl lg:text-6xl">
            <span className="font-bold text-sky-600">Talk</span>
            <span className="font-bold text-purple-800">Box</span>
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
  )
}
