import { useState } from 'react';

function Question(props) {
    const type = props.questionData.type;
    const correctAnswer = props.questionData.correct_answer;
    const incorrectAnswers = props.questionData.incorrect_answers;
    let randNum = Math.round(Math.random() * (4 - 1) + 1);
    const [choice, setChoice] = useState("");


    return <div>
        {choice}
        <h2>{props.questionData.question}</h2>
        {type === "boolean" &&
            <>
                {correctAnswer === "True" &&
                    <ul>
                        <li><button onClick={e => setChoice("right")}>True</button></li>
                        <li><button onClick={e => setChoice("wrong")}>False</button></li>
                    </ul>
                }
                {correctAnswer === "False" &&
                    <ul>
                        <li><button onClick={e => setChoice("wrong")}>True</button></li>
                        <li><button onClick={e => setChoice("right")}>False</button></li>
                    </ul>
                }
            </>
        }
        {type === "multiple" &&
            <>
                {randNum === 1 &&
                    <ul>
                        <li><button onClick={e => setChoice("right")}>{correctAnswer}</button> - C</li>
                        <li>{incorrectAnswers[0]}</li>
                        <li>{incorrectAnswers[1]}</li>
                        <li>{incorrectAnswers[2]}</li>
                    </ul>
                }
                {randNum === 2 &&
                    <ul>
                        <li>{incorrectAnswers[0]}</li>
                        <li><button onClick={e => setChoice("right")}>{correctAnswer}</button> - C</li>
                        <li>{incorrectAnswers[1]}</li>
                        <li>{incorrectAnswers[2]}</li>
                    </ul>
                }
                {randNum === 3 &&
                    <ul>
                        <li>{incorrectAnswers[0]}</li>
                        <li>{incorrectAnswers[1]}</li>
                        <li><button onClick={e => setChoice("right")}>{correctAnswer}</button> - C</li>
                        <li>{incorrectAnswers[2]}</li>
                    </ul>
                }
                {randNum === 4 &&
                    <ul>
                        <li>{incorrectAnswers[0]}</li>
                        <li>{incorrectAnswers[1]}</li>
                        <li>{incorrectAnswers[2]}</li>
                        <li><button onClick={e => setChoice("right")}>{correctAnswer}</button> - C</li>
                    </ul>
                }
            </>
        }
    </div>;
};

export default Question;