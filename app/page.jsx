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
          className={`relative lg:min-h-dvh w-full glow bg-black   ${overflow}`}
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
              onDragEnd={handlePosition}
              className="w-[15px] absolute top-[200px]  aspect-square rounded-full  cursor-grab bg-gradient-to-r from-[#dfdfdf] via-[#373737] to-[#4e4e4e] bg-white"
            ></div>
          </div>
          {/* <div
            className="bg-red-600 rounded-lg text-white p-1 text-[10px] w-fit"
            onClick={() => setLightOff(true)}
          >
            press me
          </div> */}
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
          <div className="w-full text-white flex flex-col bg-gray-900/50 mt-5">
            <div className=" px-4 py-8">
              <div className="flex flex-col gap-4 text-sm">
                <span className="text-xl">Contace Us Now</span>
                <span className="flex gap-4 items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 8.608V16.75C22.0001 17.5801 21.6824 18.3788 21.1123 18.9822C20.5422 19.5856 19.7628 19.948 18.934 19.995L18.75 20H5.25C4.41986 20.0001 3.62117 19.6824 3.01777 19.1123C2.41437 18.5422 2.052 17.7628 2.005 16.934L2 16.75V8.608L11.652 13.664C11.7594 13.7202 11.8788 13.7496 12 13.7496C12.1212 13.7496 12.2406 13.7202 12.348 13.664L22 8.608ZM5.25 4H18.75C19.5556 3.9999 20.3325 4.299 20.93 4.83927C21.5276 5.37954 21.9032 6.12248 21.984 6.924L12 12.154L2.016 6.924C2.09352 6.15431 2.44305 5.43752 3.00175 4.90246C3.56045 4.36741 4.29168 4.04919 5.064 4.005L5.25 4Z"
                      fill="#979797"
                    />
                  </svg>

                  <a href="Gratifywaytech@gmail.com">
                    Gratifywaytech@gmail.com
                  </a>
                </span>
                <span className="flex gap-4 items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2735 18.7501C14.511 18.7501 13.4399 18.4743 11.836 17.5783C9.88562 16.4845 8.37702 15.4747 6.43718 13.54C4.56687 11.6708 3.65671 10.4607 2.38288 8.1427C0.94382 5.52552 1.18913 4.15364 1.46335 3.56731C1.78991 2.86653 2.27195 2.44739 2.89499 2.03138C3.24888 1.79951 3.62338 1.60076 4.01374 1.43763C4.05281 1.42083 4.08913 1.40481 4.12156 1.39036C4.31491 1.30325 4.60788 1.17161 4.97898 1.31224C5.22663 1.4052 5.44773 1.59544 5.79382 1.93724C6.50359 2.63724 7.47351 4.19622 7.83132 4.96184C8.07155 5.47786 8.23054 5.81849 8.23093 6.20052C8.23093 6.64778 8.00593 6.9927 7.73288 7.36497C7.68171 7.43489 7.63093 7.50169 7.58171 7.56653C7.28445 7.95716 7.21921 8.07005 7.26218 8.27161C7.34929 8.67669 7.9989 9.88255 9.06648 10.9478C10.1341 12.013 11.3051 12.6216 11.7118 12.7083C11.9219 12.7533 12.0372 12.6853 12.4403 12.3775C12.4981 12.3333 12.5575 12.2876 12.6196 12.2419C13.036 11.9322 13.3649 11.713 13.8016 11.713H13.804C14.1841 11.713 14.5094 11.8779 15.0485 12.1497C15.7516 12.5044 17.3575 13.4618 18.0618 14.1724C18.4044 14.5177 18.5954 14.738 18.6887 14.9853C18.8294 15.3575 18.6969 15.6493 18.6106 15.8447C18.5962 15.8771 18.5801 15.9126 18.5634 15.9521C18.3989 16.3417 18.199 16.7155 17.9661 17.0685C17.5509 17.6896 17.1301 18.1704 16.4278 18.4974C16.0672 18.668 15.6725 18.7544 15.2735 18.7501Z"
                      fill="#979797"
                    />
                  </svg>
                  <span>+91 9902696211</span>
                </span>
                <span className="flex gap-4 items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.001 7C9.20535 7 8.44229 7.31607 7.87968 7.87868C7.31707 8.44129 7.001 9.20435 7.001 10C7.001 10.7956 7.31707 11.5587 7.87968 12.1213C8.44229 12.6839 9.20535 13 10.001 13C10.7966 13 11.5597 12.6839 12.1223 12.1213C12.6849 11.5587 13.001 10.7956 13.001 10C13.001 9.20435 12.6849 8.44129 12.1223 7.87868C11.5597 7.31607 10.7966 7 10.001 7ZM10.001 5C11.3271 5 12.5989 5.52678 13.5365 6.46447C14.4742 7.40215 15.001 8.67392 15.001 10C15.001 11.3261 14.4742 12.5979 13.5365 13.5355C12.5989 14.4732 11.3271 15 10.001 15C8.67492 15 7.40315 14.4732 6.46547 13.5355C5.52778 12.5979 5.001 11.3261 5.001 10C5.001 8.67392 5.52778 7.40215 6.46547 6.46447C7.40315 5.52678 8.67492 5 10.001 5ZM16.501 4.75C16.501 5.08152 16.3693 5.39946 16.1349 5.63388C15.9005 5.8683 15.5825 6 15.251 6C14.9195 6 14.6015 5.8683 14.3671 5.63388C14.1327 5.39946 14.001 5.08152 14.001 4.75C14.001 4.41848 14.1327 4.10054 14.3671 3.86612C14.6015 3.6317 14.9195 3.5 15.251 3.5C15.5825 3.5 15.9005 3.6317 16.1349 3.86612C16.3693 4.10054 16.501 4.41848 16.501 4.75ZM10.001 2C7.527 2 7.123 2.007 5.972 2.058C5.188 2.095 4.662 2.2 4.174 2.39C3.76562 2.53994 3.39641 2.78026 3.094 3.093C2.78101 3.3954 2.54035 3.76458 2.39 4.173C2.2 4.663 2.095 5.188 2.059 5.971C2.007 7.075 2 7.461 2 10C2 12.475 2.007 12.878 2.058 14.029C2.095 14.812 2.2 15.339 2.389 15.826C2.559 16.261 2.759 16.574 3.091 16.906C3.428 17.242 3.741 17.443 4.171 17.609C4.665 17.8 5.191 17.906 5.971 17.942C7.075 17.994 7.461 18 10 18C12.475 18 12.878 17.993 14.029 17.942C14.811 17.905 15.337 17.8 15.826 17.611C16.234 17.4603 16.6031 17.2201 16.906 16.908C17.243 16.572 17.444 16.259 17.61 15.828C17.8 15.336 17.906 14.81 17.942 14.028C17.994 12.925 18 12.538 18 10C18 7.526 17.993 7.122 17.942 5.971C17.905 5.189 17.799 4.661 17.61 4.173C17.4593 3.76502 17.219 3.39598 16.907 3.093C16.6047 2.77985 16.2355 2.53917 15.827 2.389C15.337 2.199 14.811 2.094 14.029 2.058C12.926 2.006 12.54 2 10 2M10 0C12.717 0 13.056 0.00999994 14.123 0.0599999C15.187 0.11 15.913 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2246 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.123 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.877 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16943 17.8222 0.77596 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0119999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.813 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.087 0.277 4.812 0.11 5.877 0.0599999C6.945 0.0129999 7.284 0 10.001 0"
                      fill="#979797"
                    />
                  </svg>
                  <span>Gratifywaytech</span>
                </span>
                <span className="flex gap-4 items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                      fill="#979797"
                    />
                  </svg>
                  <span>Gratifywaytech</span>
                </span>
              </div>
            </div>
            <div className="flex text-sm flex-col items-center gap-3">
              <div className="flex justify-center items-center  gap-6">
                <span>Home</span>
                <span>About us</span>
                <span>terms and condition</span>
                <span>service</span>
              </div>

              <div className="pb-8">2024 © GratifyWayTech</div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
