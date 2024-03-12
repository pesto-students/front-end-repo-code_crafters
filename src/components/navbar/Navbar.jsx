import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Menu, Search, MapPin, ChevronDown, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <Image width={50} height={50} src="https://flowbite.com/docs/images/logo.svg" className="w-8 h-8" alt="Flowbite Logo"/> */}
            <span className="self-center text-2xl font-bold whitespace-nowrap text-primary">
              EVENTO
            </span>
          </Link>
          <button className="md:ml-10 flex items-center gap-1 hover:opacity-80">
            <MapPin className="w-5 text-primary" />
            <span>Chandmari, Guwahati...</span>
            <ChevronDown className="w-5" />
          </button>
        </div>

        <button className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
          <span className="sr-only">Open main menu</span>
          <Menu className="w-6 h-6" />
        </button>
        <div
          className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent md:items-center">
            <li>
              <button className="flex items-center justify-between w-full py-2 px-3 rounded hover:opacity-80 md:p-0 ">
                <Search className="w-4 mr-1" />
                <span> Search</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="relative inline-flex items-center p-1 text-sm font-medium text-center outline-none "
              >
                <Bell className="w-5" />
                <span className="sr-only">Notifications</span>
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1.5 -end-1.5">
                  6
                </div>
              </button>
            </li>
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-primary hover:opacity-80 rounded md:p-0 "
                aria-current="page"
              >
                Manage Event
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open user menu</span>
                <Image
                  width={50}
                  height={50}
                  className="w-8 h-8 rounded-full"
                  src="/img/profile-picture-3.jpg"
                  alt="user photo"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
