"use client";

import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const BlogListPage = () => {
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
            label: `blog-list`,
            link: `/${role}/blog-list`,
          },
        ]}
      />
      <h1>Blog List Page</h1>
    </div>
  );
};

export default BlogListPage;
