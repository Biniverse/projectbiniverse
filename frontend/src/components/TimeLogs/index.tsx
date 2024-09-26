import { useEffect, useState, useCallback } from "react";
import { CommonConstant } from "../../shared/constants/commonConstants";

type LogEntry = {
  date: string;
  login: string | null;
  logout: string | null;
};

type TimeLogsComponentProps = {
  isCalendarOnly: boolean;
  logData: LogEntry[];
};

const commonConstant = CommonConstant;

export const TimeLogsComponent = ({
  isCalendarOnly,
  logData,
}: TimeLogsComponentProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [dates, setDates] = useState<(number | null)[][]>([]);
  const today = new Date();
  const [InIconColor, setInIconColor] = useState("gray-300");
  const [OutIconColor, setOutIconColor] = useState("gray-300");

  const updateCalendar = useCallback(() => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    const lastMonthLastDate = new Date(currentYear, currentMonth, 0).getDate();

    const newDates: (number | null)[][] = [];
    let row: (number | null)[] = [];

    // Fill in previous month's dates
    for (let i = firstDay - 1; i >= 0; i--) {
      row.push(-1 * (lastMonthLastDate - i)); // Negative values for previous month dates
    }

    // Fill in current month's dates
    for (let day = 1; day <= lastDate; day++) {
      row.push(day);
      if (row.length === 7) {
        newDates.push(row);
        row = []; // Reset the row after filling
      }
    }

    // Fill in next month's dates
    const remainingCells = 7 - row.length;
    for (let i = 1; i <= remainingCells; i++) {
      row.push(-1 * i); // Negative values for next month's dates
    }

    if (row.length > 0) {
      newDates.push(row);
    }

    // Handle additional row for next month if we have 5 rows
    if (newDates.length === 5) {
      const nextMonthLastDate = newDates[newDates.length - 1][6]; // Get the last date from the last row
      const newRow = Array.from(
        { length: 7 },
        (_, i) => nextMonthLastDate! - (i + 1)
      ); // Create the new row

      newDates.push(newRow);
    }

    setDates(newDates);
  }, [currentMonth, currentYear]);

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

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center p-4 bg-white shadow">
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
        <div className="text-lg font-medium text-gray-900">
          {`${commonConstant.MONTHS[currentMonth].name} ${currentYear}`}
        </div>
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
                      day! < 0 ? "text-gray-300" : ""
                    } ${
                      day === today.getDate() &&
                      currentMonth === today.getMonth() &&
                      currentYear === today.getFullYear()
                        ? "bg-blue-800 font-bold text-white rounded-lg"
                        : ""
                    } ${day === selectedDate ? "bg-blue-500 text-white rounded-lg" : ""}`}
                    onClick={() => {
                      if (day! >= 0) {
                        setSelectedDate(day); // Update selected date
                      }
                    }}
                  >
                    <div className="flex flex-col justify-center items-center h-full">
                      <span className="w-full text-center">
                        {day! > 0 ? day : day! * -1}
                      </span>
                      {isCalendarOnly ? null : (
                        <div className="text-xs text-center">
                          <span className={`text-${InIconColor}`}>&#9679;</span>
                          <span className={`text-${OutIconColor}`}>
                            &#9679;
                          </span>
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
