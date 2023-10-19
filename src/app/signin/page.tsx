import SignInPage from "@/components/SignIn/SignInPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ankur | Sign-in",
  description: "Founder by Ankur Group",
};
const signInPageWithMeta = () => {
  return (
    <>
      <SignInPage />
    </>
  );
};

export default signInPageWithMeta;
