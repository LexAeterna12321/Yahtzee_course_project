import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    const clsName = `RuleRow RuleRow-${
      this.props.score !== undefined ? "disabled" : "active"
    }`;
    const properName = this.props.name.split(" ").join("");

    const currentInfo =
      this.props.score !== undefined
        ? this.props.score
        : this.props.info[properName];
    return (
      <tr className={clsName} onClick={this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{currentInfo}</td>
      </tr>
    );
  }
}

export default RuleRow;
