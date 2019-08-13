import React, { Component } from "react";
import RuleRow from "./RuleRow";
import "./ScoreTable.css";
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance
} from "./Rules";

class ScoreTable extends Component {
  static defaultProps = {
    info: {
      Ones: "1 point per 1",
      Twos: "2 points per 2",
      Threes: "3 points per 3",
      Fours: "4 points per 4",
      Fives: "5 points per 5",
      Sixes: "6 points per 6",
      ThreeofKind: "Sum all dice if 3 are the same",
      FourofKind: "Sum all dice if 4 are the same",
      FullHouse: "25 points for a full house",
      SmallStraight: "30 points for a small straight",
      LargeStraight: "40 points for a large straight",
      Yahtzee: "50 points for yahtzee",
      Chance: "Summ of all dice"
    }
  };
  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Ones"
                score={scores.ones}
                doScore={evt => doScore("ones", ones.evalRoll)}
                info={this.props.info}
              />
              <RuleRow
                name="Twos"
                score={scores.twos}
                info={this.props.info}
                doScore={evt => doScore("twos", twos.evalRoll)}
              />
              <RuleRow
                name="Threes"
                score={scores.threes}
                info={this.props.info}
                doScore={evt => doScore("threes", threes.evalRoll)}
              />
              <RuleRow
                name="Fours"
                score={scores.fours}
                info={this.props.info}
                doScore={evt => doScore("fours", fours.evalRoll)}
              />
              <RuleRow
                name="Fives"
                score={scores.fives}
                info={this.props.info}
                doScore={evt => doScore("fives", fives.evalRoll)}
              />
              <RuleRow
                name="Sixes"
                score={scores.sixes}
                info={this.props.info}
                doScore={evt => doScore("sixes", sixes.evalRoll)}
              />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Three of Kind"
                score={scores.threeOfKind}
                info={this.props.info}
                doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)}
              />
              <RuleRow
                name="Four of Kind"
                score={scores.fourOfKind}
                info={this.props.info}
                doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)}
              />
              <RuleRow
                name="Full House"
                score={scores.fullHouse}
                info={this.props.info}
                doScore={evt => doScore("fullHouse", fullHouse.evalRoll)}
              />
              <RuleRow
                name="Small Straight"
                score={scores.smallStraight}
                info={this.props.info}
                doScore={evt =>
                  doScore("smallStraight", smallStraight.evalRoll)
                }
              />
              <RuleRow
                name="Large Straight"
                score={scores.largeStraight}
                info={this.props.info}
                doScore={evt =>
                  doScore("largeStraight", largeStraight.evalRoll)
                }
              />
              <RuleRow
                name="Yahtzee"
                score={scores.yahtzee}
                info={this.props.info}
                doScore={evt => doScore("yahtzee", yahtzee.evalRoll)}
              />
              <RuleRow
                name="Chance"
                score={scores.chance}
                info={this.props.info}
                doScore={evt => doScore("chance", chance.evalRoll)}
              />
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default ScoreTable;
