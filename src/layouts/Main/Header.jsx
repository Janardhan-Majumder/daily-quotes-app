import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import profileImage from "../../assets/images/dash-profile.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[88px] flex justify-between items-center gap-x-10 lg:gap-x-48">
      <div className="text-start space-y-0.5 bg-grayground flex-1 py-[16px] px-[32px] rounded-2xl">
        <p className="text-[24px] font-semibold text-primary">
          {"Welcome,RJ"}
        </p>
        <p className="text-lightgreen">{"Have a nice day!"}</p>
      </div>
      <div className="flex gap-x-[41px]">
        <div
          onClick={(e) => navigate("/notifications")}
          className="relative flex items-center "
        >
          <Badge style={{ backgroundColor: "#0445E5" }} count={1}>
            <IoIosNotificationsOutline
              style={{ cursor: "pointer" }}
              className={`text-primary hover:text-[#1f8d2e] bg-grayground w-[48px] h-[48px] rounded-full p-2 shadow-sm transition-all`}
            />
          </Badge>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <img src={profileImage} alt="" className="rounded-full h-[48px] w-[48px]"  />
          </div>
          <div className="space-y-1 text-right">
            <h5 className="text-[16px] font-medium">{"Jacob"}</h5>
            <p className="text-xs text-lightgreen">{"Admin"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
