import "./App.css";
import About from "../src/components/About/About";
import Blogs from "./components/Blogs/ShortBlogs";
import Book_Appointment from "../src/components/Book Appointment/Appointment_Form";
import AboutPageNew from "./components/AboutPage/AboutPage";
import Carosal from "./components/Carousal/caro";
import Completed_Apps from "./components/Completed Appointments/Completed";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/navbar";
// import Pending_Apps from "./components/PendingAppointments/All_Apps";
// import Reset_Password from "./components/ResetPassword/ResetPassword";
// import AppStats from "./components/StatsAppointment/Stats";
import Cart from "./components/Cart/Cart";
import SingleProduct from "./components/SingleProductDesc/SingleProductDesc";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Testimonials from "./components/Testimonials/Testimonials";
import AddAddressForm from "./components/AddAddressForm/AddAddressForm";
import SignUp from "./components/SignUp/SignUp";
import MyShopping from "./components/MyShopping/MyShopping";
import Video from "./components/Video_Gallary/Video";
import OrderConfirmation from "./components/orderConfirmation/confirmation";
import CurrentAddress from "./components/CurrentAddress/CurrentAddress";
import UserContextProvider from "../context/Provider";
import MyOrders from "./components/MyOrders/MyOrders";

function OrderConfirmationPage() {
  return (
    <>
      <OrderConfirmation />
    </>
  );
}

function MyOrdersfunction() {
  return (
    <>
      <MyOrders />
    </>
  );
}

function AddAddressPage() {
  return <AddAddressForm />;
}

function SingleProductDescPage() {
  return (
    <>
      <SingleProduct />
    </>
  );
}

function MyShoppingPage() {
  return (
    <>
      <MyShopping />
    </>
  );
}
function Home() {
  return (
    <>
      <Header />
      <About />
      <Blogs />
    </>
  );
}

function VideoPage() {
  return (
    <>
      <Video />
    </>
  );
}

function SignUpPage() {
  return (
    <>
      <SignUp />
    </>
  );
}

function MyOrdersPage() {
  return (
    <>
      <Cart />
    </>
  );
}

function Appointment() {
  return (
    <>
      <Book_Appointment />
    </>
  );
}

function LoginPage() {
  return (
    <>
      <Login />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <About />
    </>
  );
}

function Reviews() {
  return (
    <>
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<AboutPageNew />} />
            <Route path="/Appointment" element={<Appointment />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Cart" element={<MyOrdersPage />} />
            <Route path="/AddNewAddress" element={<AddAddressPage />} />
            <Route path="/SignUp" element={<SignUpPage />} />
            <Route path="/Shopping" element={<MyShoppingPage />} />
            <Route path="/Videos" element={<VideoPage />} />
            <Route path="/CurrentAddress" element={<CurrentAddress />} />
            <Route path="/Orders" element={<MyOrdersfunction />} />

            <Route
              path="/OrderConfirmation"
              element={<OrderConfirmationPage />}
            />
            <Route
              path="/product_description"
              element={<SingleProductDescPage />}
            />
          </Routes>
          <Footer />
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
