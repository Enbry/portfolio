import React from "react";
import "./Home.scss";
import ReactSVG from "react-svg";
import letterN from "../../images/n.svg";
import letterB from "../../images/b.svg";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="home">
          <div className="title">
            <h1>
              <ReactSVG
                src={letterN}
                className="wrapper-title"
                svgClassName="letter-n"
              />
              <ReactSVG
                src={letterB}
                className="wrapper-title"
                svgClassName="letter-b"
              />
            </h1>
            <h2>Développeur front end</h2>
          </div>
          <div className="canvas" />
        </div>
        <div class="bomb" />
      </div>
    );
  }
}

export default Home;
