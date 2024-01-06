import "../Navbar/global.css";
import { Link } from "react-router-dom";
import FAQcomponent from "./FAQcomponent";
export default function Faq() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="flex justify-items-end items-baseline justify-between">
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Frequently asked questions
            </h2>
            <div>
              <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded justify-self-end">
                <Link to="/getInTouch">Ask a Question</Link>
              </button>
            </div>
          </div>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <FAQcomponent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
