import React, { useState } from "react";
import profile from "../../public/picofme.png";
import resume from "../../public/dewangresume.pdf";
import { Link, useNavigate } from 'react-router-dom';

function About() {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const downloadcv = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  };
  return (
    <div id="about" className="md:min-h-[50vh] h-[100vh] bg-zinc-300 w-full flex flex-col items-center cursor-default">
       <Link className="-translate-x-[28vw] translate-y-5 absolute bg-blue-500 py-2 px-4 rounded text-white active:scale-75 duration-100 transition-all" onClick={()=>navigate(-1)}><button className='font-bold text-lg '>Back</button></Link> 
      <h1 className="text-[10vw] md:text-[3.5vw] font-semibold tracking-tighter">
        About Me
      </h1>
      <p className="text-[4vw] md:text-lg translate-y-[-1vw] font-light text-zinc-500">
        My Introduction
      </p>
      <div className=" h-[70vh] w-full flex items-center gap-10 flex-col">
        <div className="h-[50vw] w-[50vw] flex justify-center md:h-[10vw] md:[w-10vw] pt-[4vh] ">
          <img className="md:object-cover  h-full" src={profile} />
        </div>

        <div className="h-[full] md:w-[45%] text-center font-medium text-lg w-full pr-10 pl-10 ">
          Hi! I'm Dewang Thapa, a passionate web developer with a year of
          experience in HTML, CSS, JavaScript, Tailwind CSS, and React.js. I
          love building projects daily, constantly honing my skills and
          exploring new technologies. My journey in coding has been driven by a
          desire to create efficient and user-friendly web applications. When
          I'm not coding, I enjoy staying updated with the latest industry
          trends and experimenting with new frameworks. Connect with me on
          Twitter or check out my portfolio to see my work. Let's collaborate
          and create something amazing together!
        </div>
        <button
          onClick={downloadcv}
          className="px-3 py-3 bg-black text-white text-lg font-semibold rounded"
        >
          <a href={resume} download="dewangresume.pdf">
            {loading ? "Downloading..." : "Download"}
          </a>
        </button>
      </div>
    </div>
  );
}

export default About;
