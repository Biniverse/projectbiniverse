import { useEffect, useState, useCallback } from "react";
import { CommonConstant } from "../../shared/constants/commonConstants";
import { CalendarHeader } from "./calendarHeader";

type LogEntry = {
  date: string;
  login: string | null;
  logout: string | null;
};

type CalendarComponentProps = {
  isCalendarOnly: boolean;
  logData: LogEntry[];
  changeDisplay: (newCurrentYear: number) => void;
  newDate: {
    month: number;
    year: number;
  };
};
const commonConstant = CommonConstant;

export const CalendarDatesComponent = ({
  isCalendarOnly,
  logData,
  changeDisplay,
  newDate,
}: CalendarComponentProps) => {
  const [currentMonth, setCurrentMonth] = useState(
    newDate.month || new Date().getMonth()
  );
  const [currentYear, setCurrentYear] = useState(
    newDate.year || new Date().getFullYear()
  );

  useEffect(() => {
    if (newDate) {
      setCurrentMonth(newDate.month);
      setCurrentYear(newDate.year);
    }
  }, [newDate]);

  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [dates, setDates] = useState<{ value: number; fullDate: string }[][]>(
    []
  );
  const today = new Date();

  const updateCalendar = useCallback(() => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    const lastMonthLastDate = new Date(currentYear, currentMonth, 0).getDate();

    const newDates: { value: number; fullDate: string }[][] = [];
    let row: { value: number; fullDate: string }[] = [];

    // Helper function to format the date
    const formatFullDate = (year: number, month: number, day: number) => {
      return `${month + 1}/${day}/${year}`;
    };

    // Fill in previous month's dates
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = lastMonthLastDate - i;
      const prevMonth = currentMonth - 1;
      const prevYear = prevMonth < 0 ? currentYear - 1 : currentYear;
      row.push({
        value: -1 * day,
        fullDate: formatFullDate(prevYear, (prevMonth + 12) % 12, day),
      });
    }

    // Fill in current month's dates
    for (let day = 1; day <= lastDate; day++) {
      row.push({
        value: day,
        fullDate: formatFullDate(currentYear, currentMonth, day),
      });
      if (row.length === 7) {
        newDates.push(row);
        row = [];
      }
    }

    // Fill in next month's dates
    const remainingCells = 7 - row.length;
    for (let i = 1; i <= remainingCells; i++) {
      const nextMonth = currentMonth + 1;
      const nextYear = nextMonth > 11 ? currentYear + 1 : currentYear;
      row.push({
        value: -1 * i,
        fullDate: formatFullDate(nextYear, nextMonth % 12, i),
      });
    }

    if (row.length > 0) {
      newDates.push(row);
    }

    // Handle additional row for next month if we have 5 rows
    if (newDates.length === 5) {
      const nextMonth = currentMonth + 1;
      const nextYear = nextMonth > 11 ? currentYear + 1 : currentYear;
      const nextMonthLastDate = newDates[newDates.length - 1][6].value;

      const newRow = Array.from({ length: 7 }, (_, i) => ({
        value: nextMonthLastDate! - (i + 1),
        fullDate: formatFullDate(nextYear, nextMonth % 12, i + 1),
      }));

      newDates.push(newRow);
    }

    setDates(newDates);
  }, [currentMonth, currentYear, isCalendarOnly]);

  useEffect(() => {
    updateCalendar();
  }, [updateCalendar]);

  const goToPreviousMonth = () => {
    setSelectedDate(null);
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    setSelectedDate(null);
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const text = {
    initial: `${commonConstant.MONTHS[currentMonth].initial} ${currentYear}`,
    name: `${commonConstant.MONTHS[currentMonth].name} ${currentYear}`,
    display: 0,
  };

  const handleChangeDisplay = () => {
    changeDisplay(currentYear);
  };

  return (
    <div className="calendar-display">
      <CalendarHeader
        goToPrevious={goToPreviousMonth}
        goToNext={goToNextMonth}
        changeDisplay={handleChangeDisplay}
        text={text}
        isYears={false}
      />

      <div className="overflow-x-auto">
        <table className="w-full my-3 text-sm text-gray-700">
          <thead>
            <tr>
              {commonConstant.DAYS_OF_WEEK.map((day) => (
                <th key={day} className="w-12 text-sm md:text-base font-medium">
                  <span className="hidden sm:inline">{day}</span>
                  <span className="inline sm:hidden">{day[0]}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dates.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((day, dayIndex) => (
                  <td
                    key={dayIndex}
                    className={`p-2 date cursor-pointer text-center transition-all duration-300 hover:bg-blue-100 ${
                      day.value! < 0 ? "text-gray-300" : ""
                    } ${
                      day.value === today.getDate() &&
                      currentMonth === today.getMonth() &&
                      currentYear === today.getFullYear()
                        ? "bg-blue-800 font-bold text-white rounded-lg"
                        : ""
                    } ${
                      day.value === selectedDate
                        ? "bg-blue-500 text-white rounded-lg"
                        : ""
                    }`}
                    onClick={() => {
                      if (day.value! >= 0) {
                        setSelectedDate(day.value); // Update selected date
                      }
                    }}
                  >
                    <div className="flex flex-col justify-center items-center h-full">
                      <span className="w-full text-center">
                        {day.value! > 0 ? day.value : day.value! * -1}
                      </span>
                      {isCalendarOnly ? null : (
                        <div>
                          {logData.some(
                            (logs) =>
                              day.fullDate ===
                                new Date(logs.date).toLocaleDateString(
                                  "en-US"
                                ) && logs.login
                          ) ? (
                            <span className={`text-green-500`}>&#9679;</span>
                          ) : (
                            <span className={`text-red-500`}>&#9679;</span>
                          )}

                          {logData.some(
                            (logs) =>
                              day.fullDate ===
                                new Date(logs.date).toLocaleDateString(
                                  "en-US"
                                ) && logs.logout
                          ) ? (
                            <span className={`text-green-500`}>&#9679;</span>
                          ) : (
                            <span className={`text-red-500`}>&#9679;</span>
                          )}
                        </div>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
