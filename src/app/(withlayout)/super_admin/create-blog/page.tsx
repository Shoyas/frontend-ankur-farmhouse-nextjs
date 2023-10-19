"use client";

import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const CreateBlogPage = () => {
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
            label: `create-blog`,
            link: `/${role}/create-blog`,
          },
        ]}
      />
      <h1>Create Blog Page</h1>
    </div>
  );
};

export default CreateBlogPage;
