import "../Navbar/global.css";
import BlogBox from "./BlogBox";
export default function Blogs() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Blog
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            vero incidunt quasi, omnis recusandae soluta consequatur error
            architecto aliquid, temporibus deserunt quia pariatur commodi
            voluptatem quae provident explicabo maiores laboriosam quibusdam
            aliquam exercitationem sed.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 ">
          <BlogBox />
        </div>
      </div>
    </section>
  );
}
