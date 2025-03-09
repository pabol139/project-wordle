import { range } from "../utils";

export default function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span key={index} className={`cell ${guess && guess[index].status}`}>
          {guess && guess[index].letter}
        </span>
      ))}
    </p>
  );
}
