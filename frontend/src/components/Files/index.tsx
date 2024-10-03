import { Card } from "flowbite-react";
import React from "react";

const FileComponent = () => {
  return (
    <div className="flex flex-row gap-4 h-[25vh]">
      <Card
        href="#"
        className="flex flex-col gap-2.5 rounded-[10px]  self-stretch w-full pt-4 pr-8 pb-4 pl-8"
      >
        
      </Card>
      <Card
        href="#"
        className="flex flex-col gap-2.5 rounded-[10px]  self-stretch w-full pt-4 pr-8 pb-4 pl-8"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
      <Card
        href="#"
        className="flex flex-col gap-2.5 rounded-[10px]  self-stretch w-full pt-4 pr-8 pb-4 pl-8"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  );
};

export default FileComponent;
