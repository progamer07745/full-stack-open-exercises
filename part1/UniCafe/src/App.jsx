import { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (feed) => {
    setFeedback((prev) => ({
      ...prev,
      [feed]: prev[feed] + 1,
    }));
  };

  const total = feedback.good + feedback.neutral + feedback.bad;

  const average = (
    (feedback.good + feedback.neutral - feedback.bad) /
    3
  ).toFixed(2);

  const positive = (((feedback.good + feedback.neutral) / total) * 100).toFixed(
    2,
  );

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="Good" onClick={() => handleFeedback("good")} />
      <Button text="Neutral" onClick={() => handleFeedback("neutral")} />
      <Button text="Bad" onClick={() => handleFeedback("bad")} />
      <br />
      {total > 0 ? (
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          average={average}
          positive={positive}
        />
      ) : (
        "No feedbacks given"
      )}
    </div>
  );
};

export default App;
