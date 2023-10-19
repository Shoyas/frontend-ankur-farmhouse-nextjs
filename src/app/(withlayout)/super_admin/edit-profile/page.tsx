"use client";

import AFBreadCrumb from "@/components/ui/AFBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const EditProfilePage = () => {
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
            label: `edit-profile`,
            link: `/${role}/edit-profile`,
          },
        ]}
      />
      <h1>Edit Profile Page</h1>
    </div>
  );
};

export default EditProfilePage;
