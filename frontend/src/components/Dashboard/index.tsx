import { Avatar, Datepicker, Dropdown, Sidebar } from "flowbite-react";
import React, { useState } from "react";
import ProfileComponent from "../Profile";
import DrawerComponent from "../Sidebar";
import AnnouncementComponent from "../Announcement";
import ProfileDetailsComponent from "../ProfieDetails";
import { CardComponent } from "../../shared/components/CardNav";

const DashboardComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ProfileDetailsComponent />
      <AnnouncementComponent />
      <Datepicker inline />
    </>
  );
};

export default DashboardComponent;
