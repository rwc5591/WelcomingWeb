import { useContext } from "react";
import { QuizContext } from "./context/quiz";
import Question from "./Question";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="quiz">
      {quizState.showResults && !quizState.isBeginning && (
        <div className="results">
          <div className="congratulations">Congratulations</div>
          <div className="results-info">
            <div>You have completed the quiz</div>
            <div>
              You got {quizState.correctAnswerCount} of{" "}
              {quizState.questions.length} right.
            </div>
            <div
              className="next-button"
              onClick={() => dispatch({ type: "RESTART" })}
            >
              Restart
            </div>
          </div>
        </div>
      )}

      {!quizState.showResults && !quizState.isBeginning && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1} /
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next Question
          </div>
        </div>
      )}

      {!quizState.showResults && quizState.isBeginning && (
        <div>
          <div className="results">
            <div className="results-info">
              <h2>How to Identify a scam</h2>
              <ul className="list">
                <li>
                  Anonymous sources offering quick cash or large amounts of
                  money
                </li>
                <li>
                  Emails with suspicious domains (domains being anything
                  following the @)
                </li>
                <li>
                  It requires you to respond quickly which can make you make
                  worse decisions{" "}
                </li>
                <li>Asks to Click on a link or download something</li>
                <li>From well known companies but with misspelled</li>
                <li>
                  Emails claiming to be government agencies with non ‘.gov’
                  email addresses
                </li>
                <li>
                  Emails telling you to download content you did not ask for and
                  can’t verify
                </li>
                <li>Contains a threat if you don't act on email</li>
                <li>
                  Random content offering money, sex, or job opportunities from
                  unknown sources
                </li>
                <li>Spelling or grammar mistakes</li>
                {/* <li>With characters your computer does not recognize</li>
          
                <li>Calls from unknown numbers</li>
                <li>Emails claiming to be an entity from a random email</li>
                <li>Texts claiming identities you were not suspecting </li>
                <li>Overcomplicated links</li>
                
                <li>Not addressed to you directly</li>
                
                
                <li>Websites that automatically download things for you that you didn’t request</li> */}
              </ul>
              <div
                className="next-button"
                onClick={() => dispatch({ type: "START" })}
              >
                Got it? Click to begin Quiz.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Quiz;
