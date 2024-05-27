import React from "react";
import { useViewportSize } from "@mantine/hooks";

function Header() {
  const { width, height } = useViewportSize();
  return (
    <header className="w-full h-[50px] px-4 text-white flex justify-between items-center ">
      <div className="origin-center flex items-center gap-1 lg:gap-4">
        <svg
          width={`${width < 500 ? "20" : "40"}`}
          height={`${width < 500 ? "20" : "40"}`}
          viewBox="0 0 119 119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M59.5 0L116.088 41.1135L94.4732 107.637H24.5268L2.91214 41.1135L59.5 0Z"
            fill="white"
          />
          <path
            d="M60 14L102.798 45.0942L86.4503 95.4058H33.5497L17.2025 45.0942L60 14Z"
            fill="black"
          />
          <circle cx="59.5" cy="59.5" r="19.5" fill="#D9D9D9" />
        </svg>

        <div className="text-xs lg:text-base">Gratify Way</div>
      </div>
      <div className="lg:flex gap-4 font-base hidden">
        <a>Home</a>
        <a href="#service">Services</a>
        <a>About</a>
        <a>Contact</a>
      </div>
    </header>
  );
}

export default Header;
