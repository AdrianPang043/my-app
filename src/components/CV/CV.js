import React from "react";
import "./CV.css";

const CV = () => {
  return (
    <div className="CV">
      <span>
        <h1>Education</h1>
        <h2>McGill University — Bachelor of Arts</h2>
        <p className="expected-grad">Expected Graduation: Fall 2020</p>

        <h2>Keio University — Exchange Program</h2>
        <p className="expected-grad">Program Duration: 2018-2019</p>
      </span>
      <span>
        <h1>Industry Experience</h1>
        <h2> Ubisoft Montreal — Web Development Intern</h2>
        <p className="expected-grad">Aug 2020 - Present</p>
        <ul>
          <li>
            Developed a web interface in React to better connect monetization
            specialists to secondary (in-game) stores, improving user experience
            by facilitating version control as well as drastically simplifying
            management of products and discounts for several productions
            company-wide.
          </li>
          <li>
            Created new React components, fixed bugs and wrote tests using the
            testing framework Jasmine.
          </li>
        </ul>
      </span>
      <span>
        <h1>Involvement</h1>
        <h2> McGill Simply Donate, Montreal, Canada</h2>
        <p className="expected-grad">2019 - 2020</p>
        <ul>
          <li>
            Handled the finances and logistics on a day-to-day basis for a
            charity
          </li>
          <li>
            Streamlined the event planning process by acting as a liaison
            between executives and other team-members.
          </li>
        </ul>

        <h2> McGill Table Tennis Club, Montreal, Canada</h2>
        <p className="expected-grad">2019 - 2020</p>
        <ul>
          <li>
            Tasked with club advertisement to a Facebook group with over 1000
            members
          </li>
          <li>
            Prepared reports on social media engagement, outlining areas of
            improvement and improving on them
          </li>
        </ul>

        <h2> McGill Tea Society, Montreal, Canada </h2>
        <p className="expected-grad">2019 - 2020</p>
        <ul>
          <li>
            Coordinated regular events for 15-20 people each semester by
            delegating tasks to team-members
          </li>
          <li>
            Reported to Co-Presidents about logistical details, including venue
            planning and budgetary considerations
          </li>
        </ul>
      </span>
    </div>
  );
};

export default CV;
