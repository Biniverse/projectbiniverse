import { useEffect, useState } from "react";

type CalendarHeaderProps = {
  goToPrevious: () => void;
  goToNext: () => void;
  changeDisplay: () => void;
  text: {
    initial: string;
    name: string;
    display: number;
  };
  isYears: boolean;
};

export const CalendarHeader = ({
  goToPrevious,
  goToNext,
  changeDisplay,
  text,
  isYears,
}: CalendarHeaderProps) => {
  const [yearsHeader, setYearsHeader] = useState(isYears || false);

  useEffect(() => {
    if (isYears) {
      setYearsHeader(isYears);
    }
  }, [isYears]);

  return (
    <div
      className={`flex justify-${yearsHeader ? "center" : "between"} items-center p-2 bg-white shadow`}
    >
      <button
        className={`p-2 text-gray-500 hover:bg-gray-100 rounded-md`}
        onClick={goToPrevious}
        hidden={yearsHeader}
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
        className={`p-2 text-lg font-extrabold text-gray-900 hover:bg-gray-100`}
        onClick={changeDisplay}
      >
        {text.display === 0 ? (
          <>
            <span className="block sm:hidden">{text.initial}</span>
            <span className="hidden sm:block">{text.name}</span>
          </>
        ) : text.display === 1 || text.display === 2 ? (
          <>
            <span>{text.initial || text.name}</span>
          </>
        ) : (
          "Display not found!"
        )}
      </button>
      <button
        className={`p-2 text-gray-500 hover:bg-gray-100 rounded-md`}
        onClick={goToNext}
        hidden={yearsHeader}
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
  );
};
