"use client";

import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const ReviewListPage = () => {
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
            label: `review-list`,
            link: `/${role}/review-list`,
          },
        ]}
      />
      <h1>Review List Page</h1>
    </div>
  );
};

export default ReviewListPage;
