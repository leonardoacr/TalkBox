import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "./Menu";
import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "@/store/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Header = () => {
  const router = useRouter();

  const routes = [
    { name: "Login", path: "/" },
    { name: "Menu", path: "/chat" },
    { name: "About", path: "/about" },
  ];

  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  const toggleMode = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <div className="w-full z-50 h-16 bg-background-header ">
        <div className="flex overflow-hidden h-full items-center justify-center">
          <Menu />
          <button>
            <Link href="/">
              <div className="flex items-center">
                <span className="ml-2 text-4xl font-bold">
                  <span className="text-sky-600 font-bold">Talk</span>
                  <span className="text-purple-800 font-bold">Box</span>
                </span>
              </div>
            </Link>
          </button>
          <button className="absolute top-4 right-4" onClick={toggleMode}>
            {mode === "dark" ? <Moon className="" /> : <Sun className="" />}
          </button>
        </div>
        {/* <hr className="mt-16 border-t border-gray-600" /> */}
        <div
          className="flex h-10 items-center justify-center
       bg-background-header text-gray-400"
        >
          {routes.map((route) => (
            <Link key={route.path} href={route.path}>
              <span
                className={`mx-2 cursor-pointer font-bold ${
                  router.pathname === route.path ? "text-purple-700" : ""
                }`}
              >
                {route.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
