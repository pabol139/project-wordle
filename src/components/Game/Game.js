import React from "react";
import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Results from "../Results";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// To make debugging easier, we'll log the solution in the console.

const STATUS = {
  running: "running",
  won: "happy",
  lost: "sad",
};

function Game() {
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState(STATUS.running);
  const [answer, setAnswer] = useState(() => sample(WORDS));
  console.info({ answer });

  const resetGame = () => {
    setResults([]);
    setStatus(STATUS.running);
    setAnswer(sample(WORDS));
  };

  const updateStatus = (result) => {
    if (
      result.some((element) => element.status !== "correct") &&
      results.length + 1 >= NUM_OF_GUESSES_ALLOWED
    ) {
      setStatus(STATUS.lost);
    } else if (!result.some((element) => element.status !== "correct")) {
      setStatus(STATUS.won);
    }
  };

  const updateResults = (value) => {
    const result = checkGuess(value, answer);
    updateStatus(result);

    const newResults = [...results, result];
    setResults(newResults);
  };

  return (
    <>
      <button onClick={resetGame}>RESET</button>
      <Results results={results}></Results>
      <GuessInput
        disabled={status !== STATUS.running}
        updateResults={updateResults}
      ></GuessInput>
      {status !== STATUS.running && (
        <>
          <Banner
            status={status}
            numberOfGuesses={results.length}
            answer={answer}
          ></Banner>
        </>
      )}
    </>
  );
}

export default Game;
