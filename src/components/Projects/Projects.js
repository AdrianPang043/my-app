import React from "react";
import p1 from "../../Images/calculator.png";
import p2 from "../../Images/polls.png";
import Card from "../Card/Card";
import './Projects.css';

const Projects = () => {
  return (
    <div class="flex-container">
      <div class = "proj">
        <Card
          source={p1}
          link="#"
          title="Polynomial Calculator - Java"
          desc="Demonstrated knowledge of implementing time-efficient data structures and algorithms utilising Java."
        />
      </div>
      <div class = "proj">
        <Card
          source={p2}
          link="#"
          title="Poll Party - Django & Bootstrap (In Progress)"
          desc="Developing a crowdsourced online polling system utilising Django and Bootstrap."
        />
      </div>
    </div>
  );
};

export default Projects;
