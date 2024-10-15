import React from "react";
import { CardComponent } from "../../shared/components/CardNav";
import DrawerComponent from "../Sidebar";
import { CalendarComponent } from "../Calendar";
import { CommonConstant } from "../../shared/constants/commonConstants";

export const TimeLogsComponent = () => {
  const commonConstant = CommonConstant;

  return (
    <div className="w-full h-full border border-black">
      <CalendarComponent
        isCalendarOnly={false}
        logData={commonConstant.MOCK_DATA_TIME_LOGS}
      />
    </div>
  );
};
