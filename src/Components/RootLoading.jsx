import React from "react";
import loaderImg from "../assets/images/loading.png";
import logoImg from "../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { Button } from "antd";

const RootLoading = () => {
  const [t, i18n] = useTranslation("global");
  //   <div className="space-y-2 z-50">
  //         <Button
  //           onClick={() => {
  //             i18n.changeLanguage("en");
  //           }}
  //         >
  //           English
  //         </Button>
  //         <Button
  //           onClick={() => {
  //             i18n.changeLanguage("fr");
  //           }}
  //         >
  //           {" "}
  //           Français
  //         </Button>
  //       </div>
  return (
    <div className="bg-playground h-screen w-full flex justify-center items-center relative">
      <div className="animate-spin transition-all h-64 w-64">
        <img src={loaderImg} alt="loader" />
      </div>
      <div className="absolute inset-0 h-full w-full flex justify-center items-center">
        <img className="w-36 h-40" src={logoImg} alt="logo" />
      </div>
      <p className="text-primary absolute bottom-[4%] text-lg font-medium">
        {t("root_loader.text")}
      </p>
    </div>
  );
};

export default RootLoading;
