import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import bg from "../../assets/images/auth-bg.png";
import RootLoading from "../../Components/RootLoading";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return isLoading ? (
    <RootLoading />
  ) : (
    <div
      style={{ backgroundImage: `url(${bg})`, repeat: "repeat" }}
      className="bg-playground h-screen w-full flex justify-center items-center"
    >
      <Outlet />
    </div>
  );
};

export default Auth;
