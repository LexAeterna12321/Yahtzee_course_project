import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    const clsName = `RuleRow RuleRow-${
      this.props.score !== undefined ? "disabled" : "active"
    }`;
    return (
      <tr className={clsName} onClick={this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    );
  }
}

export default RuleRow;
