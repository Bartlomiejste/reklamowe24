import React from "react";
import Layout from "../../components/layout/Layout";
import SimpleSlider from "../../components/Slider/SimpleSlider";
import CategorySlider from "../../components/CategorySlider/CategorySlider";
import Bestsellery from "../../components/Bestsellery/Bestsellery";
import Process from "../../components/Process/Process";
import ScrollToTop from "../../utils/ScrollToTop/ScrollToTop";

const Main = () => {
  return (
    <Layout>
      <SimpleSlider />
      <CategorySlider />
      <Bestsellery />
      <Process />
      <ScrollToTop />
    </Layout>
  );
};

export default Main;
