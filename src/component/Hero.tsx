import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <>
      {/* Top banner */}
      <div className="bg-gradient-to-r from-red-500 via-purple-400 to-blue-500">
        <div className="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 mx-auto">
          <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
            <div className="text-center md:text-start">
              <p className="text-xs text-white/80 uppercase tracking-wider">
                Memory App
              </p>
              <p className="mt-1 text-white font-medium">
                Share and cherish your daily memories with ease.
              </p>
            </div>
            <div className="mt-2 text-center md:text-start md:flex md:justify-end md:items-center">
              <a
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                href="#"
              >
                Sign up free
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <div className="bg-black">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          <div className="flex justify-center">
            <a
              className="group inline-flex items-center bg-white/10 hover:bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md focus:outline-none focus:bg-white/10"
              href="../figma.html"
            >
              <p className="me-2 text-white text-sm">Memory App Updates</p>
              <span className="group-hover:bg-white/10 py-1.5 px-2.5 flex justify-center items-center gap-x-2 rounded-full bg-white/10 font-semibold text-white text-sm">
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>

          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Capture and Relive Your Daily Memories
            </h1>
          </div>

          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-white/70">
              Memory makes it easier than ever to save, share, and revisit your life’s most cherished moments.
            </p>
          </div>

          <div className="text-center">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6"
              href="/Memory.exe" // Replace with the actual file path for downloading
              download="Memory.exe"
            >
              Download Now
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
