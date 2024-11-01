import React from "react";

function Coverage() {
  return (
    <div className="bg-gradient-to-r from-[#0f6476] to-[#133e4e] flex flex-col md:flex-row items-center h-auto md:h-[40vh] justify-center px-5 md:px-10 gap-10 md:gap-96">
      <div className="text-white md:text-left pt-10 md:pt-0">
        <h2 className="text-xl md:text-2xl font-semibold">
        Need your Certificate of Insurance (COI) fast?
        </h2>
        <p className="mt-4 text-sm">
        We know your time is valuable. Get your free quote, coverage, and certificate of insurance instantly.
        </p>
        <button className="mt-6 px-5 text-lg md:text-xl p-2 border-2 rounded-lg border-white text-white hover:bg-white hover:text-teal-900 transition-all">
          Schedule a call
        </button>
      </div>
      <div className="mt-10 md:mt-0">
        <img src="woman.png" alt="woman" className="h-[30vh] md:h-[45vh] md:mb-10" />
      </div>
    </div>
  );
}

export default Coverage;
