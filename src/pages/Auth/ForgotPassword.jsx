import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { RxArrowLeft } from "react-icons/rx";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    // console.log("Success:", values);
    navigate("/auth/verify-email");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className=" w-[451px] bg-playground py-[64px] px-[44px] rounded-2xl space-y-[24px]">
      <div className="flex justify-center items-center gap-1">
        <button onClick={() => navigate("/auth/sign-in")}>
          <RxArrowLeft size={22} />
        </button>
        <h5 className="text-2xl font-medium">Forgot Password</h5>
      </div>
      <p className="text-center text-[#464343]">
        Please enter your email address to reset your password.
      </p>
      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="w-full space-y-[24px]"
      >
        <Form.Item
          className={"text-start"}
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your assword!",
            },
          ]}
        >
          <Input
            // onChange={handleChange}
            placeholder="Email"
            name="email"
            style={{
              border: "1px solid #0445e5",
              height: "56px",
              background: "#E9F4F3",
              outline: "none",
              color: "#646262",
              padding: "16px 12px",
              placeholder: "black",
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button
            style={{
              backgroundColor: "#0445e5",
              size: "18px",
              height: "56px",
              color: "#ffff",
            }}
            htmlType="submit"
            className="w-full h-[56px] px-2 font-medium rounded-lg mt-[10px]"
          >
            Send OTP
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPassword;
