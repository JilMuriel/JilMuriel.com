import React from "react";
import "./button.scss";

const Button = ({ children, btnType, isSolid, ...otherProps }) => {
  return (
    <button
      className={`btn ${btnType === "bordered" ? "btn-bordered" : null} ${
        btnType === "solid" ? "btn-solid" : null
      } `}
    >
      {children}
    </button>
  );
};

export default Button;
