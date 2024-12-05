import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import profileImage from "../../assets/images/dash-profile.png";
import { useTranslation } from "react-i18next";
import { RiNotification2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate();
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div className="w-full flex justify-between items-center gap-x-10 lg:gap-x-48 bg-white border-b pl-4 pr-6 py-3 shadow-sm">
      <p className="text-[20px] font-semibold">{t("greeting.morning")}, John</p>

      <div className="flex items-center gap-x-[41px]">
        <Input
          prefix={
            <div className="text-light-gray border-r pr-1">
              <IoSearchOutline size={20} />
            </div>
          }
          placeholder={t("search-placeholder")}
          // onSearch={onSearch}
          style={{
            height: 40,
            width: 250,
            border: "none",
            background: "#f3f4f6",
          }}
          suffix={ <div className="flex items-center bg-gray-50 rounded drop-shadow-sm px-1.5 py-[2px]">
            <MdOutlineKeyboardCommandKey  size={20} /> K
          </div>}
        />
        <button
          onClick={(e) => navigate("/notifications")}
          className={`text-black hover:text-[#1f8d2e] rounded-full p-3 shadow-sm transition-all outline-none bg-gray-100 drop-shadow-sm relative`}
        >
          <RiNotification2Line size={22} />
          <GoDotFill size={14} className="absolute top-2 right-2 text-red-500" />
        </button>
        <div
          onClick={(e) => navigate("/settings/personal-information")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div>
            <img
              src={profileImage}
              alt=""
              className="rounded-full h-[48px] w-[48px]"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <h5 className="text-[16px] font-medium">{"John D."}</h5>
            <FaAngleDown size={13} className="pt-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
