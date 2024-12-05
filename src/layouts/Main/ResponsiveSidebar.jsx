import { createElement, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import logoImg from "../../assets/images/logo.png";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLock } from "react-icons/fi";
import { RiLogoutCircleRLine } from "react-icons/ri";

const ResponsiveSidebar = ({ menus }) => {
  const [t] = useTranslation("global");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [toggle, setToggle] = useState({});
  const location = useLocation();
  const hangleSidebar = () => {
    setOpenDrawer(!openDrawer);
    setToggle({});
  };

  // return <h1>fkdsl;fksl;dkf;lksdl;fksd;lkfl;ds</h1>
  return (
    <div className="">
      {/* main content overlay */}
      {openDrawer && (
        <div
          onClick={hangleSidebar}
          className="absolute inset-0 z-20 w-full min-h-screen bg-[#13131a8a]"
        />
      )}
      <div
        className={`bg-primary h-screen flex flex-col justify-between fixed left-0 top-0 z-30 duration-300 lg:px-[24px] ${
          openDrawer ? "w-[280px]" : "w-[60px]"
        } lg:w-[326px]`}
      >
        <div>
          <div className="flex justify-end">
            <button
              className="lg:hidden cursor-pointer active:bg-gray-600 rounded outline-none text-white"
              onClick={hangleSidebar}
            >
              <HiMenuAlt3 size={27} />
            </button>
          </div>
          <div className="w-full flex justify-start items-center gap-1 text-white pt-6 pb-4 ">
            <div className="w-14 h-20">
              <img className="" src={logoImg} alt="logo" />
            </div>
            <p className="text-[38px] font-bold">{t("sidebar.heading")}</p>
          </div>
          <div className="w-full h-[1.5px] bg-gradient-to-r from-primary via-white to-primary" />

          <p className="text-white text-xl uppercase px-5 pt-3.5">
            {t("sidebar.subHeading")}
          </p>
          <div className="flex flex-col gap-y-2 mt-3 relative">
            {menus.map(({ childrens, name, icon, path }, index) => (
              <div
                key={index}
                className={`lg:text-lg font-medium rounded select-none relative lg:overflow-hidden`}
              >
                <div
                  onClick={() => {
                    setToggle({
                      [name]: toggle[name] === name ? "" : name,
                      pathName: path,
                    });
                  }}
                >
                  <NavLink to={childrens ? childrens[0].subPath : path}>
                    <div
                      className={`flex items-center gap-3 py-3 lg:py-4 px-5 hover:bg-white hover:text-primary transition-all group ${
                        location.pathname.split("/")[1] === path?.slice(1)
                          ? " bg-white text-primary"
                          : " text-white"
                      }`}
                    >
                      <div>{createElement(icon, { size: "20" })}</div>
                      <h2
                        // style={{
                        //   transitionDelay: `${index + 1}00ms`,
                        // }}
                        className={`whitespace-pre transition-all ${
                          !openDrawer
                            ? "translate-x-28 lg:translate-x-0 overflow-hidden"
                            : "translate-x-0 overflow-hidden"
                        } `}
                      >
                        {t(`sidebar.items.${index}`)}
                      </h2>
                      {!openDrawer && (
                        <h2
                          className={`
                              lg:hidden absolute left-48 bg-gray-50 font-sans whitespace-pre z-30
                           text-gray-900 rounded-md drop-shadow-md px-0 py-0 w-0 overflow-hidden group-hover:px-2 
                            group-hover:py-1 group-hover:left-16 group-hover:w-fit group-hover:duration-500`}
                        >
                          {t(`sidebar.items.${index}`)}
                        </h2>
                      )}
                    </div>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`lg:text-lg font-medium select-none relative lg:overflow-hidden space-y-2 py-3`}
        >
          <div
            onClick={() => {
              setToggle({
                ["setting"]: toggle["setting"] === "setting" ? "" : "setting",
                pathName: "settings",
              });
            }}
          >
            <NavLink to={"/settings"}>
              <div
                className={`flex items-center gap-3 py-3 lg:py-4 px-5 hover:bg-white hover:text-primary transition-all group rounded ${
                  location.pathname.split("/")[1] === "settings"
                    ? " bg-white text-primary"
                    : " text-white"
                }`}
              >
                <div>{createElement(IoSettingsOutline, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre transition-all ${
                    !openDrawer
                      ? "translate-x-28 lg:translate-x-0 overflow-hidden"
                      : "translate-x-0 overflow-hidden"
                  } `}
                >
                  {t("sidebar.setting")}
                </h2>
                {!openDrawer && (
                  <h2
                    className={`
                              lg:hidden absolute left-48 bg-gray-50 font-sans whitespace-pre z-30
                           text-gray-900 rounded-md drop-shadow-md px-0 py-0 w-0 overflow-hidden group-hover:px-2 
                            group-hover:py-1 group-hover:left-16 group-hover:w-fit group-hover:duration-500`}
                  >
                    {t("sidebar.setting")}
                  </h2>
                )}
              </div>
            </NavLink>
          </div>
          <div
            onClick={() => {
              setToggle({
                ["passChange"]:
                  toggle["passChange"] === "passChange" ? "" : "passChange",
                pathName: "pass-change",
              });
            }}
          >
            <NavLink to={"/pass-change"}>
              <div
                className={`flex items-center gap-3 py-3 lg:py-4 px-5 hover:bg-white hover:text-primary transition-all group rounded ${
                  location.pathname.split("/")[1] === "pass-change"
                    ? " bg-white text-primary"
                    : " text-white"
                }`}
              >
                <div>{createElement(FiLock, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre transition-all ${
                    !openDrawer
                      ? "translate-x-28 lg:translate-x-0 overflow-hidden"
                      : "translate-x-0 overflow-hidden"
                  } `}
                >
                  {t("sidebar.password")}
                </h2>
                {!openDrawer && (
                  <h2
                    className={`
                              lg:hidden absolute left-48 bg-gray-50 font-sans whitespace-pre z-30
                           text-gray-900 rounded-md drop-shadow-md px-0 py-0 w-0 overflow-hidden group-hover:px-2 
                            group-hover:py-1 group-hover:left-16 group-hover:w-fit group-hover:duration-500`}
                  >
                    {t("sidebar.password")}
                  </h2>
                )}
              </div>
            </NavLink>
          </div>
          <div
            className={`flex items-center gap-3 py-3 lg:py-4 px-5 bg-gray-200 hover:bg-white text-red-500 transition-all group rounded cursor-pointer`}
          >
            <div>{createElement(RiLogoutCircleRLine, { size: "20" })}</div>
            <h2
              className={`whitespace-pre transition-all ${
                !openDrawer
                  ? "translate-x-28 lg:translate-x-0 overflow-hidden"
                  : "translate-x-0 overflow-hidden"
              } `}
            >
              {t("sidebar.logout")}
            </h2>
            {!openDrawer && (
              <h2
                className={`
                              lg:hidden absolute left-48 bg-gray-50 font-sans whitespace-pre z-30
                           text-gray-900 rounded-md drop-shadow-md px-0 py-0 w-0 overflow-hidden group-hover:px-2 
                            group-hover:py-1 group-hover:left-16 group-hover:w-fit group-hover:duration-500`}
              >
                {t("sidebar.logout")}
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
