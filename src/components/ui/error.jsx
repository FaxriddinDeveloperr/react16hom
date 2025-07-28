import React from "react";

const ErrorWidget = ({ text = "Something went wrong :(" }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src="../../assets/B10VcMXEcEL._CLa_2140,2000_51R-7mc2DsL.png_0,0,2140,2000+0.0,0.0,2140.0,2000.0_UY1000_.jpeg"
        alt="Error Image"
        className="w-[200px] mb-4"
      />
      <p className="text-red-500 text-center">{text}</p>
    </div>
  );
};

export default ErrorWidget;
