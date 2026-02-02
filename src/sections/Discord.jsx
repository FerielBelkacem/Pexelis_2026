import Qrcode from "../assets/Discord/qr_code.png";
import "../Style/discord.css";

export default function Discord () {
  return (
    <>
      <div className="--logincontainer">
        <div className="--outerformcontainer">
          <div className="--formsection">
            <form>
              <h1 className="--formHeading">Welcome back!</h1>
              <p className="--formsubheading">
                We're so excited to see you again!
              </p>

              <label className="--email" htmlFor="email">
                EMAIL OR PHONE NUMBER
              </label>
              <input type="text" name="" id="" />

              <label className="--password" htmlFor="PASSWORD">
                PASSWORD
              </label>
              <input type="text" />

              <a href="#" className="--forgotpassword">
                Forgot your password?
              </a>
              <button className="--loginbutton">Login</button>

              <span className="--lastsectionoftheform">
                <p className="--needaccount">Need an account?</p>{" "}
              </span>
            </form>
          </div>

          <div className="--qrcodesection">
            <img src={Qrcode} alt="" className="--qrcodeimage" />
            <h1 className="--loginwithqr">Log in with QR Code</h1>
            <p>Scan this with the Discord mobile app to login in instantly</p>
          </div>
        </div>
      </div>
    </>
  );
}
