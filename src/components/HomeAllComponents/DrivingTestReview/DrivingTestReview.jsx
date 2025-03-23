import Image from "next/image";
import React from "react";

const DrivingTestReview = () => {
  return (
    <div className="py-4 md:py-12">
      <div className="container">
        <h5 className="text-base md:text-lg font-bold text-secondary text-center leading-[21px]">
          Driving Test Routes | Motorcycle Test Routes | LGV Test Routes | ADI
          Test Routes
        </h5>
        {/* large device  */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div className="md:col-span-1 w-full flex items-center gap-6">
              <div className="w-full md:w-3/5">
                <p className="text-base font-thin text-secondary leading-[21px]">
                  “Best driving test app out there! Helped me become more
                  confident ready for my test.”
                </p>
              </div>
              <div className="w-full md:w-2/5">
                <Image
                  src="/assets/app_store.png"
                  alt="app store"
                  width={150}
                  height={40}
                />
                <Image
                  src="/assets/five_star.png"
                  alt="five star"
                  width={150}
                  height={10}
                  className="pt-3"
                />
              </div>
            </div>
            <div className="md:col-span-1 w-full flex items-center gap-6">
              <div className="w-full md:w-3/5">
                <p className="text-base font-thin text-secondary leading-[21px]">
                  “Passed first time! Practicing the routes really helped!”
                </p>
              </div>
              <div className="w-full md:w-2/5">
                <Image
                  src="/assets/google_play.png"
                  alt="app store"
                  width={150}
                  height={40}
                />
                <Image
                  src="/assets/five_star.png"
                  alt="five star"
                  width={150}
                  height={10}
                  className="pt-3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* small device  */}
        <div className="block md:hidden">
          <div className="flex flex-col items-center gap-4 my-6">
            <Image
              src="/assets/app_store.png"
              alt="app store"
              width={150}
              height={40}
            />
            <Image
              src="/assets/google_play.png"
              alt="app store"
              width={150}
              height={40}
            />
          </div>
          <div>
            <div className="pb-6">
              <p className="text-base font-thin text-secondary leading-[21px]">
                “Best driving test app out there! Helped me become more
                confident ready for my test.”
              </p>
              <div className="w-full flex items-center justify-end">
                <Image
                  src="/assets/five_star.png"
                  alt="five star"
                  width={150}
                  height={8}
                  className="pt-3"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="text-base font-thin text-secondary leading-[21px]">
              “Passed first time! Practicing the routes really helped!”
            </p>
            <div className="w-full flex items-center justify-end">
              <Image
                src="/assets/five_star.png"
                alt="five star"
                width={150}
                height={8}
                className="pt-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrivingTestReview;
