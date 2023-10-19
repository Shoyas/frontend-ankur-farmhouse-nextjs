"use client";
import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const ChangePasswordPage = () => {
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
            label: `change-password`,
            link: `/${role}/change-password`,
          },
        ]}
      />
      <h1>Change password page</h1>
    </div>
  );
};

export default ChangePasswordPage;
