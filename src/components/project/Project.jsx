import { useEffect, useState } from "react";
import "./project.scss";
import ProjectList from "../projectList/ProjectList";
import { featured, frontEnd, backEnd, fullStack } from "../../data";

export default function Project() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featured);
        break;
      case "frontEnd":
        setData(frontEnd);
        break;
      case "backEnd":
        setData(backEnd);
        break;
      case "fullStack":
        setData(fullStack);
        break;
    }
  }, [selected]);

  return (
    <div className="project" id="project">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <a href={d.link}>
              <img src={d.img} alt="" />
            </a>
            <h2>{d.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
