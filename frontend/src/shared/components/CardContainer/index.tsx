import React from "react";

interface ICardContainer {
  children: React.ReactNode;
}

export const CardContainer = ({ children }: ICardContainer) => {
  return (
    <div className="bg-gray-50 w-full self-start mt-4 p-4 rounded-xl shadow-sm flex flex-col">
      {children}
    </div>
  );
};
