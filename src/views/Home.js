import React from "react";

import MainLayout from "../components/MainLayout";
import HomeComponent from "../components/HomeComponent";
import AboutComponent from "../components/AboutComponent";
import ResumeComponent from "../components/ResumeComponent";
import PortfolioComponent from "../components/PortfolioComponent";
import { BackTop } from 'antd';
import{UpCircleFilled} from "@ant-design/icons";

const style = {
  height: 40,
  width: 40,
  padding:'2 2 2 2',
  lineHeight: '40px',
  borderRadius: '50%',
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 34,
};
const Home = () => {
  return (
    <MainLayout>
      <HomeComponent />
      <AboutComponent />
      <ResumeComponent />
      <PortfolioComponent/>

      <BackTop>
      <UpCircleFilled style={style}/>
    </BackTop>
    </MainLayout>
  );
};
export default Home;
