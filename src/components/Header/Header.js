import React from "react";
import "./Header.scss";
import ReactSVG from "react-svg";
import logo from "../../images/logo.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      menuHeight: { height: 0 }
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    if (this.state.isOpen) {
      this.setState({
        menuHeight: { height: 0 },
        isOpen: !this.state.isOpen
      });
    } else {
      this.setState({
        menuHeight: { height: "100vh" },
        isOpen: !this.state.isOpen
      });
    }
  }

  render() {
    return (
      <div className="header">
        <ReactSVG src={logo} className="wrapper-logo" svgClassName="svg-logo" />
        <div className="wrapper-menu">
          <div
            className={"toggle-container " + (this.state.isOpen ? "open" : "")}
            onClick={this.toggleMenu}
          >
            <div className="burger">
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </div>
          </div>
          <div className="menu" style={this.state.menuHeight}>
            <ul>
              <li>
                <a onClick={this.toggleMenu}>accueil</a>
              </li>
              <li>
                <a onClick={this.toggleMenu}>à propos</a>
              </li>
              <li>
                <a href="" onClick={this.toggleMenu}>
                  projets
                </a>
              </li>
              <li>
                <a href="" onClick={this.toggleMenu}>
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
