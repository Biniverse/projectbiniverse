import { Button, Card, Carousel, Datepicker } from "flowbite-react";
import React from "react";

const AnnouncementComponent = () => {
  return (
    <div className="flex flex-col justify-between items-start gap-4 w-full">
      <div className="flex flex-row items-end justify-between">
        <div className="w-auto flex items-start flex-col">
          <div className="text-[22px] font-semibold dark:text-white">
            Good morning, User!
          </div>
          <h3 className="dark:text-white text-h3">Announcements</h3>
        </div>
        <span></span>
      </div>
      <div className="flex flex-row gap-4 h-[45vh] w-full">
        <Carousel>
          <div className="object-cover">
            <img
              src="../assets/images/jovany.jpg"
              className="object-cover object-top"
              alt=""
            />
          </div>
          <div className="object-cover">
            <img src="../assets/images/edward.jpg" className="" alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img src="../assets/images/ptrck.jpg" className="" alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img src="../assets/images/ron.jpg" className="" alt="" />
          </div>

          <div className="">
            <img src="../assets/images/stephen.jpg" className="" alt="" />
          </div>
          <div className="">
            <img src="../assets/images/images.jpg" className="" alt="" />
          </div>
        </Carousel>
        {/* <div className=" p-4 rounded-[10px] self-stretch w-[450px] items-end z-30">
          <div>September 2024</div>
          <Datepicker inline />
          <div>Birthdys</div>
        </div> */}
      </div>
    </div>
  );
};

export default AnnouncementComponent;
