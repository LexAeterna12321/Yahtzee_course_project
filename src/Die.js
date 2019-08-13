import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  handleClick = () => {
    this.props.toggleLocked(this.props.idx);
  };
  render() {
    const { locked, isRolling, rollsLeft, icon } = this.props;
    return (
      <button
        disabled={rollsLeft === 0}
        className={`Die ${locked && "Die-locked"} ${isRolling &&
          !locked &&
          "Die-rolling"}`}
        style={{ color: locked ? "#ae7ae5" : "white" }}
        onClick={this.handleClick}
      >
        <i className={`fas fa-dice-${icon}`} />
      </button>
    );
  }
}

export default Die;
