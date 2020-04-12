import React from "react";

import "./burger-animation.scss";
import "./burger.scss";


class Burger extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isActive: false,
    };
  }
  handleClick = () => {
    const activeState = !this.state.isActive ? true : false;
    this.setState({ isActive: activeState });
    console.log("activeState", activeState);
  };
  render() {
    return (
      <div
        className={`hamburger hamburger--collapse ${
          this.state.isActive ? "is-active" : null
        }`}
        type="button"
        onClick={this.handleClick}
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </div>
    );
  }
}

export default Burger;
