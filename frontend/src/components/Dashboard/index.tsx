import React from "react";

const DashboardComponent = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-start justify-start overflow-hidden rounded-tl-[15px] rounded-tr-[15px] shadow-[rgba(34,34,34,0.83)_-1px_1px_15px] h-[98vh] w-full bg-[var(--bricks-color-26b008)]">
        <div
          className="flex flex-row items-center justify-between relative space-x-[2.5rem] space-y-[2.5rem] pt-4 pr-8 pb-4 pl-8 w-full h-10.5"
          id="navDashboard"
        >
          <div className="overflow-auto z-20">
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
          </div>
        </div>

        <div className="flex flex-col items-center w-full h-screen pt-4 pr-4 pb-4 pl-4 gap-4 bg-[#f4f4f4]"></div>
      </div>
    </div>
  );
  // flex flex-col items-start justify-start rounded-t-[15px] shadow-[1px_-1px_15px_0_rgba(34,34,34,0.83)] overflow-hidden bg-[var(--bricks-color-26b008)] h-[98vh] w-full
};

export default DashboardComponent;
