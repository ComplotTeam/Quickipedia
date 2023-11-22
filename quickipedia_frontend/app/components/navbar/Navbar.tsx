"use server"
import React from "react";
import Link from "next/link";


export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-primary border-gray-200">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-primaryB hover:text-gray-400">
            <h1 className="">Quickipedia</h1>
          </span>
        </Link>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Link
            href="/about"
            className="text-sm  text-primaryB hover:underline"
          >
            About us
          </Link>
          <Link
            href="/profile-login"
            className="text-sm  text-primaryB hover:underline"
          >
            Profile
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-around items-center max-w-screen-xl px-4 py-3 mx-auto">
        <button className="flex flex-row justify-center items-center font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
          <Link
            href="/"
            className="text-primaryB hover:underline"
            aria-current="page"
          >
            TRENDING
          </Link>
        </button>
        <button className="flex flex-row justify-center items-center font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
          <Link href="/allArticles" className=" text-primaryB hover:underline">
            FIND ALL
          </Link>
        </button>
      </div>
    </nav>
  );
};
