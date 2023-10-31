import React from "react";
import "./style.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollProgress);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollProgress);
  }

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

    console.log(scrolled);

    this.setState({
      scrolled: scrolled,
    });
  };

  render() {
    const progressContainerStyle = {
      background: "#f8bbd0",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
      height: "5px",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      zIndex: 99,
    };

    const progressBarStyle = {
      height: "5px",
      background: "#e91e63",
      width: this.state.scrolled,
    };

    return (
      <div>
        <div className="progress-container" style={progressContainerStyle}>
          <div className="progress-bar" style={progressBarStyle} />
        </div>
        <div className="content">
          <h1>
            <div className="arrow-down" />
          </h1>
          <br />
          <h1>S</h1>
          <h1>C</h1>
          <h1>R</h1>
          <h1>O</h1>
          <h1>L</h1>
          <h1>L</h1>
          <br />
          <h1>O</h1>
          <h1>N</h1>
          <br />
          <h1>
            <div className="arrow-down" />
          </h1>
          <br />
          <h1>S</h1>
          <h1>C</h1>
          <h1>R</h1>
          <h1>O</h1>
          <h1>L</h1>
          <h1>L</h1>
          <br />
          <h1>O</h1>
          <h1>N</h1>
          <br />
          <h1>
            <div className="arrow-down" />
          </h1>
          <br />
          <h1>S</h1>
          <h1>C</h1>
          <h1>R</h1>
          <h1>O</h1>
          <h1>L</h1>
          <h1>L</h1>
          <br />
          <h1>O</h1>
          <h1>N</h1>
          <br />
          <h1>
            <div className="arrow-down" />
          </h1>
          <br />
          <h1>T</h1>
          <h1>H</h1>
          <h1>E</h1>
          <br />
          <h1>E</h1>
          <h1>N</h1>
          <h1>D</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
