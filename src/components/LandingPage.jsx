import React, { useState } from "react";

import Drawer from "./Drawer";
import DerivativesPage from './DerivativesPage';
import CardContainer from "./CardContainer";
const LandingPage = () => {

  const [showContent, setShowContent] = useState(false);
  return (
    <React.Fragment>
      <Drawer />
      {showContent ? <DerivativesPage back={() => setShowContent(false)} /> : <CardContainer showDerivatives={() => setShowContent(true)} />}
    </React.Fragment>
  );
};

export default LandingPage;
