import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [showState, setShowState] = useState(true);

  const prevClickHandler = () => {
    step <= 1 ? setStep(1) : setStep((prev) => prev - 1);
  };

  const nextClickHandler = () => {
    step >= 1 && step + 1 <= messages.length
      ? setStep((prev) => prev + 1)
      : setStep(step);
  };
  const showStepsHandler = () => {
    setShowState((prev) => !prev);
  };
  console.log(showState);
  return (
    <>
      <div className="close" onClick={showStepsHandler}>
        x
      </div>
      {showState && (
        <div className="steps">
          <div className="numbers">
            {messages.map((messag) => (
              <div
                key={messages.indexOf(messag)}
                className={
                  messages.indexOf(messag) + 1 === step ? "active" : ""
                }
              >
                {messages.indexOf(messag) + 1}
              </div>
            ))}
          </div>
          <p className="message">step {`${step} : ${messages[step - 1]}`}</p>

          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={prevClickHandler}
            >
              Previouse
            </button>
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={nextClickHandler}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
