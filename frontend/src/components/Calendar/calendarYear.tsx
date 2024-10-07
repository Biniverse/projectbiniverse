import { CalendarHeader } from "./calendarHeader";

type CalendarYearComponentProps = {
  yearChunks: number[][];
  changeDisplay: (display: number, year: number | null) => void;
};

export const CalendarYearComponent = ({
  yearChunks,
  changeDisplay,
}: CalendarYearComponentProps) => {
  const handleDisplay = () => {
    changeDisplay(2, null);
  };
  const handleDisplay2 = (year: number) => {
    changeDisplay(4, year);
  };

  const text = {
    initial: "YEARS",
    name: "YEARS",
    display: 2,
  };

  return (
    <div className="calendar-display">
      <CalendarHeader
        goToPrevious={() => {}}
        goToNext={() => {}}
        changeDisplay={handleDisplay}
        text={text}
        isYears={true}
      />
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-gray-700 border-collapse">
          <tbody>
            {yearChunks.map((chunk) => (
              <tr key={chunk[0]} className="">
                {chunk.map((year) => (
                  <td
                    key={year}
                    className={`text-sm md:text-base font-medium text-center py-6 cursor-pointer border border-gray-300 transition-all duration-200 ease-in-out ${
                      year === new Date().getFullYear()
                        ? "bg-blue-800 font-bold text-white"
                        : "hover:bg-blue-100"
                    }`}
                    onClick={() => handleDisplay2(year)}
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
  );
};
