import { Button, Card, Carousel, Datepicker } from "flowbite-react";
import React from "react";
import { useUserStore } from "../../store/useUserStore";

const AnnouncementComponent = () => {
  const { user } = useUserStore();
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <div className="flex flex-row">
        <div className="w-auto flex items-start flex-col">
          <div className="text-[22px] font-semibold dark:text-white">
            Good morning, {user.firstName} {user.lastName} {user.email}
          </div>
          <h3 className="dark:text-white text-h3">Announcements</h3>
        </div>
        <span></span>
      </div>
      <div className="flex flex-row gap-4 h-[45vh] w-full">
        <Carousel>
          <div className="object-cover">
            <img
              src="https://i.pinimg.com/564x/46/bc/c9/46bcc9583d75925c3a37c79e62611448.jpg"
              className="object-cover object-top"
              alt=""
            />
          </div>
          <div className="object-fill">
            <img
              src="https://i.pinimg.com/736x/f4/28/fb/f428fbff6730b0c6ed089c4ad90557b2.jpg"
              className="w-full h-full object-cover object-object-fill"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://i.pinimg.com/originals/5b/9d/1b/5b9d1bdd1e1767904d56b1216309399e.jpg"
              className="w-full h-full object-cover object-top"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center ">
            <img
              src="https://i.pinimg.com/originals/b1/bb/cd/b1bbcd6ff9594f6c596d77fb6f9d14d9.jpg"
              className="w-full h-full object-cover object-top"
              alt=""
            />
          </div>

          <div className="">
            <img
              src="https://i.pinimg.com/originals/9c/7c/db/9c7cdb76b95374fd68917637cb16cfa0.jpg"
              className="w-full h-full  object-fill"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://i.pinimg.com/originals/0e/2d/eb/0e2deb4a5990fc7877e25200d288eb33.jpg"
              className="w-full h-full object-fill"
              alt=""
            />
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
