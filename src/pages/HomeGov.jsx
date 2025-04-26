import React from 'react'
import Container from '../components/container/Container'
import logo from '../assets/logo_np_gov.png'
import mteverest from '../assets/Mount-Everest.png'
import melamchi from '../assets/melamchi.jpg'
import tamakoshi from '../assets/uppertamakoshi.jpg'
import pokharaair from '../assets/pokhara.jpg'
import { Link } from 'react-router-dom'



function HomeGov() {
  return (
    <div className='w-full py-4 mt-4 text-center min-h-screen'>
      <Container>
          <section className="bg-white dark:bg-[#000000]">
            <div className="py-8 px-3 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-8">
              <div className="flex justify-center ">
                <a href="">
                  <img
                    className="w-[380px] h-[320px] min-w-[370px]"
                    src={logo}
                    alt=""
                  />
                </a>
              </div>

              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Goverment of Nepal
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                Here are some recent project we want your precious feedback on. <br />Please login 
              </p>
              <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gov-red hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  <Link to="/signup">
                    Signup
                  </Link>
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  <Link to="/login">
                    login
                  </Link>
                </a>
              </div>
              <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                <span className="font-semibold text-gray-100 bold uppercase">
                  FEATURED PROJECTS
                </span>
                <div className="flex flex-wrap gap-2 flex-direction-row justify-center items-center mt-8 text-gray-500 sm:justify-between">
                  <a target="_blank" href="http://www.melamchiwater.gov.np/about-us/melamchi-ws-project/project-description/">
                    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl p-6 pt-24 pb-8  max-w-sm mx-auto mt-2 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={melamchi}
                        alt=""
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 className="z-10 mt-3 text-2xl font-bold text-white">
                        Melamchi Water Supply <br /> project
                      </h3>
                      
                    </article>
                  </a>
                  <a target="_blank" href="https://en.wikipedia.org/wiki/Upper_Tamakoshi_Hydroelectric_Project">
                    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-2 hover:scale-105 ">
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
                  <a target="_blank" href="https://en.wikipedia.org/wiki/Pokhara_International_Airport">
                    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-2 hover:scale-105 ">
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
                    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-2 hover:scale-105 ">
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
          </section>
          
        </Container>
    </div>
  )
}

export default HomeGov