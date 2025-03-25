"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-primary py-2 sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        {/* logo  */}
        <div className="text-4xl font-bold text-white">
          <Link href="/">Test Drive</Link>
        </div>
        {/* menu  */}
        <div className="hidden md:block">
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
            <ul className="flex items-center gap-4 md:gap-6 lg:gap-8">
              <li className="text-[15px] lg:text-[17px] 2xl:text-lg font-normal cursor-pointer text-white leading-[21px]">
                Home
              </li>
              <li className="text-[15px] lg:text-[17px] 2xl:text-lg font-normal cursor-pointer text-white leading-[21px]">
                Driving Test Routes
              </li>
              <li className="text-[15px] lg:text-[17px] 2xl:text-lg font-normal cursor-pointer text-white leading-[21px]">
                How it Works
              </li>
              <li className="text-[15px] lg:text-[17px] 2xl:text-lg font-normal cursor-pointer text-white leading-[21px]">
                Resources
              </li>
              <li className="text-[15px] lg:text-[17px] 2xl:text-lg font-normal cursor-pointer text-white leading-[21px]">
                Support
              </li>
            </ul>
            <button className="bg-[#315c87] text-white py-3 px-5 rounded-lg text-base font-bold leading-normal">
              Reviews
            </button>
          </div>
        </div>

        {/* small device  */}
        <div className="block md:hidden">
          {isOpen ? (
            <RxCross2
              className="w-7 h-7 text-white cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <FaBars
              className="w-7 h-7 text-white cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>

      {/* menu part  */}
      <div
        className={`${
          isOpen ? "w-[70%] left-0" : "w-full -left-[100%]"
        } h-[50%] fixed top-0 transition-all duration-500 ease-in-out bg-primary  `}
      >
        {isOpen && (
          <div>
            {/* logo  */}
            <div className="w-full flex items-center justify-center pt-5">
              <div className="text-4xl font-bold text-white">
                <Link href="/">Test Drive</Link>
              </div>
            </div>
            <ul className="flex flex-col items-center gap-8 py-7">
              <li className="text-[15px] lg:text-[17px] 2xl:text-lg font-normal cursor-pointer text-white leading-[21px]">
                Driving Test Routes
              </li>
              <li className="text-[15px] lg:text-[17px] 2xl:text-lg font-normal cursor-pointer text-white leading-[21px]">
                How it Works
              </li>
              <li className="text-[15px] lg:text-[17px] 2xl:text-lg font-normal cursor-pointer text-white leading-[21px]">
                Resources
              </li>
              <li className="text-[15px] lg:text-[17px] 2xl:text-lg font-normal cursor-pointer text-white leading-[21px]">
                Support
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
