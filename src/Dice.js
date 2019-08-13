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
    const { dice, rollsLeft, toggleLocked, locked, isRolling } = this.props;
    return (
      <div className="Dice">
        {dice.map((d, idx) => (
          <Die
            rollsLeft={rollsLeft}
            toggleLocked={toggleLocked}
            val={d}
            icon={this.props[d]}
            locked={locked[idx]}
            idx={idx}
            key={idx}
            isRolling={isRolling}
          />
        ))}
      </div>
    );
  }
}

export default Dice;
