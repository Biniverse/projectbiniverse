import React from "react";
import useCount from "../../store/useCount";

export const TestComponent = () => {
  const { count } = useCount();
  return <div>Count fomr test component{count}</div>;
};
