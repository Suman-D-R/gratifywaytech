"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import AnimatedText from "./components/AnimatedText";
import AOS from "aos";
import "aos/dist/aos.css";
import { useViewportSize } from "@mantine/hooks";

export default function Home() {
  const [animationKey, setAnimationKey] = useState(0);
  const [overflow, setOverflow] = useState();
  const [lightOff, setLightOff] = useState(false);
  const ref = useRef();
  const myRef = useRef();
  const { width, height } = useViewportSize();

  const handleClick = () => {
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const [position, setPosition] = useState(-100);

  const handleMouseMove = (e) => {
    const clientY = e.touches ? e.touches[0]?.clientY : e?.clientY;
    setOverflow("overflow-hidden");
    if (clientY < 150) {
      setPosition(clientY - 210);
    }
  };

  const handlePosition = (e) => {
    const clientY = e.touches ? e.touches[0]?.clientY : e?.clientY;
    if (clientY < 100 && clientY > 80) {
      setPosition(clientY - 230);
    } else {
      setPosition(-100);
      setTimeout(() => {
        setLightOff(true);
      }, 100);
    }
    setOverflow(null);
  };

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      {lightOff ? (
        <div
          ref={myRef}
          className="h-[100vh] w-full bg-black flex justify-center items-center text-white"
        >
          <div
            onClick={() => {
              setLightOff(false);
            }}
          >
            click me to turn on the light
          </div>
        </div>
      ) : (
        <main
          className={`relative lg:min-h-dvh w-full glow bg-black  pb-10  ${overflow}`}
        >
          <div className="absoulte topin w-full">
            <Header />
          </div>
          <div
            ref={ref}
            style={{ top: position ? position : 0 }}
            className={`absolute right-[40%] z-50 lg:flex flex-col shake  justify-center items-center  hidden`}
          >
            <div className="w-[2px] h-[200px] first-letter: bg-gradient-to-r  from-[#757575] via-[#3b3b3b] to-[#4e4e4e] bg-white"></div>
            <div
              draggable={true}
              onDrag={handleMouseMove}
              onTouchMove={handleMouseMove}
              onTouchEnd={handlePosition}
              onDragEnd={handlePosition}
              className="w-[15px] absolute top-[200px]  aspect-square rounded-full  cursor-grab bg-gradient-to-r from-[#dfdfdf] via-[#373737] to-[#4e4e4e] bg-white"
            ></div>
          </div>
          <div key={animationKey} className="h-screen w-full main  bg-black ">
            <div className="flex w-full justify-center">
              <div className="absolute  -top-[200px] w-[80%] flex items-center flex-col shake fadein">
                <div
                  onClick={handleClick}
                  className="relative flex items-center flex-col lg:scale-100 md:scale-100 scale-75"
                >
                  <div className="w-[8px] h-[150px] bg-gradient-to-r from-[#434343] via-[#282828] to-[#333333] "></div>
                  <div className="w-[8px] h-[100px] bg-gradient-to-r from-[#434343] via-[#282828] to-[#333333] "></div>
                  <div className="w-[12px] h-[3px] bg-gradient-to-r rounded-full from-[#dda948] via-[#ffd078] to-[#ffb327] "></div>
                  <div className="relative w-[100px] h-[50px] overflow-hidden ">
                    <div className="w-[100px] h-[100px]  light rotate-45 absolute top-4 z-10"></div>
                  </div>
                  <div className=" h-[30px] aspect-square bg-white  absolute left-1/2 -translate-x-1/2 -bottom-4 rounded-full"></div>
                  <div className=" h-[40px] aspect-square bg-white blur-lg absolute left-1/2 -translate-x-1/2 -bottom-4 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="lg:text-6xl md:text-5xl font-extrabold whitespace-nowrap  text-2xl absolute text-white lg:top-[50%] top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
              <AnimatedText text={"We Build What You Think"} />
            </div>
            <div className="absolute shakeShawdo top-[45%] left-[50%] lg:top-[60%] base lg:w-[800px] w-[300px] h-[120px] ">
              <div className="text-shadwo w-[300px]  h-[60px]"></div>
            </div>
          </div>

          <div className="flex flex-col gap-[50px]">
            <div className="flex lg:flex-row md:flex-row flex-col justify-between  items-start text-white">
              <div className="lg:w-[50%] hero-1 flex flex-col justify-center gap-10 items-center">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="max-w-[400px]   flex justify-center"
                >
                  <img
                    className={`lg:w-full w-[90%] h-full  brightness-95 p-2 scroll-zoom 
                  ${width < 500 ? "element-mobile" : "element-right"}
                  `}
                    src="images/hero-1.jpeg"
                    alt=""
                  />
                </div>
              </div>
              <div className="lg:w-[50%] hero-1 flex flex-col justify-start gap-10 items-start">
                <div
                  id="service"
                  className="lg:text-5xl text-3xl w-full flex flex-col lg:gap-8  items-center "
                >
                  <AnimatedText text={"</> Development"} />
                  <div className="text-xs lg:text-sm max-w-[500px] lg:leading-7 tracking-wide text-justify opacity-60 py-2 px-4">
                    where we specialize in delivering innovative IT solutions
                    designed to transform your business. Our team of experts
                    excels in web development, software engineering, and digital
                    transformation, ensuring that your company stays ahead in a
                    rapidly evolving digital landscape. From custom applications
                    to comprehensive IT support, we provide scalable, efficient,
                    and secure solutions tailored to your unique needs. Partner
                    with us to harness the power of technology, enhance your
                    operations, and drive growth. Let’s work together to create
                    a future where your business thrives through cutting-edge
                    technology and exceptional service.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col-reverse  justify-between  items-start text-white">
              <div className="lg:w-[50%] hero-1 flex flex-col justify-start gap-10 items-start">
                <div
                  id="service"
                  className="lg:text-5xl text-3xl w-full flex flex-col lg:gap-8  items-center "
                >
                  <AnimatedText text={" UI / UX Design"} />
                  <div className="text-xs lg:text-sm max-w-[500px] lg:leading-7 tracking-wide text-justify opacity-60 py-2 px-4">
                    where we specialize in delivering exceptional UI/UX
                    solutions designed to elevate your user experience. Our team
                    of experts excels in user research, interaction design, and
                    visual design, ensuring that your products are intuitive,
                    engaging, and user-friendly in an increasingly competitive
                    digital market. From wireframing and prototyping to
                    comprehensive usability testing, we provide innovative,
                    efficient, and aesthetically pleasing solutions tailored to
                    your unique needs. Partner with us to harness the power of
                    exceptional design, enhance your user satisfaction, and
                    drive engagement. Let’s work together to create a future
                    where your business excels through cutting-edge design and
                    exceptional service.
                  </div>
                </div>
              </div>
              <div className="lg:w-[50%] hero-1 flex flex-col justify-center gap-10 items-center">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="max-w-[400px]   flex justify-center"
                >
                  <img
                    className={`lg:w-full w-[90%] h-full  brightness-95 p-2 scroll-zoom 
                  ${width < 500 ? "element-mobile" : "element-left"}
                  `}
                    src="images/hero-2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
