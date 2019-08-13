import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";
import OverallScore from "./OverallScore";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      isRolling: false,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      }
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.animateRoll = this.animateRoll.bind(this);
  }
  componentDidMount() {
    const dice = this.state.dice.map(() => Math.ceil(Math.random() * 6));
    this.setState({ dice });
  }
  animateRoll() {
    this.setState({ isRolling: true }, () => {
      setTimeout(() => {
        this.setState({ isRolling: false });
      }, 1000);
    });
  }

  roll() {
    // roll dice whose indexes are in reroll
    this.setState(st => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),

      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1
    }));
    this.animateRoll();
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    this.setState(st => ({
      locked: [
        ...st.locked.slice(0, idx),
        !st.locked[idx],
        ...st.locked.slice(idx + 1)
      ]
    }));
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState(st => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false)
    }));
    const dice = this.state.dice.map(() => Math.ceil(Math.random() * 6));
    this.setState({ dice });
    this.animateRoll();
  }

  displayRollMessage() {
    const message = [
      "0 Rolls left",
      "1 Roll left",
      "2 Rolls left",
      "Start Rolling"
    ];
    return message[this.state.rollsLeft];
  }

  render() {
    const { rollsLeft, locked, dice, isRolling, scores } = this.state;
    return (
      <div className="Game">
        <header className="Game-header">
          <h1 className="App-title">Yahtzee!</h1>

          <section className="Game-dice-section">
            <Dice
              rollsLeft={rollsLeft}
              dice={dice}
              locked={locked}
              toggleLocked={this.toggleLocked}
              isRolling={isRolling}
            />
            <div className="Game-button-wrapper">
              <button
                className="Game-reroll"
                disabled={locked.every(x => x) || isRolling}
                onClick={this.roll}
              >
                {this.displayRollMessage()}
              </button>
            </div>
          </section>
        </header>
        <ScoreTable doScore={this.doScore} scores={scores} />
        <OverallScore scores={scores} />
      </div>
    );
  }
}

export default Game;
