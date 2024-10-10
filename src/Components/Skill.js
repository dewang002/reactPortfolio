import React from "react";
import Frontendskill from "./Frontendskill";
import { Link, useNavigate } from "react-router-dom";
function Skill() {
  const navigate = useNavigate();
  return (
    <div id="skill" className=" md:h-[64vh] w-full flex flex-col items-center cursor-default pt-[20vw] md:pt-10"
    >
      <Link
        className="-translate-x-[34vw] -translate-y-[14vw] md:-translate-y-0  absolute bg-blue-500 py-2 px-4 rounded text-white active:scale-75 duration-100 transition-all"
        onClick={() => navigate(-1)}
      >
        <button className="font-bold text-lg ">Back</button>
      </Link>
      <div className="leading-[3vw]  text-center pb-4">
        <h1 className="text-[10vw] md:text-[3.5vw] pb-3 font-semibold tracking-tighter">
          Skill
        </h1>
        <p className="text-lg tracking-tighter text-zinc-500  ">
          My Technical Skill Level
        </p>
      </div>
      <Frontendskill />
    </div>
  );
}

export default Skill;
