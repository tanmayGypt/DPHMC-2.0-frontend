import "../Navbar/global.css";
import "./AddAddressForm.css";
export default function AddAddressForm() {
  return (
    <>
      <form className="w-full max-w-lg AddAddressForm">
        <h2 className="text-center mb-10 text-2xl">Add New Address</h2>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="grid-first-name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Full Name
            </label>
            <input
              id="grid-first-name"
              type="text"
              placeholder="Tanmay Gupta"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              required
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="grid-last-name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Mobile Number
            </label>
            <input
              id="grid-last-name"
              type="text"
              placeholder="0000000000"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="grid-password"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Address
            </label>
            <input
              id="grid-password"
              type="password"
              placeholder="House No. 21 Gandhi Colony, Lodhi Road, Delhi -110085"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="grid-password"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Street / Colony /Sector
            </label>
            <input
              id="grid-password"
              type="password"
              placeholder="House No. 21 Gandhi Colony, Lodhi Road, Delhi -110085"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              htmlFor="grid-state"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              State
            </label>
            <div className="relative">
              <select
                id="grid-state"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              htmlFor="grid-city"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              LandMark
            </label>
            <input
              id="grid-city"
              type="text"
              placeholder="Qutub Minar"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              htmlFor="grid-zip"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Pincode
            </label>
            <input
              id="grid-zip"
              type="text"
              placeholder="90210"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
        >
          Add New Address
        </button>
      </form>
    </>
  );
}
