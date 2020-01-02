import React, { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
const Index = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Index;
