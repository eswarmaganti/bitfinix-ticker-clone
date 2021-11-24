import React from "react";

const Ticker = ({ state }) => {
  const { volume, high, low, lastPrice, dailyChange, dailyChangeRelative } =
    state;
  return (
    <div className="bg-gray-900 shadow rounded p-2 flex gap-3">
      <div className="flex items-center py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="h-10 w-10 text-white"
        >
          <path
            fill="#E6E6E6"
            d="M11 24v-3.022h-1v3.022h-2v-3.022h-4.969l.5-2.978h1.079c.884 0 1.39-.851 1.39-1.707v-8.889c0-.833-.485-1.404-1.365-1.404h-1.635v-3h5v-3h2v3h1v-3h2v3.053c4.315.146 6.024 1.781 6.514 3.625.58 2.18-.857 4.01-2.093 4.456 1.501.382 3.579 1.491 3.579 4.05 0 3.483-2.688 5.816-8 5.816v3h-2zm-1-11.006v5.006c3.969 0 6.688-.375 6.688-2.516 0-2.296-2.938-2.49-6.688-2.49zm0-1.994c2.211 0 5.578-.156 5.578-2.5 0-2-2.078-2.5-5.578-2.5v5z"
          />
        </svg>
      </div>
      <div>
        <h4 className="underline text-xl font-light flex items-center cursor-pointer">
          BTC/USD
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-4 pl-1"
          >
            <path
              fill="white"
              d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"
            />
          </svg>
        </h4>
        <h5 className="text-sm py-1 text-gray-400 ">
          VOL <span className="underline  text-white">{volume}</span> USD
        </h5>
        <h5 className="text-sm  text-gray-400 ">
          LOW <span className=" text-white">{low}</span>
        </h5>
      </div>
      <div>
        <h5 className="text-sm  text-gray-400 ">
          <span className=" text-white text-xl">{lastPrice}</span>
        </h5>
        <h4
          className={`flex text-sm ${
            dailyChange > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {(-dailyChange).toFixed(2)}
          {dailyChange > 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="bg-green-600"
            >
              <path fill="#3FA02C" d="M12 8l6 6H6z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="#D2180F" d="M12 16l-6-6h12z" />
            </svg>
          )}
          ({-dailyChangeRelative}%)
        </h4>
        <h5 className="text-sm  text-gray-400 ">
          HIGH <span className="text-white ">{high}</span>
        </h5>
      </div>
    </div>
  );
};

export default Ticker;
