import React from "react";
import "./index.css";
import back from "../assets/image/back.jpg";
import Typewriter from "typewriter-effect";
import {Card,Space,Spin} from "antd";

const HomeComponent = () => {
  return (
    <Card className="home-container">

  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
    <Spin/>

    <Spin size="small" />
  </Space>
      <h1 className="name-style">Eng. IYAMUREMYE Benjamin</h1>
      {/* <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p> */}

<p className="iam-style">
    I am :       
    <Typewriter
    options={{
        strings: ['Software Developer', 'Software Freelancer','Software Engineer'],
        autoStart: true,
        loop: true,
      }}
      />
    </p>I

    </Card>
  );
};

export default HomeComponent;
