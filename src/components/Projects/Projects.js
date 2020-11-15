import React from "react";
import p1 from "../../Images/profile_pic.png";
import p2 from "../../Images/profile_pic.png";
import p3 from "../../Images/profile_pic.png";
import Card from "../Card/Card";

const Projects = () => {
  return (
    <div>
      <Card
        source={p1}
        link="#"
        title="Project 1"
        desc="Test content"
      />
      <Card
        source={p2}
        link="#"
        title="Project 2"
        desc="Test content"
      />
      <Card
        source={p3}
        link="#"
        title="Project 3"
        desc="Test content"
      />
    </div>
  );
};

export default Projects;
