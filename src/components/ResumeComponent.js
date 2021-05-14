import React from "react";
import "./index.css";
import meAbout from "../assets/image/me-about.jpg";
import { Card, Badge } from "antd";

const ResumeComponent = () => {
  return (
    <Card className="about-container">
      <h1 className="nav-title-style">Resume</h1>
      <div className="nav-line-style"></div>

      <h4>
        {" "}
        I am software Developer, have been working with web development since
        2016, the period during which I have worked in different environments,
        from big consultancy companies to start-ups. I am a self- motivated and
        self-taught professional who likes to solve problems. I merge a passion
        for usability and user experience with technical knowledge to create
        cool digital experiences.
      </h4>

      <h1 className="nav-title-style">Working Experience</h1>
      <div className="nav-line-style"></div>
      <div className="about-grid-style">
        <div>
          <Badge.Ribbon text="Fullstack Developer">
            <Card>
              <h2>Haza tech Ltd</h2>
              <p>
                <strong>07/2017 - Present, </strong> <br/>Rwanda Haza Tech Ltd is tech company founded
                in 2017 and officially launched in 2018 by group of seven young
                people with intentions to make people's and their lives much
                better using technology, is a business line in the areas of
                Information Technology, Communication, IT Security, Multimedia
                and Cyber security.{" "}
              </p>
            </Card>
          </Badge.Ribbon>
        </div>
        <div>
          <Badge.Ribbon text="Coding Learning Facilitator">
            <Card>
              <h2>Igire Rwanda @SheCanCode</h2>
              <p>
                <strong>07/2017 - Present, </strong> <br/>Rwanda Haza Tech Ltd is tech company founded
                in 2017 and officially launched in 2018 by group of seven young
                people with intentions to make people's and their lives much
                better using technology, is a business line in the areas of
                Information Technology, Communication, IT Security, Multimedia
                and Cyber s.{" "}
              </p>
            </Card>
          </Badge.Ribbon>
          <br/>
          <Badge.Ribbon text="Freelancer">
            <Card>
              <h2>Available for Coding</h2>
              <p>
                <strong>03/2021 - Present, </strong> <br/>
                Hire me now!
              </p>
            </Card>
          </Badge.Ribbon>
        </div>
      </div>
    </Card>
  );
};

export default ResumeComponent;
