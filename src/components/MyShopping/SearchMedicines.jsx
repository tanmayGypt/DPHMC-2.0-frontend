export default function Search_Medicines() {
  return (
    <>
      <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-sm transform hover:scale-105 transition duration-500 justify-center">
        <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="bg-gray-100 outline-none"
            type="text"
            placeholder="Article name or keyword..."
          />
        </div>
        <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
          <select
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <option
              value="#"
              selected
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              All Catagories
            </option>
            <option
              value="#"
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Option1
            </option>
            <option
              value="#"
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Option2
            </option>
            <option
              value="#"
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Option3
            </option>
          </select>
        </div>

        <div className="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
          <span>Search</span>
        </div>
      </div>
    </>
  );
}
