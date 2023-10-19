"use client";

import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const CreateUpcomingService = () => {
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
            label: `create-upcoming-service`,
            link: `/${role}/create-upcoming-service`,
          },
        ]}
      />
      <h1>Create Upcoming Service Page</h1>
    </div>
  );
};

export default CreateUpcomingService;
