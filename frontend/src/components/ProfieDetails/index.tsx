import { Avatar, Card } from "flowbite-react";
import React from "react";

const ProfileDetailsComponent = () => {
  return (
    <div className="flex flex-col items-start w-1/3  dark:text-white">
      <Card className="p-4 gap-6 self-stretch ">
        <div className="gap-2 pb-[1px] w-full items-start flex flex-col">
          <Avatar
            rounded
            className="p-4 border border-[#cfcfcf] rounded-full size-[60px]"
          ></Avatar>
          <div className="text-left text-xl inline leading-[115%]">
            <b>
              Employer Name <br />
            </b>
            Developer
          </div>
        </div>
        <hr className="color-white dark:bg-white" />
        <div className="w-full flex flex-col items-start">
          <h4>Monday</h4>
          <p>Month day, Year</p>
        </div>
        <hr />
        <div className="w-full flex flex-col items-start">
          <div>
            <div>Time in</div>
            <div></div>
          </div>
          <div>
            <div>Time out</div>
            <div></div>
          </div>
        </div>
        <hr />
        <div className="w-full flex flex-row items-start">
          <div className="p-4">Late</div>
          <div className="p-4">Absences</div>
          <div className="p-4">Undertime</div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileDetailsComponent;
