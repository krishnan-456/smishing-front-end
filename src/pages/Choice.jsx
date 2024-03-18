import React from "react";
import { useNavigate } from "react-router-dom";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import lottie from "../assets/spam.json";

const Choice = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center text-xl">
      <div>
        <div>
          <p className="w-[80%] font-bold text-5xl">
            SMS Smishing Detection: Stay Protected, Stay Secure with SmishSafe
          </p>
        </div>
        <div className="w-[420px]">
          <DotLottiePlayer src={lottie} autoplay loop></DotLottiePlayer>
        </div>
      </div>
      <div className=" w-[60%] flex flex-col items-center justify-center gap-10">
        <div>
          <button
            className="w-[240px] bg-black py-3 text-white flex items-center justify-center btnAnimation gap-4 rounded-md uppercase font-semibold"
            onClick={() => navigate("/sms-detection")}
          >
            Single Message
          </button>
        </div>
        <div>
          <button
            className="w-[240px] bg-black py-3 text-white flex items-center justify-center btnAnimation gap-4 rounded-md uppercase font-semibold"
            onClick={() => navigate("/instruction")}
          >
            Multiple Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Choice;
