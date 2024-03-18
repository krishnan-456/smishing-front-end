import React from "react";
import LegitimateLottie from "../assets/tickLottie.lottie";
import NotLegitimateLottie from "../assets/wrongLottie.lottie";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const MessageCard = (props) => {
  const message = props.message;
  const data = props.data;
  return (
    <div className="w-full px-8 py-6 flex item-center justify-between rounded-md shadow-md text-xl">
      <div>
        <p className="w-[80%]">{message}</p>
        {data.prediction === "Legitimate" ? (
          <p className="mt-8 text-green-500 text-3xl font-semibold">
            {data.prediction}
          </p>
        ) : (
          <p className="mt-8 text-red-500 text-3xl font-semibold">
            {data.prediction}
          </p>
        )}
      </div>
      <div>
        {data.prediction === "Legitimate" ? (
          <div className="w-[120px]">
            <DotLottiePlayer
              src={LegitimateLottie}
              autoplay
              loop
            ></DotLottiePlayer>
          </div>
        ) : (
          <div>
            <div className="w-[120px]">
              <DotLottiePlayer
                src={NotLegitimateLottie}
                autoplay
                loop
              ></DotLottiePlayer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageCard;
