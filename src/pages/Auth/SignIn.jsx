import { Button, Checkbox, Input } from "antd";
import Form from "antd/es/form/Form";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconLock } from "@tabler/icons-react";

const SignIn = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log(values);
  };
  return (
    <div className="bg-playground w-[451px] py-[64px] px-[44px] rounded-[16px]">
      <div className="pb-[30px]">
        <h1 className="text-[24px] text-center font-medium ">Sign In</h1>
      </div>
      <Form
        name="normal_login"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        className="space-y-[24px]"
      >
        <Form.Item
          className="text-start"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your user name!",
            },
          ]}
        >
          <Input
            // onChange={handleChange}
            placeholder="User name"
            style={{
              border: "1px solid #0445E5",
              height: "56px",
              background: "#E6ECFC",
              color: "#646262",
              padding: "16px 12px",
              outline: "none",
            }}
          />
        </Form.Item>
        <Form.Item
          className="text-start pt-2"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            // onChange={handleChange}
            placeholder="Password"
            name="password"
            style={{
              border: "1px solid #0445E5",
              height: "56px",
              background: "#E6ECFC",
              outline: "none",
              color: "#646262",
              padding: "16px 12px",
            }}
          />
        </Form.Item>
        <div className="flex justify-between items-center">
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className="text-base font-medium text-primary">
              Remember me
            </Checkbox>
          </Form.Item>
          <Button
            style={{ color: "#0445e5" }}
            onClick={() => navigate("/auth/forgot-password")}
            type="link"
            className="text-base font-medium hover:text text-primary pb-5"
          >
            Forget password?
          </Button>
        </div>
        <Form.Item>
          <Button
            style={{
              backgroundColor: "#0445E5",
              size: "18px",
              height: "56px",
              color: "#ffff",
            }}
            htmlType="submit"
            className="w-full h-[56px] px-2 font-medium rounded-lg "
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
