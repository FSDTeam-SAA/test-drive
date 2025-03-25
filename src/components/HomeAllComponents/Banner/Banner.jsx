import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: "url(/assets/updates/home_banner.jpg)" }}
        className="bg-cover bg-center bg-no-repeat h-[350px] w-full flex flex-col justify-center items-center animate-moveBackground"
      >
        <Image src="/assets/updates/map_icon.png" alt="map logo" width={60} height={60}/>
        <h1 className="text-3xl font-bold text-white leading-normal text-center pt-3">Driving Test Success Starts Here!</h1>
      </div>
    </div>
  );
};

export default Banner;
