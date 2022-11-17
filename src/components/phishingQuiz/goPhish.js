import React from "react";
import "./goPhish.css";
import Quiz from "./Quiz";
import { QuizProvider } from "./context/quiz";
import { Scam } from "../../containers";

const goPhish = () => {
  return (
    <QuizProvider>
      {/* <Scam /> */}
      <Quiz />
    </QuizProvider>
  );
};

export default goPhish;
