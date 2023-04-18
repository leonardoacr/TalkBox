import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Menu from "./Menu/Menu"
import { Moon, Sun } from "lucide-react"
import { toggleTheme } from "@/store/themeSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store/store"

const Header = () => {
  const router = useRouter()

  const routes = [
    { name: "Login", path: "/" },
    { name: "Menu", path: "/chat" },
    { name: "About", path: "/about" },
  ]

  const mode = useSelector((state: RootState) => state.theme.mode)
  const dispatch = useDispatch()

  const toggleMode = () => {
    dispatch(toggleTheme())
  }

  return (
    <>
      <div className="bg-background-header z-50 h-16 w-full">
        <Menu />
        <div className="flex h-full items-center justify-center">
          <button>
            <Link href="/">
              <div className="flex items-center">
                <span className="ml-2 text-4xl font-bold">
                  <span className="font-bold text-sky-600">Talk</span>
                  <span className="font-bold text-purple-800">Box</span>
                </span>
              </div>
            </Link>
          </button>
          <button className="absolute right-4 top-4" onClick={toggleMode}>
            {mode === "dark" ? <Moon className="" /> : <Sun className="" />}
          </button>
        </div>
        {/* <hr className="mt-16 border-t border-gray-600" /> */}
        <div
          className="bg-background-header mt-1 flex h-10 items-center
       justify-center text-gray-400"
        >
          {routes.map((route) => (
            <Link key={route.path} href={route.path}>
              <span
                className={`mx-2 cursor-pointer font-bold ${
                  router.pathname === route.path
                    ? "border-b border-purple-800 text-purple-700"
                    : ""
                }`}
              >
                {route.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header
