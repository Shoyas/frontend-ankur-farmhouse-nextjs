"use client";

import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const CreateCategoryPage = () => {
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
            label: `create-category`,
            link: `/${role}/create-category`,
          },
        ]}
      />
      <h1>Create Category Page</h1>
    </div>
  );
};

export default CreateCategoryPage;