import { CalendarHeader } from "./calendarHeader";

type Month = {
  index: number;
  name: string;
  initial: string;
};

type CalendarMonthsComponentProps = {
  monthChunks: Month[][];
  currentYear: number;
  changeDisplay: (newCurrentYear: number) => void;
  goToPreviousYear: (newCurrentYear: number) => void;
  goToNextYear: (newCurrentYear: number) => void;
};

export const CalendarMonthsComponent = ({
  monthChunks,
  currentYear,
  changeDisplay,
  goToPreviousYear,
  goToNextYear,
}: CalendarMonthsComponentProps) => {
  const handleChangeDisplay = () => {
    changeDisplay(currentYear);
  };

  const handleChangeDisplay2 = (dayIndex: number) => {
    const value = -Math.abs(dayIndex);
    changeDisplay(value);
  };

  const handleGoToPreviousYear = () => {
    goToPreviousYear(currentYear);
  };

  const handleGoToNextYear = () => {
    goToNextYear(currentYear);
  };

  const text = {
    initial: `${currentYear}`,
    name: `${currentYear}`,
    display: 1,
  };

  return (
    <div className="calendar-display">
      <CalendarHeader
        goToPrevious={handleGoToPreviousYear}
        goToNext={handleGoToNextYear}
        changeDisplay={handleChangeDisplay}
        text={text}
        isYears={false}
      />
      <div className="">
        <table className="w-full text-sm text-gray-700">
          <tbody>
            {monthChunks.map((chunk, rowIndex) => (
              <tr key={rowIndex}>
                {chunk.map((day) => (
                  <td
                    key={day.initial}
                    className={`text-sm md:text-base font-medium text-center py-9 cursor-pointer border border-gray-300  transition-all duration-200 ease-in-out ${
                      day.index === new Date().getMonth() + 1 &&
                      currentYear === new Date().getFullYear()
                        ? "bg-blue-800 font-bold text-white"
                        : "hover:bg-blue-100"
                    }`}
                    onClick={() => handleChangeDisplay2(day.index)}
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
  );
};
