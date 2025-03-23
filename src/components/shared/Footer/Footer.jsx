import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary py-4">
      <div>
        <p className="text-[15px] font-normal text-white leaing-[20px] text-center">
          © 2024 Route-Led Group Limited, All rights reserved |
          info@route-led.com
        </p>
        <p className="text-[15px] font-normal text-white leaing-[20px] py-2 text-center">
          <span className="underline cursor-pointer">Terms</span> |{" "}
          <span className="underline cursor-pointer">Privacy</span> |{" "}
          <span className="underline cursor-pointer">Sitemap</span>
        </p>
        <p className="text-[15px] font-normal text-white leaing-[20px] text-center">
          In association with:{" "}
          <Link
            target="_blank"
            rel="nofollow"
            className="underline text-white"
            href="www.drivingtestroutesapp.co.uk"
          >
            www.drivingtestroutesapp.co.uk
          </Link>{" "}
          /{" "}
          <Link
            target="_blank"
            rel="nofollow"
            className="underline text-white"
            href="www.drivingtestpractice.co.uk"
          >
            www.drivingtestpractice.co.uk
          </Link>{" "}
          /{" "}
          <Link
            target="_blank"
            rel="nofollow"
            className="underline text-white"
            href="www.dmvroadtestroutes.com"
          >
            www.dmvroadtestroutes.com
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
