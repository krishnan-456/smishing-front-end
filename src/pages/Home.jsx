import { MoveRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[80vh] text-xl flex flex-col items-center justify-center text-center">
      <div>
        <p className="font-semibold text-7xl leading-[4rem]">
          Prevent Scams before they strike Shield your Inbox with SmishSafe
        </p>
        <p className="px-[10rem] mt-4">
          Your proactive shield against SMS smishing attacks, safeguarding your
          inbox from fraudulent messages with advanced detection algorithms.
        </p>
      </div>
      <button className="bg-black px-6 py-3 text-white flex items-center btnAnimation gap-4 rounded-md mt-8" onClick={()=>navigate('/choice')}>
        Get Started
        <MoveRight />
      </button>
    </div>
  );
};

export default Home
