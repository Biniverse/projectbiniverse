import { useEffect, useState, useCallback } from "react";
import { CommonConstant } from "../../shared/constants/commonConstants";

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
    if (newDates.length === 5 && isCalendarOnly) {
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

  const goToPreviousYear = () => {
    setCurrentYear(currentYear - 1);
  };

  const goToNextYear = () => {
    setCurrentYear(currentYear + 1);
  };

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
        if (index !== null) {
          setCurrentMonth(index - 1);
          setCalendarDisplay(0);
        }
        break;
      case 4:
        if (index !== null) {
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

  const dateFormatter = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const monthChunks = chunkArray(commonConstant.MONTHS, 4);
  const yearChunks = generateYearChunks(currentYear, currentYear - 4, 4);
  console.log(monthChunks);
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg">
      {calendarDisplay == 0 ? (
        <div className="calendar-display">
          <div className="flex justify-between items-center p-2 bg-white shadow">
            <button
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-md"
              onClick={goToPreviousMonth}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              className="p-2 text-lg font-extrabold text-gray-900 hover:bg-gray-100"
              onClick={() => changeDisplay(0, null)}
            >
              <span className="block sm:hidden">
                {`${commonConstant.MONTHS[currentMonth].initial} ${currentYear}`}
              </span>
              <span className="hidden sm:block">
                {`${commonConstant.MONTHS[currentMonth].name} ${currentYear}`}
              </span>
            </button>
            <button
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-md"
              onClick={goToNextMonth}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full my-3 text-sm text-gray-700">
              <thead>
                <tr>
                  {commonConstant.DAYS_OF_WEEK.map((day) => (
                    <th
                      key={day}
                      className="w-12 text-sm md:text-base font-medium"
                    >
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
                                <span className={`text-green-500`}>
                                  &#9679;
                                </span>
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
                                <span className={`text-green-500`}>
                                  &#9679;
                                </span>
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
      ) : calendarDisplay === 1 ? (
        <div className="calendar-display">
          <div className="flex justify-between items-center p-2 bg-white shadow">
            <button
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-md"
              onClick={goToPreviousYear}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              className="p-2 text-lg font-extrabold text-gray-900 hover:bg-gray-100"
              onClick={() => changeDisplay(1, null)}
            >
              {currentYear}
            </button>
            <button
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-md"
              onClick={goToNextYear}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
          <div className="">
            <table className="w-full text-sm text-gray-700">
              <tbody>
                {monthChunks.map((chunk, rowIndex) => (
                  <tr key={rowIndex}>
                    {chunk.map((day) => (
                      <td
                        key={day.initial}
                        className={`text-sm md:text-base font-medium text-center py-9 cursor-pointer border border-gray-300  transition-all duration-200 ease-in-out ${
                          day.index == new Date().getMonth() + 1 &&
                          currentYear == new Date().getFullYear()
                            ? "bg-blue-800 font-bold text-white"
                            : "hover:bg-blue-100"
                        }`}
                        onClick={() => changeDisplay(3, day.index)}
                      >
                        <span>{day.initial}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="calendar-display">
          <div className="flex justify-center items-center p-2 bg-white shadow">
            <button
              className="p-2 text-lg font-extrabold text-gray-900 hover:bg-gray-100"
              onClick={() => changeDisplay(2, null)}
            >
              YEARS
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-700 border-collapse">
              <tbody>
                {yearChunks.map((chunk) => (
                  <tr key={chunk[0]} className="">
                    {chunk.map((year) => (
                      <td
                        key={year}
                        className={`text-sm md:text-base font-medium text-center py-6 cursor-pointer border border-gray-300 transition-all duration-200 ease-in-out ${
                          year == new Date().getFullYear()
                            ? "bg-blue-800 font-bold text-white"
                            : "hover:bg-blue-100"
                        }`}
                        onClick={() => changeDisplay(4, year)}
                      >
                        <span>{year}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
