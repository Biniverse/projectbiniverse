import { Avatar, Card } from "flowbite-react";
import React from "react";

const ProfileDetailsComponent = () => {
  return (
    <div className="flex flex-col items-start w-auto place-self-start pt-4 pr-4 pl-4 ">
      <Card className="rounded-[10px] h-[60vh] w-auto">
        <Avatar></Avatar>
        <p>BINI AIAH</p>
        <p>DEVELOPER</p>
        <hr />
        <p>Lorem ipsum </p>
        <p>Lorem ipsum dolor </p>
        <hr />
        <p>Time in: ----- 10</p>
        <p>DEVELOPER</p>
        <hr />
      </Card>
    </div>
  );
};

export default ProfileDetailsComponent;
