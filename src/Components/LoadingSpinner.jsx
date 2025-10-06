import React from "react";
import { MoonLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <MoonLoader></MoonLoader>
    </div>
  );
};

export default LoadingSpinner;
