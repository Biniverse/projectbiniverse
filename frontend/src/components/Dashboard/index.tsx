import { Avatar, Datepicker, Dropdown, Sidebar } from "flowbite-react";
import React, { useState } from "react";
import ProfileComponent from "../Profile";
import DrawerComponent from "../Sidebar";
import AnnouncementComponent from "../Announcement";
import ProfileDetailsComponent from "../ProfieDetails";
import { CardComponent } from "../../shared/components/CardNav";
import { CalendarComponent } from "../Calendar";
import { CommonConstant } from "../../shared/constants/commonConstants";

const DashboardComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const commonConstant = CommonConstant;

  return (
    <>
      <ProfileDetailsComponent />
      <AnnouncementComponent />
      {/* <Datepicker inline /> */}
      <CalendarComponent
        isCalendarOnly={false}
        logData={commonConstant.MOCK_DATA_TIME_LOGS}
      />
    </>
  );
};

export default DashboardComponent;
