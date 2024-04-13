import React from "react";
import Navigation from "../Navigation/Navigation.jsx";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
