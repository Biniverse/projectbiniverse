import React from "react";
import "../../styles/index.css";
import ProfileComponent from "../../../components/Profile/index";

interface CardComponentProps {
  children: React.ReactNode;
}

export const CardComponent = ({ children }: CardComponentProps) => {
  return (
    <>
      <div className="w-full pr-[2rem] pl-[2rem] h-[100vh] pt-[2rem] overflow-hidden">
        <div className="flex flex-col items-center justify-start overflow-hidden rounded-tl-[15px] rounded-tr-[15px] shadow-[rgba(34,34,34,0.83)_-1px_1px_15px] h-[98vh] w-full bg-[var(--bricks-color-26b008)]">
          {/* Dashboard navigation */}
          <div
            className="flex flex-row items-center justify-between relative  pt-4 pr-8 pb-4 pl-8 w-full h-10.5"
            id="navDashboard"
          >
            <div className="overflow-auto z-20">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
              </button>
            </div>
            {/* profile avatar */}
            <ProfileComponent />
          </div>
          <div className="flex flex-row items-center w-full h-screen  pb-4 bg-[#f4f4f4]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
