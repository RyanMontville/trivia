import React, { useState, useEffect } from "react";
import Question from "../components/Question";

function Game(props) {
    let results = props.data;
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        if(answer==="right") {
            props.setScore(currentScore => {
                return currentScore + 1
            });
        } else {
        }
        setAnswer("")
    },[answer, props]);

    return <main>
        {results.map(question => (
            <Question questionData={question} answer={answer} setAnswer={setAnswer} />
        ))}
        
    </main>;
};

export default Game;