"use client";

import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const UpcomingServiceListPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <AFBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `upcoming-service-list`,
            link: `/${role}/upcoming-service-list`,
          },
        ]}
      />
      <h1>Upcoming Service List Page</h1>
    </div>
  );
};

export default UpcomingServiceListPage;
