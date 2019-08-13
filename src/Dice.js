import React, { Component } from "react";
import Die from "./Die";
import "./Dice.css";

class Dice extends Component {
  static defaultProps = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six"
  };
  render() {
    return (
      <div className="Dice">
        {this.props.dice.map((d, idx) => (
          <Die
            rollsLeft={this.props.rollsLeft}
            toggleLocked={this.props.toggleLocked}
            val={d}
            icon={this.props[d]}
            locked={this.props.locked[idx]}
            idx={idx}
            key={idx}
            isRolling={this.props.isRolling}
          />
        ))}
      </div>
    );
  }
}

export default Dice;
