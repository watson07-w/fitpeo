import React from "react";
import logo from "../assests/images/logo.svg";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { CogIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header>
      <nav className="container max-w-full bg-primary flex flex-row fixed top-0 left-0 z-40 h-16">
        <img className="size-12 ml-6 mt-1" src={logo} alt="logo" />
        <label class="relative block pl-10 pt-2.5">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-2"></span>
          <input
            class="placeholder:italic placeholder:text-slate-400 block bg-grey w-40  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:w-64"
            placeholder="Search"
            type="text"
            name="search"
          />
          <svg
            class="absolute left-9 top-2.5 ml-3 mt-2 h-5 w-4 text-search"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </label>
        <EnvelopeIcon className="size-6 ml-auto mr-6 mt-4 text-search" />
        <CogIcon className="size-6 mr-6 mt-4 text-search" />
        <BellIcon className="size-6 mr-6 mt-4 text-search" />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="mt-2 mr-10 h-10 w-10 rounded-full"
        />
      </nav>
    </header>
  );
}
export default Header;
