import "../Navbar/global.css";
import "./Header.css";
export default function Header() {
  return (
    <>
      <div className="atf_36">
        <div className="imgBG">
          <div className="responsive-container-block big-container">
            <div className="responsive-container-block container">
              <p className="text-blk landing10-head">
                DP MEMORIAL HOMOEOPATHY CLINIC
              </p>
              <img src="" style={{ width: "12%" }} alt="" id="logo1" />
              <br />
              <p className="text-blk landing10-subhead">
                Dr. Amit Gupta
                <br />A Doctor in New Delhi
              </p>
              <p>Timings</p>
              <br />
              <div>
                Mon-Sat: 12:00 pm{" - "}3:00 pm || 6:00{"–"}9:00  pm
              </div>
              <br />
              <h3>Address</h3>
              <br />
              <p>
                F 22/102, Shop Number 5, 6, Rohini Sector 3, Delhi - 110085
                (Beside State Bank Of, Near Gopal Jee Bhaturewale)
              </p>
              <br />
              <br />
              <h3>Phone</h3>
              <br />
              <p>7654602444, 9716749169</p>
              <br />
              <br />
              <div className="input-box">
                <a className="btn" href="/appointment">
                  <button className="landing-button">
                    Book An Appointment
                  </button>
                </a>
              </div>
            </div>
            <a id="iuy3u">
              <img
                className="downArrowImg"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw2.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
