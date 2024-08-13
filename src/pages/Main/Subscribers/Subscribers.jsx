import React, { useState } from "react";
import { Button, ConfigProvider, DatePicker, Input, Table } from "antd";
import { FiAlertCircle } from "react-icons/fi";
import DashboardModal from "../../../Components/DashboardModal";
import { IoSearch } from "react-icons/io5";

const Subscribers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const columns = [
    {
      title: "#SI",
      dataIndex: "key",
      key: "key",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Subscriber Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Subscription",
      key: "subscription",
      dataIndex: "subscription",
    },
    {
      title: "Join Date",
      key: "joinDate",
      dataIndex: "joinDate",
    },
    {
      title: "Action",
      key: "action",
      render: (data) => (
        <Button
          onClick={() => showModal(data)}
          type="text"
          shape="circle"
          className="px-0 py-0 text-primary"
        >
          <FiAlertCircle size={22} />
        </Button>
      ),
    },
  ];
  const data = [];
  for (let index = 0; index < 20; index++) {
    data.push({
      key: index + 1,
      name: "John Brown",
      email: "subro@gmal.com",
      subscription: "6 Months",
      joinDate: "16 Apr 2024",
      _id: "12112121" + index,
    });
  }
  return (
    <div className="bg-grayground rounded-lg py-[16px]">
      {/* <div className="w-screen overflow-x-auto"> */}
      <div className="">
        <div className="px-6 pb-5 flex justify-between items-center">
          <h3 className="text-xl font-medium text-primary">{"Subscriber List"}</h3>
          <div className="flex justify-end gap-x-4">
            <DatePicker
              placeholder="Date"
              style={{ width: "150px" }}
              className="custom-datepicker focus:outline-none border-none rounded-full text-[#222222] px-3.5 text-sm"
              onChange={onChange}
            />
            <Input
              className="focus:outline-none outline-none border-none rounded-full placeholder:text-[#222222] px-3.5 text-sm w-[170px]"
              placeholder="User Name"
            />
            <Button
              className="bg-primary text-white border-none"
              type="primary"
              shape="circle"
              icon={<IoSearch className="" />}
            />
          </div>
        </div>
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerBg: "#0445E5",
                headerColor: "white",
              },
              Pagination: {
                itemActiveBg: "#0445E5",
              },
            },
          }}
        >
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              position: ["bottomCenter"],
              showQuickJumper: true,
            }}
          />
        </ConfigProvider>
      </div>
      <DashboardModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <div className="h-[560px] flex flex-col justify-between">
          <div className="space-y-[18px] text-sm text-[#181414] pb-2 divide-y divide-[#B1C5F7]">
            <h6 className="font-medium text-center pt-[18px]">User Details</h6>
            <div className="flex justify-between pt-[18px]">
              <p>Artist name</p>
              <p className="font-medium">{modalData.name}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Email</p>
              <p className="font-medium">{modalData.email}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Subscription</p>
              <p className="font-medium">{modalData.subscription}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Address</p>
              <p className="font-medium">{"Dhaka, Bangladesh"}</p>
            </div>
            <div className="flex justify-between pt-[18px]">
              <p>Joining Date</p>
              <p className="font-medium">{modalData.joinDate}</p>
            </div>
          </div>
        </div>
      </DashboardModal>
    </div>
  );
};

export default Subscribers;
