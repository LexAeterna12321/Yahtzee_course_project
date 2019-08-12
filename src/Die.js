import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  handleClick = () => {
    this.props.toggleLocked(this.props.idx);
  };
  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClick}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
