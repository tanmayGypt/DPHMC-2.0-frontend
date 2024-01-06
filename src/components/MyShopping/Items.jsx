import toast, { Toaster } from "react-hot-toast";

import { Link } from "react-router-dom";
const notify = () => toast.success("Item Added to Cart");
export default function Items() {
  return (
    <>
      <div className="relative mx-auto w-full duration-300 ease-in-out transition-transform transform hover:scale-105">
        <div className="shadow p-4 rounded-lg bg-white">
          <Link to="/product_description" className="relative inline-block ">
            <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
              <img
                className="productImage"
                src="https://dpmemorial.com/slide4.png"
                alt=""
              />
              <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                Featured
              </span>
            </div>

            <div className="mt-4">
              <h2
                className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                title="New York"
              >
                Immuno Plus
              </h2>
              <p className="mt-2 text-sm text-gray-800">
                Immuno Plus tablets is a food supplement based on plant
                extracts, vitamins and minerals useful for promoting the body
                {`'`}s natural defenses and the normal function of the immune
                system.
              </p>
              <div className="text-start leading-9 flex space-x-4">
                <div className="text-start leading-9 text-xl font-bold">
                  Rs.499
                </div>
                <div className="text-start leading-9 text-xl line-through">
                  Rs.500
                </div>
              </div>

              <div className="text-start leading-9 text-xs">
                Save Extra With Combo Offers
              </div>
            </div>
          </Link>

          <div className="flex mt-2 shopbutton">
            <div
              className=" text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              onClick={notify}
            >
              <button>Add To Cart</button>
              <Toaster />
            </div>

            <Link
              to="/currentAddress"
              onClick={notify}
              className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
