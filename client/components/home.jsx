import React from "react";
import Header from "./header";
import Slider from "./slider";
import Footer from "./footer";
import Body from "./body";
import Body2 from "./body2";
import Testimonial from "./testimonials";
import Newsevents from "./newevents";
import Appointment from "./appointment";

const Home = () => {
  return (
    <div>
      
      <Header />
      <Slider />
      <Body />
      <Body2 />
      <Testimonial />
      <Newsevents />
      <Appointment />
      <Footer />
    </div>
  );
};

export default Home;
