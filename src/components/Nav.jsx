import { MoveRight } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full sticky top-0 flex items-center justify-between border-b-[1px] py-6 bg-white z-50">
      <Link to="/">
        <div className="font-bold text-[28px] flex items-center cursor-pointer">
          SMISHSAFE
        </div>
      </Link>
      <div className="flex items-center justify-center gap-8 text-xl">
        <div>
          <p>About</p>
        </div>
        <div>
          <button className="bg-black px-6 py-3 text-white flex items-center btnAnimation gap-4 rounded-md" onClick={()=>navigate("/choice")}>
            Check SMS
            <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
