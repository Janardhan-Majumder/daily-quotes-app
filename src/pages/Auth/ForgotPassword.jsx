import { Button, Checkbox, Input } from "antd";
import Form from "antd/es/form/Form";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoImg from "../../assets/images/logo.png";
import { RxLockClosed } from "react-icons/rx";
import { FiMail } from "react-icons/fi";

const ForgotPassword = () => {
  const [t] = useTranslation("global");
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log(values);
  };
  // const mailMessage =
  return (
    <div className="bg-white rounded-[16px] max-w-xl w-full relative">
      <div className="absolute -top-16 w-full flex justify-center">
        <div className="rounded-full bg-white w-36 h-36 p-9 border shadow-sm">
          <img className="" src={logoImg} alt="logo" />
        </div>
      </div>
      <div className="w-full px-14 pb-8 pt-[100px]">
        <div className="pb-6 text-center space-y-3">
          <h1 className="text-3xl font-semibold ">{t("forgot.heading")}</h1>
          <p className="text-light-gray">{t("forgot.des")}</p>
        </div>
        <Form
          name="normal_login"
          layout="vertical"
          requiredMark={false}
          initialValues={{}}
          onFinish={onFinish}
          className="space-y-[24px]"
        >
          <Form.Item
            label={<span className="font-medium">{t("login.mail.title")}</span>}
            name="email"
            // name={['user', 'emial']}
            rules={[
              {
                required: true,
                type: "email",
                message: t("login.mail.message"),
              },
            ]}
          >
            <Input
              prefix={
                <div className="border-r pr-1 border-gray-200">
                  <FiMail size={18} />
                </div>
              }
              size="large"
              placeholder={t("login.mail.placeholder")}
            />
          </Form.Item>
          <Form.Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="w-full mt-2"
            >
              {t("forgot.btn")}
            </Button>
          </Form.Item>
          <div className="flex justify-center items-center pt-4">
            <Button
              onClick={() => navigate("/auth")}
              type="link"
              htmlType="button"
              className="text-base font-medium hover:text text-primary pb-5"
            >
              {t("forgot.back")}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
