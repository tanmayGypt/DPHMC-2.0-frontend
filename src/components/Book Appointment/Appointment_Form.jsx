import "../Navbar/global.css";
import "./Appform.css";

export default function AppForm() {
  return (
    <>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form action="/appointment" method="POST">
            <h2 className="text-3xl mb-5 text-center font-medium">
              Book An Appointment
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
            <div className="flex flex-wrap formbold--mx-3">
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5 w-full">
                  <label htmlFor="date" className="formbold-form-label">
                    {" "}
                    Date{" "}
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    required
                    className="formbold-form-input"
                  />
                </div>
              </div>
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <label htmlFor="time" className="formbold-form-label">
                    {" "}
                    Time{" "}
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    min="09:00"
                    max="21:00"
                    required
                    className="formbold-form-input"
                  />
                </div>
              </div>
            </div>

            <div className="formbold-mb-5 formbold-pt-3">
              <label className="formbold-form-label formbold-form-label-2">
                Your message
              </label>
              <div className="flex flex-wrap formbold--mx-3">
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <textarea
                      type="text"
                      name="message"
                      required
                      id="area"
                      placeholder="Enter Your message here"
                      className="formbold-form-input"
                      cols="60"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3"></div>
                <div className="w-full sm:w-half formbold-px-3"></div>
              </div>
            </div>

            <div className="formbold-mb-5 formbold-pt-3">
              <label className="formbold-form-label formbold-form-label-2">
                Upload Images (Optional)
              </label>
              <div className="flex flex-wrap formbold--mx-3">
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <input type="file" />
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3"></div>
                <div className="w-full sm:w-half formbold-px-3"></div>
              </div>
            </div>

            <div>
              <button className="formbold-btn">Book Appointment</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
