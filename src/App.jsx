import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import "./index.css";

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.2,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.2,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full h-full rotate-[-10deg] scale-[1.4]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-10 w-full py-5 px-10">
              <div className="logo flex gap-4">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-10 h-2 bg-white"></div>
                  <div className="line w-6 h-2 bg-white"></div>
                  <div className="line w-2 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-2 leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.4] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute bg scale-[1.7] rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-2 absolute top-10 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[6rem] leading-none -ml-10 ">grand</h1>
                <h1 className="text-[6rem] leading-none ml-10">theft</h1>
                <h1 className="text-[6rem] leading-none -ml-10">auto</h1>
              </div>
              <img
                className="absolute character -bottom-150 left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg] w-auto h-[90%] object-contain"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full px-10 py-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-2 items-center">
                <i className="ri-arrow-down-line"></i>
                <h3 className="font-[Helvetica_Now_Display]">Scroll Down</h3>
              </div>
              <img
                className="absolute h-[45px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center px-10 bg-black overflow-hidden">
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="lftimg relative w-1/2 h-full">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="image.png"
                  alt=""
                />
              </div>
              <div className="rgt w-[30%] py-10">
                <h1 className="text-4xl">Still Running,</h1>
                <h1 className="text-4xl">Not Hunting</h1>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
                <p className="mt-2 text-xl font-[Helvetica_Now_Display]">
                  Experience the thrill of the chase in a world where every
                  corner holds a new adventure.
                </p>
                <p></p>
                <button className="bg-yellow-500 px-5 py-5 mt-10 text-black text-2xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
