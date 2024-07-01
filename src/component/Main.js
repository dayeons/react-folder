import React, { Component } from "react";
import Header from "./Header";

class Main extends Component {
  render() {
    return (
      <div id="content">
        <Header />
        <div className="folder"></div>
      </div>
    );
  }
}

export default Main;
