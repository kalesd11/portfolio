import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setshowUserMenu] = useState(true);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-transparent nav">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 bg-blue-500 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white nav"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => toggleMobileMenu()}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-between sm:items-stretch">
            <div className="flex flex-shrink-0 items-center nav px-2 py-1 rounded-md">
            <button className="font-bold text-2xl text-blue-600">Suresh D. Kale</button>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="bg-blue-500 text-white rounded-md px-3 py-2 text-sm font-medium home"
                  aria-current="page"
                >
                  Dashboard
                </Link>
                <Link
                  to="/skills"
                  className="text-gray-500 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium home"
                >
                  Skills
                </Link>
                <Link
                  to="/projects"
                  className="text-gray-500 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium home"
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-500 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium home"
                >
                  Connect Me
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> 
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  // onClickCapture={()=>setshowUserMenu(true)}
                  onClick={() => setshowUserMenu(!showUserMenu)}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
                hidden={showUserMenu}
              >
                <a
                  href="/"
                  className="block nav px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="/"
                  className="block nav px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <a
                  href="/"
                  className="block nav px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div
        className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="/"
            className="bg-blue-500 nav text-white block rounded-md px-3 py-2 text-base font-semibold"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="/skills"
            className="text-gray-600 nav hover:bg-blue-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Skills
          </a>
          <a
            href="/projects"
            className="text-gray-600 nav hover:bg-blue-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="text-gray-600 nav hover:bg-blue-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Connect Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
