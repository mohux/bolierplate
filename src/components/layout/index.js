import React, { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";

const Index = ({ children }) => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer className="footer bg-dark">
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Index;
