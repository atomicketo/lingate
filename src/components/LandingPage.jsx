import React from "react";
import Header from "./Header";
import Drawer from "./Drawer";
import CardContainer from "./CardContainer";
const LandingPage = () => {
  return (
    <React.Fragment>
      <Drawer />
      <CardContainer />
    </React.Fragment>
  );
};

export default LandingPage;
