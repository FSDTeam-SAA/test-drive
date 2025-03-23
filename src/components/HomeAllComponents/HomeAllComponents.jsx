import React from "react";
import Banner from "./Banner/Banner";
import DrivingTestRoutes from "./DrivingTestRoutes/DrivingTestRoutes";
import DrivingTestReview from "./DrivingTestReview/DrivingTestReview";
import MonthsAppSubscription from "./MonthsAppSubscription/MonthsAppSubscription";

const HomeAllComponents = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>

      <section>
        <DrivingTestReview />
      </section>

      <section>
        <MonthsAppSubscription />
      </section>

      <section>
        <DrivingTestRoutes/>
      </section>
    </div>
  );
};

export default HomeAllComponents;
