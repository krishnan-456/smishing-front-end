import React from "react";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import { useNavigate } from "react-router-dom";
import { MoveRight } from "lucide-react";

const Instruction = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full text-2xl py-10">
      <p className="text-4xl font-semibold mb-8">Instruction</p>
      <div>
        <div className="font-medium mb-8 w-[80%]">
          1. Install "SMS Backup & Restore" from play store to export personal
          sms to Google Drive
        </div>
        <div className="w-[320px] mb-8">
          <img src={image1} alt="step1" />
        </div>
      </div>
      <div>
        <div className="font-medium mb-8 w-[80%]">
          2. Export the SMS messages from the mobile using a third-party app
          called "SMS Backup & Restore" to Google Drive.
        </div>
        <div className="w-[320px] mb-8">
          <img src={image2} alt="step2" />
        </div>
      </div>
      <div>
        <div className="font-medium mb-8 w-[80%]">
          3. Download the file from Google Drive onto the PC.
        </div>
      </div>
      <div className="w-[800px] mb-8">
        <img src={image3} alt="step1" />
      </div>
      <div>
        <div className="font-medium mb-8 w-[80%]">
          4. Open the SmishSafe web application. Select "Check SMS" and choose
          "Multiple Messages."
        </div>
        <div className="w-[800px] mb-8">
          <img src={image4} alt="step1" />
        </div>
      </div>
      <div>
        <div className="font-medium mb-8 w-[80%]">
          5. Upload the file downloaded from Google Drive and click "Validate
          SMS" and a pop-up will notify you that the file has been uploaded.
        </div>
        <div className="w-[800px] mb-8">
          <img src={image5} alt="step1" />
        </div>
      </div>
      <div>
        <div className="font-medium mb-8 w-[80%]">
          6. Then, the messages uploaded in the file will be individually
          labeled as "Legitimate" or "Not Legitimate."
        </div>
        <div className="w-[800px] mb-8">
          <img src={image6} alt="step1" />
        </div>
      </div>
      <div>
        <button
          className="bg-black flex items-center justify-center gap-4 px-6 py-3 text-white btnAnimation rounded-md mt-20"
          onClick={() => navigate("/upload-multiple-sms")}
        >
          Next
          <MoveRight />

        </button>
      </div>
    </div>
  );
};

export default Instruction;
