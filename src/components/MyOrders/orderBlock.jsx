import { Link } from "react-router-dom";

export default function OrderBlock() {
  return (
    <>
      <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <Link>
          <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full hover:duration-300 ease-in-out transition-transform transform hover:scale-105">
            <div className="pb-4 md:pb-8 w-full md:w-40">
              <img
                className="w-full hidden md:block"
                src="https://dpmemorial.com/slide4.png"
                alt="dress"
              />
              <img
                className="w-full md:hidden"
                src="https://dpmemorial.com/slide4.png"
                alt="dress"
              />
            </div>
            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
              <div className="w-full flex flex-col justify-start items-start space-y-8">
                <h3 className="text-xl dark:text-white xl:text-2xl font-semibold text-gray-800">
                  IMMUNO PLUS
                </h3>
                <div className="flex justify-start items-start flex-col space-y-2">
                  <p className="text-sm dark:text-white text-gray-800 font-light">
                    <span className="text-black font-medium">
                      Description:{" "}
                    </span>{" "}
                    Busy lives, stress and a diet lacking in essential nutrients
                    are just some of the factors that can leave us feeling under
                    par.
                  </p>
                  <p className="text-sm dark:text-white leading-none text-gray-800 font-light">
                    <span className="font-medium text-blue-300">
                      Delivery Status:{" "}
                    </span>{" "}
                    Pending
                  </p>
                </div>
              </div>
              <div className="flex justify-between space-x-8 items-start w-full">
                <p className="text-base  dark:text-white xl:text-lg leading-6">
                  RS.499.00{" "}
                  <span className="text-red-300 line-through"> Rs.500.00</span>
                </p>
                <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                  01
                </p>
                <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                  Rs.499.00
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
