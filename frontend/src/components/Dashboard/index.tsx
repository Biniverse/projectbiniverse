import { Avatar, Datepicker, Dropdown, Sidebar } from "flowbite-react";
import React, { useState } from "react";
import ProfileComponent from "../Profile";
import DrawerComponent from "../Sidebar";
import AnnouncementComponent from "../Announcement";
import ProfileDetailsComponent from "../ProfieDetails";
import { CardComponent } from "../../shared/components/CardNav";
import { TimeLogsComponent } from "../TimeLogs";
import { CommonConstant } from "../../shared/constants/commonConstants";

const DashboardComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const commonConstant = CommonConstant;

  return (
    <>
      <CardComponent>
        <DrawerComponent />
        <ProfileDetailsComponent />
        <AnnouncementComponent />
        {/* <Datepicker inline /> */}
        <TimeLogsComponent
          isCalendarOnly={false}
          logData={commonConstant.MOCK_DATA_TIME_LOGS}
        />
      </CardComponent>
    </>
  );
};

export default DashboardComponent;
