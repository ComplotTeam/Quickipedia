"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { LoginButton } from "../login-button/LoginButton";
import { LogoutButton } from "../logout-button/LogoutButton";

export const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const { user } = useUser();

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between fixed top-0 w-full text-primaryB  px-7 py-5 z-10 bg-gradient-to-b from-primaryC to-transparent">
      <Link
        href="/"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <span className="self-center text-2xl font-semibold whitespace-nowrap betterhover:hover:text-secondaryB">
          <h1 className="">Quickipedia</h1>
        </span>
      </Link>
      <div className="navbar-end">
        {!user /* login button? */}
        <button
          tabIndex={0}
          className="btn btn-ghost btn-circle"
          onClick={toggleSideMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isSideMenuOpen && (
          <div className="fixed top-0 left-0 h-full w-full text-primary text-2xl bg-primaryB border-l border-gray-200 shadow z-50 flex flex-col">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle self-start m-5"
              onClick={toggleSideMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="menu menu-sm p-2 text-center flex flex-col justify-between h-[25%] mt-14">
              {user && (
                <li>
                  <Link
                    href="/profile"
                    className="hover:underline"
                    onClick={closeSideMenu}
                  >
                    PROFILE
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href="/about"
                  className="hover:underline"
                  onClick={closeSideMenu}
                >
                  ABOUT US
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
