import { RootState } from "@/store/store"
import { MenuIcon } from "lucide-react"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { MenuItems } from "./MenuItems"

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useSelector((state: RootState) => state.isDesktop.value)

  const toggleMenu = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <aside>
      {isDesktop ? null : (
        <button
          className="absolute left-0 top-0 z-50 rounded-r-lg p-5 focus:outline-none"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </button>
      )}
      <div
        className={`absolute left-0 top-0 h-screen w-64 transform bg-neutral-800 transition-all duration-300 ${
          isDesktop
            ? isOpen
              ? "-translate-x-full"
              : "translate-x-0 border-r-2 border-neutral-700"
            : isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <MenuItems />
      </div>
    </aside>
  )
}

export default Menu
