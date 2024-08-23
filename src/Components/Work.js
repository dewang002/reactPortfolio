import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { projectData } from "../utils/Data";
function Work() {
  return (
    <div className="pt-5 pb-10 md:pb-16 w-[80%] mx-auto ">
      <h1 className="text-center text-[10vw] md:text-[3.5vw] pb-8 font-semibold ">Projects</h1>
      <div className="flex items-center justify-center flex-wrap gap-10">
        {projectData.map((elem, index) => (
          <div className="bg-white p-2 card h-64 w-72 rounded overflow-hidden hover:scale-110 transition duration-150 ease-in-out drop-shadow-xl" key={elem.id}>
            <div className="h-[80%] w-full overflow-hidden">
            {elem.image&&<img className="object-cover h-full w-full rounded" src={elem.image} alt={elem.title} />}
            </div>
           <a href={elem.link} className="" target="_blank"><h1 className="h-[20%] w-full flex justify-center items-center text-lg font-semibold">{elem.title} <span className="p-4 transition duration-150 ease-in-out hover:translate-x-2 hover:-translate-y-2"><MdArrowOutward /></span>  </h1></a> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
