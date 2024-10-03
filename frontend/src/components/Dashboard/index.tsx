import {
  Avatar,
  Button,
  ButtonGroup,
  Datepicker,
  Dropdown,
  Sidebar,
} from "flowbite-react";
import React, { useState } from "react";
import ProfileComponent from "../Profile";
import DrawerComponent from "../Sidebar";
import AnnouncementComponent from "../Announcement";
import ProfileDetailsComponent from "../ProfieDetails";
import { CardComponent } from "../../shared/components/CardNav";
import FileComponent from "../Files";
import Footer from "../../shared/components/Footer";

const DashboardComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="p-4 self-stretch h-screen w-full gap-4 flex flex-col items-center ">
        <div className="flex flex-row gap-4 w-full items-start">
          <ProfileDetailsComponent />
          <AnnouncementComponent />
          <div>
            <Button className="items-end flex flex-row">Time in</Button>
            <Datepicker inline />
          </div>
        </div>
        <div className="flex flex-row gap-4 h-[25vh]">
          <FileComponent />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
