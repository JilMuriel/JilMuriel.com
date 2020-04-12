import React from "react";
import "./home.scss";
import Navbar from "../../components/navbars/top-navbar/navbar";
import Hero from "../../components/hero/hero";
import Portfolio from "../../components/portfolio/portfolio";
import ParallaxBackground from '../../components/parallax/parallax';
class Home extends React.Component {
  render() {
    return (
      <>
        <ParallaxBackground />
        <Navbar />
        <Hero />
        <Portfolio />
      </>
    );
  }
}
export default Home;
