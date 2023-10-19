"use client";

import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const CategoryListPage = () => {
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
            label: `category-list`,
            link: `/${role}/category-list`,
          },
        ]}
      />
      <h1>Category List Page</h1>
    </div>
  );
};

export default CategoryListPage;
