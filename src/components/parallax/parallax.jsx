import React from "react";
import Parallax from "react-rellax";
import "./parallax.scss";

const ParallaxBackground = () => {
  return (
    <div className="bg-container">
      <Parallax speed={-1}>
        <div className="obj01"></div>
      </Parallax>
      <Parallax speed={1}>
        <div className="obj02"></div>
      </Parallax>
      <Parallax>
        <div className="obj03"></div>
      </Parallax>
      <Parallax speed={-2}>
        <div className="dot-obj01"></div>
      </Parallax>
      <Parallax speed={1}>
        <div className="dot-obj02"></div>
      </Parallax>
    </div>
  );
};

export default ParallaxBackground;
