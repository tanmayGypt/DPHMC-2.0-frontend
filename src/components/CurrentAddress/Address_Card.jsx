export default function Address_Card() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full mb-24">
        <div className="relative mx-auto w-full">
          <a
            href="/product_description"
            className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
          >
            <div className="shadow p-4 rounded-lg bg-white">
              <div className="mt-4">
                <h2
                  className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                  title="New York"
                >
                  Tanmay Gupta
                </h2>
                <p className="mt-2 text-sm text-gray-800">
                  Pocket ABCD Colony Delhi 110085 Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Eius, soluta!
                </p>

                <div className="text-start leading-9 text-sm">
                  Landmark: Taj Mahal
                </div>

                <div className="text-start leading-9 text-sm">State: Tokyo</div>

                <div className="text-start leading-9 text-sm">
                  Street/Sector: Lodhi Road
                </div>

                <div className="text-start leading-9 text-sm">
                  Phone Number: 8076676966
                </div>
              </div>
              <div className="flex mt-2 shopbutton">
                <button className=" text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Use This Address
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
