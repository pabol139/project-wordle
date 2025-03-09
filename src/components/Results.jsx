import Guess from "./Guess";
import { range } from "../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";

export default function Results({ results }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} guess={results[index]}></Guess>
      ))}
    </div>
  );
}
