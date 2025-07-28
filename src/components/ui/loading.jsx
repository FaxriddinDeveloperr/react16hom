import React from "react";

const Skeleton = () => {
  return (
    <div className="container mx-auto grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4">
      {Array(12)
        .fill()
        ?.map((_, index) => (
          <div key={index}>
            <div className="h-[300px] bg-gray-300 rounded-b-lg"></div>
            <div className="p-4">
              <div className="w-[80%] h-6 bg-gray-300 rounded-b-lg"></div>
              <div className="w-[20%] h-6 bg-gray-300 rounded-b-lg mt-4"></div>
              <div className="w-[20%] h-6 bg-gray-300 rounded-b-lg mt-4"></div>
              <div className="w-[30%] h-6 bg-gray-300 rounded-b-lg mt-4"></div>
              <div></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Skeleton;