import React from "react";
import "./index.css";
import "antd/dist/antd.css";
import meAbout from "../assets/image/me-about.jpg";
import qrContact from "../assets/image/ben Address contact qr.png";
import {
  RightOutlined,
  GlobalOutlined,
  GooglePlusOutlined,
  PhoneOutlined,
  AimOutlined,
} from "@ant-design/icons";
import { Progress, Image, Card, Divider, Tag } from "antd";
const AboutComponent = () => {
  return (
    <Card className="about-container">
      <h1 className="nav-title-style">About</h1>
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

      <div className="about-grid-style">
        <Image.PreviewGroup className="meAbout-style">
          <Image width={300} src={meAbout} className="meAbout-style" />
        </Image.PreviewGroup>
        <div style={{ textAlign: "left" }}>
          <h1
            className="nav-title-style"
            style={{ textAlign: "center", marginBottom: "15px" }}
          >
            UI/UX Designer & Fullstack Developer.
          </h1>
          <div className="about-grid-style">
            <ul>
              <il>
                <strong>
                  {" "}
                  <RightOutlined className="arrow-icon" /> Names:
                </strong>{" "}
                <span> IYAMUREMYE Benjamin </span>
              </il>{" "}
              <br />
              <il>
                <strong>
                  {" "}
                  <GlobalOutlined className="arrow-icon" />{" "}
                </strong>
                {"    "}
                <span> www.yamubenjamin.dev</span>
              </il>{" "}
              <br />
              <il>
                <strong>
                  {" "}
                  <GooglePlusOutlined className="arrow-icon" />{" "}
                </strong>{" "}
                <span> yamubbenjamin@gmail.com</span>
              </il>{" "}
              <br />
              <il>
                <strong>
                  {" "}
                  <PhoneOutlined className="arrow-icon" />{" "}
                </strong>{" "}
                <span> +250 787 082 328</span>
              </il>{" "}
              <br />
              <il>
                <strong>
                  {" "}
                  <AimOutlined className="arrow-icon" />{" "}
                </strong>{" "}
                <span> Rwanda / Kigali City</span>
              </il>{" "}
              <br />
              <il>
                <strong>
                  {" "}
                  <RightOutlined className="arrow-icon" /> Freelancer:{" "}
                </strong>{" "}
                <span> Am Available </span>
              </il>{" "}
              <br />
            </ul>

            <img src={qrContact} alt="me" />
          </div>
        </div>
      </div>

      <h1 className="nav-title-style">Skills</h1>
      <div className="nav-line-style"></div>

      <div className="about-grid-style" style={{background:"#f0f2f4"}}>
        <div>
          {/* <Progress type="circle" percent={90} format={percent => `${percent} %`} /> */}
          <strong>
            <h3>Backend Development</h3>
          </strong>
          <strong> Node Js</strong>
          <Progress percent={85} status="active" />
          <strong> Spring-Boot </strong>
          <Progress percent={70} status="active" />
        </div>
        <div>
          {/* <Progress type="circle" percent={80} format={percent => `${percent} %`}/> */}
          <strong>
            <h3>Frontend Development</h3>
          </strong>
          <strong> React Js</strong>
          <Progress percent={78} status="active" />
          <strong> Android</strong>
          <Progress percent={84} status="active" />
          <strong> React Native </strong>
          <Progress percent={81} status="active" />
          <strong> Figma UI/UX-Design</strong>
          <Progress percent={89} status="active" />
        </div>
      </div>

      <Divider orientation="left">Other Skills</Divider>
      <div>
        <Tag color="green" className="tag-style">
          MongoDB
        </Tag>
        <Tag color="gold">MySQL</Tag>
        <Tag color="lime">Postgress</Tag>
        <Tag color="green">Android</Tag>
        <Tag color="cyan">Java SE</Tag>
        <Tag color="cyan">JSP Servelet</Tag>
        <Tag color="black">C++</Tag>
        <Tag color="blue">C#</Tag>
        <Tag color="purple">HTML</Tag>
        <Tag color="purple">CSS</Tag>
        <Tag color="green">JavaScript</Tag>
        <Tag color="green">PHP</Tag>
        <Tag color="green" >Node Js</Tag>
        <Tag color="cyan">React JS</Tag>
        <Tag color="cyan">Wordpress</Tag>
        <Tag color="cyan">Web Template Bootstrap</Tag>
        <Tag color="cyan">Data Structures</Tag>
        <Tag color="purple">Adobe XD</Tag>
        <Tag color="green">Figma</Tag>
        <Tag color="geekblue">NGIX</Tag>
        <Tag color="volcano">Xampp</Tag>
        <Tag color="volcano">Heroku</Tag>
        <Tag color="orange">Pivotal Tracker</Tag>
        <Tag color="gold">AWS</Tag>
        <Tag color="gold">Github</Tag>
        <Tag color="lime">Netlify</Tag>
      </div>
    </Card>
  );
};

export default AboutComponent;
