"use client";

import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const CreateServicePage = () => {
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
            label: `create-service`,
            link: `/${role}/create-service`,
          },
        ]}
      />
      <h1>Create Service Page</h1>
    </div>
  );
};

export default CreateServicePage;
