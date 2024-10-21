import { Avatar, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { getUserByEmail } from "../../service/Add-Employee/signUpService";
import { IUser } from "../../shared/interface";

const ProfileDetailsComponent = () => {
  //Get user details
  useEffect(() => {
    async function getuser() {
      //Todo: should be dyamic
      const user = await getUserByEmail("bini@bini.com");
      console.log(user);
      setUser(user);
    }
    getuser();
  }, []);

  const [user, setUser] = useState<IUser>();

  //Get today's date
  const today = new Date();

  // Extract the day (e.g., 'Monday')
  const dayOptions: Intl.DateTimeFormatOptions = { weekday: "long" };
  const dayName = today.toLocaleDateString("en-US", dayOptions);

  // Extract the month, day, and year (e.g., 'October 10, 2024')
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fullDate = today.toLocaleDateString("en-US", dateOptions);

  return (
    <div className="flex flex-col items-start w-auto dark:text-white">
      <Card className="p-4 gap-6 self-stretch ">
        <div className="gap-2 pb-[1px] w-full items-start flex flex-col">
          <Avatar
            rounded
            className="p-4 border border-[#cfcfcf] rounded-full size-[60px]"
          ></Avatar>
          <div className="text-left text-xl inline leading-[115%]">
            <b>
              {user?.firstName} {user?.lastName} <br />
            </b>
            Developer
          </div>
        </div>
        <hr className="color-white dark:bg-white" />
        <div className="w-full flex flex-col items-start">
          <h4>{dayName}</h4>
          <p>{fullDate}</p>
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
