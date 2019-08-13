import React from "react";
import PropTypes from "prop-types";

const OverallScore = ({ scores }) => {
  const sumScore = scores => {
    return Object.values(scores).reduce((prevScore, score) => {
      if (score !== undefined) {
        return prevScore + score;
      } else {
        return prevScore;
      }
    }, 0);
  };

  const score = sumScore(scores);

  return (
    <h3 style={{ color: "#673ab7", fontSize: "2rem" }}>
      Total score: <span>{score}</span>
    </h3>
  );
};

OverallScore.propTypes = {
  scores: PropTypes.object.isRequired
};

export default OverallScore;
