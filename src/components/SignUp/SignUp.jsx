import "../Navbar/global.css";

export default function SignUp() {
  return (
    <>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form action="/appointment" method="POST">
            <h2 className="text-3xl mb-5 text-center font-medium">
              Sign Up Form
            </h2>

            <div className="formbold-mb-5">
              <label htmlFor="name" className="formbold-form-label">
                {" "}
                Full Name{" "}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Full Name"
                className="formbold-form-input"
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="phone" className="formbold-form-label">
                {" "}
                Phone Number{" "}
              </label>
              <input
                type="text"
                name="phone"
                required
                id="phone"
                placeholder="Enter your phone number"
                className="formbold-form-input"
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="email" className="formbold-form-label">
                {" "}
                Email Address{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your email"
                className="formbold-form-input"
              />
            </div>

            <div className="formbold-mb-5">
              <label htmlFor="email" className="formbold-form-label">
                {" "}
                Date of Birth{" "}
              </label>
              <input
                type="date"
                name="DOB"
                id="email"
                required
                placeholder="Enter your DOB"
                className="formbold-form-input"
              />
            </div>

            <div className="formbold-mb-5">
              <label htmlFor="email" className="formbold-form-label">
                {" "}
                Password{" "}
              </label>
              <input
                type="text"
                name="DOB"
                id="email"
                required
                placeholder="Choose a Password"
                className="formbold-form-input"
              />
            </div>

            <div className="formbold-mb-5">
              <label htmlFor="email" className="formbold-form-label">
                {" "}
                Confirm Password{" "}
              </label>
              <input
                type="text"
                name="DOB"
                id="email"
                required
                placeholder="Repeat Password"
                className="formbold-form-input"
              />
            </div>
            <div className="formbold-mb-5">
              <h2 className="text-3xl mb-5 text-center font-light">
                Address (Optional)
              </h2>
              <label htmlFor="email" className="formbold-form-label">
                {" "}
                Address{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your email"
                className="formbold-form-input"
              />
            </div>

            <div className="formbold-mb-5">
              <label htmlFor="email" className="formbold-form-label">
                {" "}
                State{" "}
              </label>

              <select name="State" id="" className="formbold-form-input">
                <option value="Delhi">Delhi</option>
                <option value="Delhi">Mumbai</option>
                <option value="Delhi">Kolkata</option>
                <option value="Delhi">Chennei</option>
              </select>
            </div>

            <div className="formbold-mb-5">
              <label htmlFor="email" className="formbold-form-label">
                {" "}
                Pincode{" "}
              </label>
              <input
                type="number"
                name="Pincode"
                id="email"
                required
                placeholder="Enter your Pincode"
                className="formbold-form-input"
              />
            </div>

            <div className="formbold-mb-5">
              <label htmlFor="email" className="formbold-form-label">
                {" "}
                Landmark{" "}
              </label>
              <input
                type="text"
                name="email"
                id="email"
                required
                placeholder="Enter Landmark"
                className="formbold-form-input"
              />
            </div>

            <div>
              <button className="formbold-btn hover:bg-sky-700">Sign Up</button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an Account?{" "}
            <a
              href="/Login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
