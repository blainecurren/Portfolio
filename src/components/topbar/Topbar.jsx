import "./topbar.scss";
// import Email from "../../img/email.png";
// import Phone from "../../img/phone.png";
import Psst from "../../img/psst-sticker.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <img src={Psst} alt="" className="memoji" />
          <a href="#intro" className="logo">
            portfolio.
          </a>
          <div className="itemContainer">
            <PhoneIcon className="c-icon" />
            <span>+1-940-704-2282</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="c-icon" />
            <a href="mailto:blaine.curren@gmail.com?body=My custom mail body">
              blaine.curren@gmail.com
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
