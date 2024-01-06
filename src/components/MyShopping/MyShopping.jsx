import "../Navbar/global.css";
import Items from "./Items";
import "./MyProduct.css";
import Search_Medicines from "./SearchMedicines";

import "react-toastify/dist/ReactToastify.css";
import Banner from "./Banner";

export default function MyShopping() {
  return (
    <>
      <Banner />
      <h3 className="mt-8 text-center text-4xl ">Shop Medicines</h3>

      <Search_Medicines />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full mt-10 mb-10">
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />

        <Items />
      </div>
    </>
  );
}
