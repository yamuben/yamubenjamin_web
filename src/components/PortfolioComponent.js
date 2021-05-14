import React from "react";
import "./index.css";
import isuzume from "../assets/image/isuzume.png";
import hepay from "../assets/image/hepay.jpeg";
import cepu from "../assets/image/cepu.png";
import gilgal from "../assets/image/gilgal.png";
import blogpost from "../assets/image/blog.png";
import search from "../assets/image/search.png";
import { Card, Badge } from "antd";

const { Meta } = Card;

const PortfolioComponent = () => {
  return (
    <Card className="about-container">
      <h1 className="nav-title-style">Portfolio</h1>
      <div className="nav-line-style"></div>

      <h4>
        {" "}
   As Software Developer, there are some projects i worked on in different sectors, here i attached some protofolio...
      </h4>

      <div className="about-grid-style">
        <div>
          <a href="https://www.isuzume.rw" target="_blank">
            <Card
              hoverable
              style={{ marginBottom: "20px" }}
              cover={<img alt="example" src={isuzume} />}
            >
              <Meta
                title="www.isuzume.rw @Hazatech"
                description="With this Project i worked as Fullstack Engineer Node Js & MongooDB and React Js"
              />
            </Card>
          </a>
          <a href="http://cepurnyarugenge.org/" target="_blank">
            <Card
              hoverable
              style={{ marginBottom: "20px" }}
              cover={<img alt="example" src={cepu} />}
            >
              <Meta
                title="CEP UR Nyarugenge @Freelancer"
                description="www.cepurnyarugenge.org"
              />
            </Card>
          </a>
          <a href="http://www.ipgilgallaw.com/" target="_blank">
            <Card
              hoverable
              style={{ marginBottom: "20px" }}
              cover={<img alt="example" src={gilgal} />}
            >
              <Meta
                title="Gilgal Law @Freelancer"
                description="www.ipgilgallaw.com/"
              />
            </Card>
          </a>
        </div>
        <div>
            <Card
              hoverable
              style={{ width: 300, marginBottom: "20px" }}
              cover={<img alt="example" src={hepay} />}
            >
              <Meta
                title="Hospital ePayment @Hazatech"
                description="With this Project i worked as Fullstack Engineer Node Js & MongooDB and React Native Js"
              />
            </Card>
         
          <strong>
            <h2>Personal Projects:</h2>
          </strong>
          <a href="https://yamuben.github.io/schecancodeBlogpost/" target="_blank" >
            <Card
              hoverable
              style={{ width: 300, marginBottom: "20px" }}
              cover={<img alt="example" src={blogpost} />}
            >
              <Meta
                title="Blogpost UI "
                description="With this Project i worked on it during training @SheCanCode for Academic Purpose"
              />
            </Card>
          </a>
          <a href="https://yamuben.github.io/usa-city-searchEngine/" target="_blank" >
            <Card
              hoverable
              style={{ width: 300, marginBottom: "20px" }}
              cover={<img alt="example" src={search} />}
            >
              <Meta
                title="Search Engine USA Cities "
                description="With this Project i worked on it during training @SheCanCode for Academic Purpose fetching USA Cities API"
              />
            </Card>
          </a>
            <Card
              hoverable
              style={{ width: 300, marginBottom: "20px" }}
            //   cover={<img alt="example"  />}
            >
              <Meta
                title="Smart Chat Software (02/2015) "
                description="This was my first Software program that waked up my passion of coding. the Software was a chatting software via local network especially in our Computer Lab i collaborated with my one classmate this inspires me dream for becoming future coder "
              />
            </Card>
          
            <Card
              hoverable
              style={{ width: 300, marginBottom: "20px" }}
            //   cover={<img alt="example"  />}
            >
              <Meta
                title="ABS Software (03/2018) "
                description="This was Automatic Bell System Software program we make it when i started my University, was Software that would help students for time managment  "
              />
            </Card>
         
        </div>
      </div>
    </Card>
  );
};

export default PortfolioComponent;
