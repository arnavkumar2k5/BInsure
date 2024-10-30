import React, { useState } from "react";

function Component1() {
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [isQuoteSubmitted, setIsQuoteSubmitted] = useState(false);

  const handleSelectInsurance = (type) => {
    setSelectedInsurance(type);
  };

  const handleCloseForm = () => {
    setSelectedInsurance(null);
    setIsQuoteSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsQuoteSubmitted(true);
  };

  return (
    <div className="flex flex-col justify-center items-center relative h-screen">
      <div className="text-xl md:text-4xl text-center mt-10 md:mt-20 mb-10 md:mb-40">
        <p className="font-semibold inline">Compare & Buy</p> from Canada's
        <p>Top Insurers and Save BIG</p>
      </div>
      <div className="z-20">
        <img
          src="/Home/img1.png"
          alt="img"
          className="absolute left-0 bottom-80 md:bottom-10 h-32 md:h-[70vh]"
        />
        <img
          src="/Home/img3.png"
          alt="img"
          className="absolute right-0 bottom-10 hidden md:block h-[50vh]"
        />
      </div>
      <div className="m-5 md:m-0 md:w-[55%] relative">
        <div className="w-full z-30 h-[70vh] md:h-[53vh] md:p-10 shadow-xl p-5 rounded-2xl relative bg-white flex flex-col items-center gap-5 md:gap-10">
          <div className="w-full flex flex-wrap md:flex-nowrap gap-2 md:gap-5">
            {["Life", "Travel", "Auto", "Commercial"].map((type) => (
              <div
                key={type}
                onClick={() => handleSelectInsurance(type)}
                className="bg-white h-40 w-[48%] md:w-1/4 border-2 border-gray-200 rounded-lg p-3 md:p-5 flex flex-col cursor-pointer"
              >
                <p className="font-semibold">{type}</p>
                <p>Insurance</p>
                <div className="self-end mt-3 md:mt-5">
                  <img
                    src={`/Home/${type}.png`}
                    alt={type}
                    className="h-12 md:h-16"
                  />
                </div>
              </div>
            ))}
          </div>
          <div
            className="p-2 md:p-3 border-2 border-gray-300 inline font-bold cursor-pointer w-2/3 md:w-1/3 text-center rounded-full text-sm text-cyan-400"
            onClick={() => handleSelectInsurance("Life")}
          >
            GET A FREE QUOTE
          </div>
          <div className="text-sm md:text-2xl text-[#7F7F7F]" id="ca">
            Canada's fast-growing travel and life insurance broker
          </div>
        </div>

        {selectedInsurance && !isQuoteSubmitted && (
          <div className="absolute top-0 w-full flex p-5 md:p-0 z-50 justify-center items-center">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg md:text-xl font-semibold">
                  Help us with a few details
                </h2>
                <button onClick={handleCloseForm} className="text-gray-500">
                  ✖
                </button>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="w-full">
                    <label className="block font-semibold">Looking for</label>
                    <select className="border rounded px-3 py-2 w-full">
                      <option>{selectedInsurance} Insurance</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label className="block font-semibold">Planning to buy</label>
                    <select className="border rounded px-3 py-2 w-full">
                      <option>1-2 Weeks</option>
                      <option>2-4 Weeks</option>
                      <option>1 Month</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label className="block font-semibold">Email address</label>
                    <input
                      type="email"
                      placeholder="Email address"
                      className="border rounded px-3 py-2 w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="w-full">
                    <label className="block font-semibold">Your Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="border rounded px-3 py-2 w-full"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block font-semibold">
                      Contact number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+40 Contact number"
                      className="border rounded px-3 py-2 w-full"
                    />
                  </div>
                  <div className="w-full invisible md:visible">
                  </div>
                </div>
                <button className="p-3 px-10 md:mx-72 font-semibold bg-cyan-400 text-white py-3 rounded-full mt-4">
                  GET A FREE QUOTE
                </button>
                <p className="text-sm text-center text-gray-500 mt-4">
                  By continuing, you agree to our{" "}
                  <span className="underline">Terms of Service</span> and{" "}
                  <span>Privacy Policy</span>.
                </p>
                <p className="text-xs text-center text-gray-400">
                  Your data is secured with us. We do not share your data with
                  anyone except our insurance partners.
                </p>
              </form>
            </div>
          </div>
        )}

        {isQuoteSubmitted && (
          <div className="absolute left-0 right-0 bottom-0 flex z-50 justify-center items-center">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full flex flex-col items-center relative">
              <div className="flex">
                <img
                  src="/Home/img25.png"
                  alt="Success"
                  className="h-24 md:h-40 mb-4"
                />
                <button
                  onClick={handleCloseForm}
                  className="text-gray-500 absolute right-10"
                >
                  ✖
                </button>
              </div>
              <h2 className="text-lg md:text-2xl font-bold">Thank you!</h2>
              <p className="text-center mt-2">
                We’ve sent your personalized quote to your inbox.
              </p>
              <button
                onClick={handleCloseForm}
                className="mt-4 text-cyan-400 border-2 border-cyan-400 text-xs font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full"
              >
                CHECK OTHER QUOTES
              </button>
              <p className="text-xs md:text-sm text-center text-gray-400 mt-4 flex gap-1">
                <img src="/Home/img27.png" alt="" />
                Your data is secured with us. We do not share your data with
                anyone except our insurance partners.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Component1;
