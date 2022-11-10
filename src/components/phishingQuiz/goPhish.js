import React from "react";
import "./goPhish.css";
import Quiz from "./Quiz";
import { QuizProvider } from "./context/quiz";

const goPhish = () =>{
    return(
<QuizProvider>
    <Quiz />
</QuizProvider>
);
}

export default goPhish