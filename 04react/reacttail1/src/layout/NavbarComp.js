import React from "react";

function NavbarComp() {
  return (
    <div className="bg-sb-500 py-3">
      <nav className="container mx-auto flex justify-between px-4 md:px-0">
        <h1>
          <a
            href="#"
            className="block h-full text-3xl flex justify-center items-center"
          >
            Nike
          </a>
        </h1>

        <div className="hidden md:block">
          <ul className="flex">
            <li className="px-4 block py-2 text-gray-100 hover:text-red-600 hover:bg-gray-100">
              <a href="#">New</a>
            </li>
            <li className="px-4 block py-2 text-gray-100">
              <a href="#">Men</a>
            </li>
            <li className="px-4 block py-2 text-gray-100">
              <a href="#">Women</a>
            </li>
            <li className="px-4 block py-2 text-gray-100">
              <a href="#">Kids</a>
            </li>
            <li className="px-4 block py-2 text-gray-100">
              <a href="#">Sale</a>
            </li>
          </ul>
        </div>
        <div className="block md:hidden flex justify-center items-center">
          testd
        </div>
      </nav>
    </div>
  );
}

export default NavbarComp;
