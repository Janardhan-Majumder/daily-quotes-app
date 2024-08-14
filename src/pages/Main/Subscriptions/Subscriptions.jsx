import { Button } from "antd";
import React, { useState } from "react";
import SubscriptionCard from "../../../Components/SubscriptionCard";
import DashboardModal from "../../../Components/DashboardModal";
import AddNewButton from "../../../Components/AddNewButton";

const Subscriptions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };
  return (
    <div className="space-y-[24px]">
      <AddNewButton text={"Add New Subscription"} />
      <div className="grid grid-cols-4 xl:grid-cols-5 gap-8">
        <SubscriptionCard data={{ title: "Basic" }} setModalData={showModal} />
        <SubscriptionCard
          data={{ title: "Standard" }}
          setModalData={showModal}
        />
        <SubscriptionCard
          data={{ title: "Premium" }}
          setModalData={showModal}
        />
        <SubscriptionCard data={{ title: "Basic" }} setModalData={showModal} />
        <SubscriptionCard data={{ title: "Basic" }} setModalData={showModal} />
        <SubscriptionCard
          data={{ title: "Standard" }}
          setModalData={showModal}
        />
        <SubscriptionCard
          data={{ title: "Premium" }}
          setModalData={showModal}
        />
        <SubscriptionCard data={{ title: "Basic" }} setModalData={showModal} />
      </div>
      <DashboardModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        closeIcon={false}
      >
        <div className=" px-3 space-y-5">
          <h1 className="text-[24px] font-semibold">Delete Subsription</h1>
          <p>Are you sure you want to delete the subscription package ?</p>
          <div className="flex gap-6 justify-end py-3">
            <Button
              onClick={() => setIsModalOpen(false)}
              style={{
                border: "1px solid #0445E5"
              }}
              className="bg-white text-[#0445E5] rounded-full w-[70px]"
              type="default"
              size="large"
            >
              No
            </Button>
            <Button
              // onClick={() => setIsModalOpen(true)}
              style={{ background: "#0445E5", color: "white" }}
              className="rounded-full w-[70px]"
              type="default"
              size="large"
            >
              Yes
            </Button>
          </div>
        </div>
      </DashboardModal>
    </div>
  );
};

export default Subscriptions;
