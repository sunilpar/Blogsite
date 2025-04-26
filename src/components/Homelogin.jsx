import React from "react";
import melamchi from "../assets/melamchi.jpg";
import tamakoshi from "../assets/uppertamakoshi.jpg";
import pokharaair from "../assets/pokhara.jpg";
import mteverest from "../assets/Mount-Everest.png";

function Homelogin() {
  return (
    <section className="bg-white dark:bg-[#000000] flex flex-wrap h-screen pb-20 ">
      <div className="gap-16 items-center  py-8 px-4 mx-auto  lg:grid lg:grid-cols-2 lg:py-16 lg:px-6  ">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            <span className="extrabold">Welcome,</span>some rules before you
            begin:
          </h2>
          <p className="mb-4 text-3xl flex justify-center">
            1. Know more about the project.
            <br />
            2. Stay Respectful and Objective.
            <br />
            3. Be Specific and Constructive.
            <br />
            
          </p>
        </div>
        
        <div className="flex justify-center mt-8 flex-wrap  ">
          <div className="flex  gap-4 flex-direction-row justify-center  items-center mt-8 text-gray-500 sm:justify-between">
            <div>
              <a
                target="_blank"
                href="http://www.melamchiwater.gov.np/about-us/melamchi-ws-project/project-description/"
              >
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl p-6 pt-10 pb-8  max-w-sm mx-auto mt-2 hover:scale-105 ">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={melamchi}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h3 className="z-10 mt-3 text-lg font-bold text-white">
                    Melamchi Water Supply <br /> project
                  </h3>
                </article>
              </a>

              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Upper_Tamakoshi_Hydroelectric_Project"
              >
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl p-6 pt-10 pb-8  max-w-sm mx-auto mt-2 hover:scale-105 ">
                  <img
                    className="absolute inset-0 h-full w-full object-cover "
                    src={tamakoshi}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h3 className="z-10 mt-3 text-2xl font-bold text-white">
                    Upper Tamakoshi Hydroelectric Project
                  </h3>
                </article>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Pokhara_International_Airport"
              >
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl p-6 pt-10 pb-8  max-w-sm mx-auto mt-2 hover:scale-105 ">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={pokharaair}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h3 className="z-10 mt-3 text-2xl font-bold text-white">
                    Pokhara International Airport
                  </h3>
                </article>
              </a>

              <a target="_blank" href="https://www.dos.gov.np/everest/">
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl p-6 pt-10 pb-8  max-w-sm mx-auto mt-2 hover:scale-105 ">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={mteverest}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h3 className="z-10 mt-3 text-2xl font-bold text-white">
                    Everest Height Measurement{" "}
                  </h3>
                </article>
              </a>
            </div>
          </div>
        </div>
        <div className="text-5xl bold pb-6 flex justify-center w-inherit opacity-0 sm:opacity-100">
            Posts Made By the Citizens
        </div>
      </div>
    </section>
    
  );
}

export default Homelogin;
