import React from "react";

function Component4() {
  return (
    <div className="bg-white flex flex-col p-5 justify-center items-center md:px-48 pt-40">
      <div className="self-start md:pl-10">
        <div className="text-start mb-2 text-xl md:text-4xl font-bold">
          <p className="inline md:block">
          Let’s get started
          </p>
        </div>

        <div className=" mb-5 mt-5 text-xl text-start">
        30+ insurance companies compared. Instantly.
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 md:m-5">
        <div className="flex flex-col bg-white p-8 shadow-lg text-sm rounded-md md:w-1/3 gap-5 border-[1px] border-[#BFBFBF]">
          <p className="font-semibold text-3xl">Individual</p>
          <p className="w-full">
            <p className="text-[#4D4C4C]">Insurance You can feel more confident by protecting what’s important to you.</p>
            <p className="font-semibold mt-5">Explore Solutions <p className="text-cyan-400 inline"> &gt;</p></p>
            <p className="font-semibold mt-3">View articles <p className="text-cyan-400 inline"> &gt;</p></p>
          </p>
          <div className="self-end mt-5">
            <img src="/Home/img10.png" alt="img" className="h-24" />
          </div>
        </div>
        <div className="flex flex-col bg-white p-8 shadow-lg text-sm rounded-md md:w-1/3 gap-5 border-[1px] border-[#BFBFBF]">
          <p className="font-semibold text-3xl">Commercial</p>
          <p className="w-full">
            <p className="text-[#4D4C4C]">Insurance You can feel more confident by protecting what’s important to you.</p>
            <p className="font-semibold mt-5">Explore Solutions <p className="text-cyan-400 inline"> &gt;</p></p>
            <p className="font-semibold mt-3">View articles <p className="text-cyan-400 inline"> &gt;</p></p>
          </p>
          <div className="self-end mt-5">
            <img src="/Home/img11.png" alt="img" className="h-20" />
          </div>
        </div>
        <div className="flex flex-col bg-white p-8 shadow-lg text-sm rounded-md md:w-1/3 gap-5 border-[1px] border-[#BFBFBF]">
          <p className="font-semibold text-3xl">Travel insurance</p>
          <p className="w-full">
            <p className="text-[#4D4C4C]">Insurance You can feel more confident by protecting what’s important to you.</p>
            <p className="font-semibold mt-5">Explore Solutions <p className="text-cyan-400 inline"> &gt;</p></p>
            <p className="font-semibold mt-3">View articles <p className="text-cyan-400 inline"> &gt;</p></p>
          </p>
          <div className="self-end mt-1">
            <img src="/Home/img12.png" alt="img" className="h-24" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component4;
