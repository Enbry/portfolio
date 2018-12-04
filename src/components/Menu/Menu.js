import React from "react";
import "./Menu.scss";
import ReactSVG from "react-svg";
import logoHome from "../../images/home.svg";
import logoAbout from "../../images/about.svg";
import logoProjects from "../../images/projects.svg";
import logoContact from "../../images/contact.svg";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="vertical-menu">
        <ul>
          <li>
            <a>
              <ReactSVG
                src={logoHome}
                className="wrapper-logo"
                svgClassName="svg-home"
              />
            </a>
          </li>
          <li>
            <a>
              <ReactSVG
                src={logoAbout}
                className="wrapper-logo"
                svgClassName="svg-about"
              />
            </a>
          </li>
          <li>
            <a>
              <ReactSVG
                src={logoProjects}
                className="wrapper-logo"
                svgClassName="svg-projects"
              />
            </a>
          </li>
          <li>
            <a>
              <ReactSVG
                src={logoContact}
                className="wrapper-logo"
                svgClassName="svg-contact"
              />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
