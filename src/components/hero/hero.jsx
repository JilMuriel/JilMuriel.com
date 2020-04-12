import React from "react";
import "./hero.scss";
import Button from "../button/button";
import Parallax from "react-rellax";
const Hero = (props) => {
  return (
    <>

      <div className="hero-container">
        <section>
          <Parallax speed={-3}>
            <h3 className="title-intro">
              <span>HELLO</span>, IM JIL MURIEL
            </h3>
            <h1 className="title-main">FRONTEND DEVELOPER</h1>
            <h4 className="title-foot">
              UI/UX Designer & Drinks a lot of Coffee
            </h4>
            <Button btnType="md" btnType="solid">
              Hire Me
            </Button>
            <Button btnType="md" btnType="bordered">
              Get CV
            </Button>
          </Parallax>
        </section>
      </div>
    </>
  );
};

export default Hero;
