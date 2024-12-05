import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ResponsiveSidebar from "./ResponsiveSidebar";
import { routeLinkGenerators } from "../../utils/routeLinkGenerators";
import { dashboardItems } from "../../constants/router.constants";
import RootLoading from "../../Components/RootLoading";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <div className="flex relative">
      <ResponsiveSidebar menus={routeLinkGenerators(dashboardItems)} />
      <div className="flex-1 pl-[60px] lg:pl-[327px]">
        <div className="sticky top-0 w-full">
          <Header />
        </div>
        {/* flex-1 pl-[60px] lg:pl-[326px] */}
        <div className="p-[10px] lg:p-[24px] bg-light-ground min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
