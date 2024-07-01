import React, { Component } from "react";
import TimeDisplay from "../shared/TimeDisplay";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.getCurrentTime(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: this.getCurrentTime(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getCurrentTime() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    const session = h >= 12 ? "PM" : "AM";

    h = h % 12 || 12;
    m = m < 10 ? "0" + m : m;

    return `${h}:${m} ${session}`;
  }

  render() {
    return (
      <div id="nav">
        <button type="button" className="btn btn-start">
          Start
        </button>
        <div className="menu-container">
          <div className="name">
            <b>dayeon</b>
            <span>92</span>
          </div>
          <nav className="menu">
            <ul>
              <li>
                Programs
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              </li>
              <li>
                Documents
                <ul>
                  <li>비어있음</li>
                </ul>
              </li>
              <li>Settings</li>
              <li>Find</li>
              <li>Help</li>
              <li>Shut Down</li>
            </ul>
          </nav>
        </div>
        <div className="time">
          <TimeDisplay time={this.state.time} />
        </div>
      </div>
    );
  }
}

export default Footer;
