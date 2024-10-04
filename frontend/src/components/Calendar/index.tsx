import { useEffect, useState, useCallback } from "react";
import { CommonConstant } from "../../shared/constants/commonConstants";
import { CalendarYearComponent } from "./calendarYear";
import { CalendarMonthsComponent } from "./calendarMonths";
import { CalendarDatesComponent } from "./calendarDates";

type LogEntry = {
  date: string;
  login: string | null;
  logout: string | null;
};

type CalendarComponentProps = {
  isCalendarOnly: boolean;
  logData: LogEntry[];
};

const commonConstant = CommonConstant;

export const CalendarComponent = ({
  isCalendarOnly,
  logData,
}: CalendarComponentProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [dates, setDates] = useState<{ value: number; fullDate: string }[][]>(
    []
  );
  const today = new Date();
  const [calendarDisplay, setCalendarDisplay] = useState(0);

  const changeDisplay = (key: number, index: number | null) => {
    switch (key) {
      case 0:
        setCalendarDisplay(1); // show months
        break;
      case 1:
        setCalendarDisplay(2); // show years
        break;
      case 2:
        setCalendarDisplay(0); // show current month
        break;
      case 3:
        if (index !== null && index >= 0) {
          setCurrentMonth(index - 1);
          setCalendarDisplay(0);
        }
        break;
      case 4:
        if (index !== null && index >= 0) {
          setCurrentYear(index);
          setCalendarDisplay(1);
        }
        break;
      default:
        break;
    }
  };

  const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const generateYearChunks = (
    currentYear: number,
    startYear: number,
    chunkSize: number
  ): number[][] => {
    const years: number[] = [];

    for (let i = startYear; i <= currentYear + 11; i++) {
      years.push(i);
    }

    return chunkArray(years, chunkSize);
  };

  const monthChunks = chunkArray(commonConstant.MONTHS, 4);
  const yearChunks = generateYearChunks(currentYear, currentYear - 4, 4);

  const handleDisplayMonths = (newCurrentYear: number) => {
    setCurrentYear(newCurrentYear);
    changeDisplay(0, null);
  };

  const handleDisplayYears = (value: number) => {
    if (value <= 0) {
      const currentMonth = Math.abs(value);
      changeDisplay(3, currentMonth);
    } else {
      const currentYear = value;
      setCurrentYear(currentYear);
      changeDisplay(1, null);
    }
  };

  const goToPreviousYear = (year: number) => {
    setCurrentYear(year - 1);
  };

  const goToNextYear = (year: number) => {
    setCurrentYear(year + 1);
  };

  const handleDisplayMonths2 = (display: number, year: number | null) => {
    changeDisplay(display, year);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg">
      {calendarDisplay == 0 ? (
        <CalendarDatesComponent
          isCalendarOnly={isCalendarOnly}
          logData={logData}
          changeDisplay={handleDisplayMonths}
          newDate={{ month: currentMonth, year: currentYear }}
        />
      ) : calendarDisplay === 1 ? (
        <CalendarMonthsComponent
          monthChunks={monthChunks}
          currentYear={currentYear}
          changeDisplay={handleDisplayYears}
          goToPreviousYear={goToPreviousYear}
          goToNextYear={goToNextYear}
        />
      ) : (
        <CalendarYearComponent
          yearChunks={yearChunks}
          changeDisplay={handleDisplayMonths2}
        />
      )}
    </div>
  );
};
