import { Button, Form, Input, Space } from "antd";
import React from "react";
import { BiMinus, BiMinusCircle } from "react-icons/bi";
import { FaChevronLeft } from "react-icons/fa6";
import { TiPlusOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import PageHeading from "../../../Components/PageHeading";

const EditSubscription = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="space-y-[24px]">
      <PageHeading title={"Edit Subcriptions"} backPath={"/subscriptions"}/>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          name: "Standard",
          features: [{ first: "" }],
        }}
        labelCol={{
          span: 24, // Adjust this value to change label width
        }}
        autoComplete="off"
        requiredMark={false}
        className="min-h-[70vh] flex flex-col justify-between px-[34px] py-[14px]"
      >
        <div>
          <div className="grid grid-cols-2 gap-x-6">
            <Form.Item
              className=""
              label={
                <span className="text-[18px] text-primary">Package Name</span>
              }
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input package name!",
                },
              ]}
            >
              <Input
                placeholder="Package name"
                style={{
                  height: "56px",
                  background: "#FFFFFF",
                }}
                className="outline-none rounded-lg px-[16px] py-[12px] text-[#181414] mt-[8px] text-lg drop-shadow-md"
              />
            </Form.Item>
            <Form.Item
              label={
                <span className="text-[18px] text-primary">Package Amount</span>
              }
              name={"amount"}
              rules={[
                {
                  required: true,
                  message: "Please input package amount!",
                },
              ]}
            >
              <Input
                placeholder="Package amount"
                style={{
                  height: "56px",
                  background: "#FFFFFF",
                }}
                className="outline-none rounded-lg px-[16px] py-[12px] text-[#181414] mt-[8px] text-lg drop-shadow-md"
              />
            </Form.Item>
            <Form.Item
              label={
                <span className="text-[18px] text-primary">
                  Package Expiration
                </span>
              }
              name={"expiration"}
              rules={[
                {
                  required: true,
                  message: "Please input package expiration!",
                },
              ]}
            >
              <Input
                placeholder="Package expiration"
                style={{
                  height: "56px",
                  background: "#FFFFFF",
                }}
                className="outline-none rounded-lg px-[16px] py-[12px] text-[#181414] mt-[8px] text-lg drop-shadow-md"
              />
            </Form.Item>
          </div>
          <div className="col-span-2 border-t border-[#1f8d848e] mt-3 py-[20px]">
            <p className="text-[18px] text-primary mb-[18px]">
              Package Features
            </p>
            <Form.List name="features">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <div
                      key={key}
                      className="flex items-center gap-4 pb-[20px]"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "first"]}
                        className="flex-1 my-0"
                      >
                        <Input
                          placeholder="Enter new feature"
                          style={{
                            height: "56px",
                            background: "#FFFFFF",
                          }}
                          className="outline-none rounded-lg px-[16px] py-[12px] text-[#181414] mt-[8px] text-lg drop-shadow-md"
                        />
                      </Form.Item>
                      <button className="border-2 border-[#ee1d24ab] rounded-full p-0.5 text-[#EE1D23]">
                        <BiMinus size={25} onClick={() => remove(name)} />
                      </button>
                    </div>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      icon={<TiPlusOutline />}
                      size="large"
                    >
                      Add feature field
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </div>
        </div>
        <div className="flex gap-8 pt-4">
          <Button
            style={{
              size: "18px",
              height: "56px",
            }}
            size="large"
            htmlType="button"
            className="w-full h-[56px] px-2 font-medium rounded-lg "
          >
            Delete
          </Button>
          <Button
            style={{
              backgroundColor: "#0445E5",
              size: "18px",
              height: "56px",
              color: "#ffff",
            }}
            size="large"
            htmlType="submit"
            className="w-full h-[56px] px-2 font-medium rounded-lg "
          >
            Upadate
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditSubscription;
