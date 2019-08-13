import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    const { score, info, doScore, name } = this.props;
    const clsName = `RuleRow RuleRow-${
      score !== undefined ? "disabled" : "active"
    }`;
    const properName = name.split(" ").join("");
    const currentInfo = score !== undefined ? score : info[properName];

    return (
      <tr className={clsName} onClick={doScore}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{currentInfo}</td>
      </tr>
    );
  }
}

export default RuleRow;
