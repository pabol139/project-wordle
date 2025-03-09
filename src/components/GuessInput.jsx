import { useState } from "react";

export default function GuessInput({ disabled, updateResults }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    updateResults(value);
    setValue("");
    console.log(value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={disabled}
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={value}
        onChange={(e) => setValue(e.target.value.toUpperCase())}
      />
    </form>
  );
}
