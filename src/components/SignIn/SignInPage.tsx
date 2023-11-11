"use client";

import { useUserSigninMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import signinImage from "../../assets/Login-amico.svg";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";

type FormValues = {
  email: string;
  password: string;
};

const SignInPage = () => {
  const [userSignin] = useUserSigninMutation();
  const router = useRouter();
  // console.log(isSignIn());

  const onSubmitLogin: SubmitHandler<FormValues> = async (data: any) => {
    try {
      console.log(data);
      const res = await userSignin({ ...data }).unwrap();
      console.log(res);
      if (res?.token) {
        router.push("/profile");
        message.success("User signed in successfully");
      }
      storeUserInfo({ token: res?.token });
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={signinImage} width={500} alt="Signin Image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1 style={{ margin: "15px 0px" }}>First login your account</h1>
        <div>
          <Form submitHandler={onSubmitLogin}>
            <div>
              <FormInput name="email" type="email" size="large" label="Email" />
            </div>
            <div style={{ margin: "15px 0px" }}>
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
              />
            </div>
            <Button style={{ backgroundColor: "#88B51A" }} htmlType="submit">
              Signin
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default SignInPage;
