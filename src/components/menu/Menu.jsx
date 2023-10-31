import "./menu.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const linkedInClick = () => {
  window.location.href = "https://www.linkedin.com/in/blaine-curren-27657690";
};

const githubClick = () => {
  window.location.href = "https://github.com/blainecurren";
};

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About Me</a>
        </li> */}
        <li onClick={() => setMenuOpen(false)}>
          <a href="#project">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div>
        <LinkedInIcon className="l-icon" onClick={linkedInClick} />
        <GitHubIcon className="g-icon" onClick={githubClick} />
      </div>
    </div>
  );
}
