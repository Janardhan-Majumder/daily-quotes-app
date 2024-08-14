import { Button } from "antd";
import { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";

const EditTermsConditions = () => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const placeholder = "Enter your update terms & conditions...";
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
      height: "60vh",
      style: {
        background: "#E6ECFC",
        // border: "1px solid #0445E5",
      },
      // toolbarSticky: false, // If you want the toolbar to be fixed
      // toolbarButtonSize: "middle",
      // toolbarButtonActiveClass: "active",
      // extraButtons: ["bold", "italic", "underline"], // example of adding extra buttons
      // buttons: [
      //   "bold",
      //   "italic",
      //   "underline", // Add other buttons as needed
      //   "|",
      //   "ul",
      //   "ol",
      //   "|",
      //   "align",
      //   "font",
      //   "fontsize",
      //   "paragraph",
      //   "|",
      //   "link",
      //   "image",
      //   "video", // Add other buttons as needed
      //   "|",
      //   "undo",
      //   "redo",
      // ],
      // toolbarInline: true,
      // toolbarStyle: {
      //   backgroundColor: "#0445E5", // Set your desired toolbar background color here
      //   borderColor: "#0445E5",
      // },
    }),
    [placeholder]
  );
  console.log(content);
  return (
    <div className="min-h-[75vh] flex flex-col justify-between">
      <div className="space-y-6">
        <PageHeading
          title={"Edit Terms & Conditions"}
          backPath={"/settings/terms-conditions"}
        />
        <div className="border border-[#0445E5] rounded-md p-[0.3px]">
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => {
              setContent(newContent);
            }}
            className="text-wrap"
            config={config}
            tabIndex={1}
          />
        </div>
      </div>
      <div className="flex justify-end pt-10">
        <Button
          style={{
            backgroundColor: "#0445E5",
            color: "#fff",
          }}
          htmlType="submit"
          className="w-[400px] h-[56px]  placeholder:text-[#999999] text-[18px] font-medium"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditTermsConditions;
