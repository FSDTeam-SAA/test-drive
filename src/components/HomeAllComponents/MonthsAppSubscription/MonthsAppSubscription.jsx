import Image from "next/image";
import Link from "next/link";
import React from "react";

const MonthsAppSubscription = () => {
  return (
    <div>
      <div className="container">
        <h2 className="text-2xl 2xl:text-3xl font-bold leading-[32px] text-secondary text-center pt-2 pb-10">
          2 Months App Subscription <br className="block md:hidden"/> for the price of one driving  <br className="block md:hidden"/> lesson!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-1">
            <Image
              src="/assets/save_money.jpg"
              alt="save money"
              width={400}
              height={320}
              className="w-full h-[320px]"
            />
            <h3 className="text-2xl 2xl:text-[27px] font-medium text-secondary leading-[29px] text-center py-8">Save money on lessons!</h3>
            <p className="text-[15px] text-secondary font-thin leading-[20px]">Reduce the amount of driving lessons needed to pass your test. Using our app will help you familiarise yourself with local driving conditions, speed limits, junctions, and test maneuvers. This additional experience can help you pass your test sooner and reduce the time spent with a driving instructor.</p>
            <p className="text-[15px] text-secondary font-thin leading-[20px] pt-3">“Best driving test app out there! Helped me become more confident driving test routes ready for my test.”</p>
            <h3 className="text-[27px] font-medium text-secondary leading-[29px] text-center py-8">100% Prepared to pass!</h3>
            <p className="text-[15px] text-secondary font-thin leading-[20px]">Download our Driving Test Routes app today! Practice test routes with our easy to use turn-by-turn navigation app</p>
            <p className="text-[15px] text-secondary font-thin leading-[20px] py-3">Practicing your driving test can help reduce nerves and <strong className="font-bold">boost your confidence.</strong> Driving the test routes before taking your practical test is usually done with your driving instructor during lessons. With our test routes, you can practice when it's convenient and at your own pace.</p>
            <p className="text-[15px] text-secondary font-thin leading-[20px]">We aim to supply quality test routes to learner car drivers, LGV, motorcycles, and <strong className="font-bold">driving instructors</strong> with the tools to practice driving skills. Our goal is to help you pass you're driving test at the same time saving you money on lessons and multiple exams.</p>
          </div>
          <div className="md:col-span-1">
          <Image
              src="/assets/pass_route.jpg"
              alt="save money"
              width={400}
              height={320}
              className="w-full h-[320px]"
            />
            <h3 className="text-2xl 2xl:text-[27px] font-medium text-secondary leading-[29px] text-center py-8">Pass with Route-Led!</h3>
            <p className="text-[15px] text-secondary font-thin leading-[20px] pb-5">Route-Led supplies some of the most up-to-date <strong className="font-bold">Driving Test Routes in the UK.</strong> We also supply many other websites making us the UK's Number 1 Provider of Driving Test Routes. We aim to supply quality routes to learner car drivers, LGV, motorcycle, and driving instructors with the tools to practice driving skills. Our goal is to help you pass you're driving test at the same time saving you money on lessons and multiple exams.</p>
            <Image
              src="/assets/google_map.png"
              alt="save money"
              width={400}
              height={400}
              className="w-full h-[400px]"
            />
          </div>
        </div>

        <p className="text-base text-secondary font-thin leading-[20px] text-center py-2 md:py-6">For more information about our driving test routes app check out the website <Link className="text-primary underline cursor-pointer" href='/'>www.drivingtestroutesapp.co.uk</Link></p>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5 md:gap-7 2xl:gap-10 py-2 md:py-5">
            <button className="text-base font-medium text-white leading-[26px] bg-primary py-3 px-5 rounded-md">Find Driving Test Routes</button>
            <button className="text-base font-medium text-white leading-[26px] bg-primary py-3 px-5 rounded-md">Try our Test Routes App!</button>
        </div>
      </div>
    </div>
  );
};

export default MonthsAppSubscription;
