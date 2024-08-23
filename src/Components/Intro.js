import React from "react";
import { IoMdHand } from "react-icons/io";
function Intro() {
  return (
    <div className="pl-[10vw] md:pl-[4vw] overflow-x-hidden md:pt-[12vw] pt-[0] flex flex-col gap-4">
      <div className="heading">
        <h1 className="pl-5 text-5xl md:text-6xl font-semibold">
          DEWANG<span className="text-yellow-300 text-5xl inline-block">{<IoMdHand />}</span>
        </h1>
      </div>
      <div className="profession">
        <h1 className="text-lg  md:text-2xl">___FRONT-END DEVELOPER</h1>
      </div>
      <div className="discription">
        <p className="text-center md:text-start leading-5 text-lg font-light text-zinc-400">
          I am a front-end developer, bringing websites <br /> and ideas to
          life.
        </p>
      </div>
      <button className="ml-[16vw] md:ml-[0vw] md:hover:bg-slate-600 active:scale-95 duration-150 md:text-[1vw] text-[4vw] font-semibold bg-black text-white md:w-[8vw] w-[34vw]  p-4 rounded-md">Say Hello</button>
    </div>
  );
}

export default Intro;
