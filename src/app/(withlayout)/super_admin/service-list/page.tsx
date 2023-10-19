"use client";

import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const ServiceListPage = () => {
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
            label: `service-list`,
            link: `/${role}/service-list`,
          },
        ]}
      />
      <h1>Service List Page</h1>
    </div>
  );
};

export default ServiceListPage;
