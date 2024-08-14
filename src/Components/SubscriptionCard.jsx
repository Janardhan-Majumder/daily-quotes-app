import React, { useState } from "react";
import { Card, Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";

const SubscriptionCard = ({ data, setModalData }) => {
  const navigate = useNavigate();

  return (
    <div className="">
      <Card
        className="rounded-2xl shadow border-none bg-primary py-[8px]"
        title={null}
        bordered={false}
        headStyle={{ borderBottom: "none", padding: 0 }}
        bodyStyle={{ paddingTop: 0, paddingBottom: 20 }}
      >
        <div className="text-center text-white pt-6 pb-2 space-y-3">
          <p className="font-sans">12 Month</p>
          <p className="text-lg">$ 120/Month</p>
          <p className="text-[14px]">7 days free trial</p>
          <div className="flex gap-4 px-5 pt-4">
            <Button
              onClick={() => navigate(`edit/${"564564656"}`)}
              className="bg-gray-100 hover:bg-gray-200 text-black rounded-2xl w-full border-none py-4"
              type="default"
              size="small"
            >
              Edit
            </Button>
            <Button
              onClick={() => setModalData(data)}
              style={{ background: "black" , border: "1px solid white"}}
              className="text-white rounded-2xl w-full border-none py-4"
              type="default"
              size="small"
            >
              Delete
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SubscriptionCard;
