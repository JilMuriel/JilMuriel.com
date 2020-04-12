import React from "react";
import "./home.scss";
import Navbar from "../../components/navbars/top-navbar/navbar";
import Hero from "../../components/hero/hero";
import Portfolio from "../../components/portfolio/portfolio";

class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <Portfolio />
      </>
    );
  }
}
export default Home;
