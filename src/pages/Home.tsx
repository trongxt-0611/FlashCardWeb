import { Divider } from "@chakra-ui/react";
import React from "react";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Pricing from "../components/Pricing";
// import Testimonials from "../components/Testimonials";
import WrapContainer from "../components/WrapContainer";

const Home = () => {
  return (
    <>
      <Nav />
      <WrapContainer>
        <Hero />
        <Divider my={8} />
        <Feature />
        <Divider my={8} />
        {/* <Testimonials />
        <Divider my={8} /> */}
        <Pricing />
        <Divider my={8} />
        <Footer />
      </WrapContainer>
    </>
  );
};

export default Home;
