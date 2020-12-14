import React from "react";
import { QuestionCardTypes} from "./../Types/QuizTypes";
import {ButtonWrapperProps,Wrapper} from "./QuestionCard.styles"
const QuestionCard: React.FC<QuestionCardTypes> = ({
  question,
  questionNumber,
  totalQuestion,
  callback,
  userAnswer,
  answers,
}) => {
  return (
    <Wrapper>
      <p>
        Question: {questionNumber}/{totalQuestion}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer,ind) => (
          <ButtonWrapperProps 
          correct={userAnswer?.correctAnswer===answer}
          userClicked={userAnswer?.answer===answer}
          key={ind}>
            <button disabled={userAnswer? true:false}  value={answer}onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapperProps>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
