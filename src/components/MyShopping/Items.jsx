import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function Items() {
  const notify = () => toast("Item Added to cart succesfully");
  return (
    <>
      <div className="relative mx-auto w-full">
        <div className="shadow p-4 rounded-lg bg-white">
          <a
            href="/product_description"
            className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
          >
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
          </a>

          <div className="flex mt-2 shopbutton">
            <div
              className=" text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              onClick={notify}
            >
              <button>Add To Cart</button>
              <ToastContainer />
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
