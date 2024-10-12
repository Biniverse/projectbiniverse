import {
  Avatar,
  Button,
  ButtonGroup,
  Datepicker,
  Dropdown,
  Sidebar,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import ProfileComponent from "../Profile";
import DrawerComponent from "../Sidebar";
import AnnouncementComponent from "../Announcement";
import ProfileDetailsComponent from "../ProfieDetails";
import { CardComponent } from "../../shared/components/CardNav";
import FileComponent from "../Files";
import Footer from "../../shared/components/Footer";
import { CalendarComponent } from "../Calendar";
import { CommonConstant } from "../../shared/constants/commonConstants";
import { getUserByEmail } from "../../service/Sign-Up/signUpService";
import useCount from "../../store/useCount";

const DashboardComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [count, setCount] = useState<number>(0);
  const { count, setCount, addCount } = useCount();
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const commonConstant = CommonConstant;

  useEffect(() => {
    console.log("dashboard from");
  }, []); // empty - runs automatically inig start/load sa page

  useEffect(() => {
    console.log("count updated");
  }, [count]); // empty - runs automatically inig start/load sa page
  return (
    <>
      <div className="p-4 self-stretch h-screen w-full gap-4 flex flex-col items-center ">
        <div className="flex flex-row gap-4 w-full items-start">
          <h1>{count}</h1>
          <Button onClick={() => setCount()}>Click</Button>
          <Button onClick={() => addCount(5)}>Add </Button>
          <ProfileDetailsComponent />
          <AnnouncementComponent />
          <div>
            {/* <Datepicker inline /> */}
            <CalendarComponent
              isCalendarOnly={false}
              logData={commonConstant.MOCK_DATA_TIME_LOGS}
            />
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
