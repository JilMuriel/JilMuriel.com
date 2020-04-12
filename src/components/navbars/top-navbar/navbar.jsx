import React from "react";
import "./navbar.scss";
import Burger from "../burger/burger";
import Logo from "../../../assets/img/logo.svg";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burger: false,
    };
  }
  handleClick = () => {
    this.setState({ burger: !this.state.burger ? true : false });
  }
  render() {
      console.log(this.state.burger);
    return (
      <header>
        <div className="icon">
          <img src={Logo} alt="MDev" />
        </div>
        <Burger />
        <nav className="navbar">
          <ul>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">PORTOLIO</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
