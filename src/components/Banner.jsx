function GoodAnswer({ numberOfGuesses }) {
  return (
    <p>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{numberOfGuesses} guesses</strong>
    </p>
  );
}

function BadAnswer({ answer }) {
  return (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>
    </p>
  );
}

export default function Banner({ status, numberOfGuesses, answer }) {
  return (
    <div className={status ? `banner ${status}` : "banner"}>
      {status === "happy" ? (
        <GoodAnswer numberOfGuesses={numberOfGuesses}></GoodAnswer>
      ) : (
        <BadAnswer answer={answer}></BadAnswer>
      )}
    </div>
  );
}
