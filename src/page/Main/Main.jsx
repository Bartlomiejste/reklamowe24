import React from "react";
import Layout from "../../components/layout/Layout";
import SimpleSlider from "../../components/Slider/SimpleSlider";
import CategorySlider from "../../components/CategorySlider/CategorySlider";
import Bestsellery from "../../components/Bestsellery/Bestsellery";
import Process from "../../components/Process/Process";
import ScrollToTopButton from "../../utils/ScrolltoTopButton/ScrollToTopButton";

const Main = () => {
  return (
    <Layout>
      <SimpleSlider />
      <CategorySlider />
      <Bestsellery />
      <Process />
      <ScrollToTopButton />
    </Layout>
  );
};

export default Main;
