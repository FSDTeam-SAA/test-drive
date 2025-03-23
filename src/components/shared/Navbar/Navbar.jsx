import Image from "next/image";
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-primary py-2 ">
      <div className="container flex items-center justify-between">
        {/* logo  */}
        <div className="">
          <Link href='/'>
          <Image
            src="/assets/nav_logo.png"
            alt="navlogo"
            width={150}
            height={120}
          />
          </Link>
        </div>
        {/* menu  */}
        <div className="hidden md:block">
          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8">
              <li className="text-[17px] 2xl:text-lg font-normal cursor-pointer text-white leading-[21px]">
                Driving Test Routes
              </li>
              <li className="text-[17px] 2xl:text-lg font-normal cursor-pointer text-white leading-[21px]">
                How it Works
              </li>
              <li className="text-[17px] 2xl:text-lg font-normal cursor-pointer text-white leading-[21px]">
                Resources
              </li>
              <li className="text-[17px] 2xl:text-lg font-normal cursor-pointer text-white leading-[21px]">
                Support
              </li>
            </ul>
            <span>
              <IoLogoInstagram className="text-white w-7 h-7" />
            </span>
            <button className="bg-[#fae13d] text-primary py-3 px-5 rounded-lg text-base font-bold leading-normal">
              Reviews
            </button>
          </div>
        </div>

        {/* small device  */}
        <div className="block md:hidden">
          <FaBars className="w-7 h-7 text-white cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
