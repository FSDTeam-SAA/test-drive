import Image from 'next/image';
import React from 'react';
import { IoLogoInstagram } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className='bg-primary py-2'>
            <div className='container flex items-center justify-between'>
                {/* logo  */}
                <div className=''>
                    <Image src="/assets/nav_logo.png" alt="navlogo" width={150} height={120}/>
                </div>
                {/* menu  */}
                <div className='flex items-center gap-8'>
                <ul className='flex items-center gap-8'>
                    <li className='text-[17px] 2xl:text-lg font-normal cursor-pointer text-white leading-[21px]'>Driving Test Routes</li>
                    <li className='text-[17px] 2xl:text-lg font-normal cursor-pointer text-white leading-[21px]'>How it Works</li>
                    <li className='text-[17px] 2xl:text-lg font-normal cursor-pointer text-white leading-[21px]'>Resources</li>
                    <li className='text-[17px] 2xl:text-lg font-normal cursor-pointer text-white leading-[21px]'>Support</li>
                </ul>
                <span><IoLogoInstagram className='text-white w-7 h-7'/></span>
                <button className='bg-[#fae13d] text-primary py-3 px-5 rounded-lg text-base font-bold leading-normal'>Reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;