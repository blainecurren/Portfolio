import { useEffect, useRef } from "react";
import "./intro.scss";
import Peace from "../../img/peace-memoji-sticker.png";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "HTML",
        "CSS",
        "Sass",
        "JavaScript",
        "Node.js",
        "Express.js",
        "SQL",
        "MongoDB",
        "React",
        "Heroku",
      ],
    });
  }, []);

  return (
    <div className="i" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi there, I'm</h2>
          <h1 className="i-name">Blaine.</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <h3>
                <span ref={textRef}></span>
              </h3>
            </div>
          </div>
          <p className="i-desc">
            Just a little list of some of the technologies I've used within this
            very portfolio.
          </p>
        </div>
      </div>
      <div className="i-right">
        {/* S */}
      </div>
    </div>
  );
};

export default Intro;
