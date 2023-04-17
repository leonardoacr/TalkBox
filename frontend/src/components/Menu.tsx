import { MenuIcon } from "lucide-react";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="absolute left-0 top-0 p-5 z-50 rounded-r-lg  focus:outline-none"
        onClick={toggleMenu}
      >
        <MenuIcon />
      </button>
      <div
        className={`fixed left-0 top-0 h-screen w-64 transform bg-zinc-900 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="mt-16 p-4 px-4">
          <li className="mb-2">
            <a className="block px-4 py-2 font-bold text-white hover:bg-gray-800">
              Fake Menu
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-800"
            >
              Home
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-800"
            >
              Dashboard
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-800"
            >
              Profile
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-800"
            >
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
