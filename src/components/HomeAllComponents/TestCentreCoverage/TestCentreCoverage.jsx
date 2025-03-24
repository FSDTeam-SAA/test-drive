import React from "react";

const TestCentreCoverage = () => {
  return (
    <div className="pt-[100px]">
      <div className="container">
        <h2 className="text-3xl font-bold leading-[32px] text-secondary text-center">
          <strong>Complete</strong> UK Test Centre Coverage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          <div className="md:col-span-2">
            <p className="text-[17px] font-bold leading-[21px] text-secondary">
              As the UK's number 1 provider of driving test routes it comes as
              no surprise that we cover all UK driving test centres.
            </p>
            <p className="text-[17px] font-thin leading-[21px] text-secondary py-4">
              Our app features the very latest practical and mock test routes
              from all test centres. So no matter where you're learning to drive
              you can follow the exact routes used on test day.
            </p>
            <p className="text-[17px] font-thin leading-[21px] text-secondary">
              All our routes are updated live using a combination of live GPS
              data and direct feedback from DVSA driving instructors.
            </p>
            <p className="text-[17px] font-bold leading-[21px] text-secondary pt-4">
              We are the only provider to offer live updates of all routes!
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-[27px] font-medium leading-[29px] text-secondary pb-8">Most Popular</h3>
            <ul className="list-disc pl-5">
                <li className="text-[17px] font-thin leading-[21px] text-primary underline">Goodmayes Test Routes</li>
                <li className="text-[17px] font-thin leading-[21px] text-primary underline py-2">Pinner Test Routes</li>
                <li className="text-[17px] font-thin leading-[21px] text-primary underline">Morden Test Routes</li>
                <li className="text-[17px] font-thin leading-[21px] text-primary underline py-2">Chingford Test Routes</li>
                <li className="text-[17px] font-thin leading-[21px] text-primary underline">Isleworth Test Routes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCentreCoverage;
