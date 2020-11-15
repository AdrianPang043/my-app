import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import profile_pic from "./Images/profile_pic.png";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";
import CV from "./components/CV/CV";
import Projects from "./components/Projects/Projects";
import "./App.css";

library.add(fab, far);

const App = () => {
  return (
    <div className="App">
      <header className="name-title">Adrian Pang</header>
      <img className="profile-pic" src={profile_pic} alt="" />
      <p className="intro">
        I am in my final year at McGill University. I am interested in learning
        more about Web and Mobile Development. I enjoy learning new languages.
      </p>
      <div className="icons">
        <a href="https://www.linkedin.com/in/adrian-p-53b43719b/">
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
        </a>{" "}
        <a href="https://github.com/AdrianPang043/">
          <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
        </a>{" "}
        <a href="mailto:adrianpang6@gmail.com">
          <FontAwesomeIcon icon={["far", "envelope"]} size="3x" />
        </a>
      </div>
      <div className="tabs-div">
        <Tabs classname="myClass" defaultActiveKey="CV" id="main-nav-tabs">
          <Tab eventKey="CV" title="CV">
            <CV />
          </Tab>
          <Tab eventKey="projects" title="Projects">
            <Projects />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
