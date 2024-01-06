import "../Navbar/global.css";
import UserContextProvider from "../../../context/Provider";
import { useContext } from "react";
import Search_Cart from "./Search_Cart";
import UserContext from "../../../context/userProvider";
import Cart_Items from "./CartItems";
import { Link } from "react-router-dom";
export default function Cart() {
  const { Cart } = useContext(UserContext);

  return (
    <>
      <UserContextProvider>
        <Search_Cart />
        <div className="h-screen bg-gray-100 mb-5 mt-5">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {/* Product 1 */}
              <Cart_Items />
              <Cart_Items />
              <Cart_Items />
              <Cart_Items />
              <Cart_Items />
              <Cart_Items />
              <Cart_Items />

              <Cart_Items />

              {/* Product 2 (same structure for each product) */}
              {/* ... */}
            </div>

            {/* Subtotal */}
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">$129.99</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$4.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                <Link to="/CurrentAddress">CheckOut</Link>
              </button>
            </div>
          </div>
        </div>
      </UserContextProvider>
    </>
  );
}
