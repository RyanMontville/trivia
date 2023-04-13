import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Home(props) {
    let navigate = useNavigate();
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [numQuestions, setNumQuestions] = useState(10);

    

    async function getQuestions() {
        axios.get(`https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}`)
            .then((response) => {
                props.setData(response.data.results);
                props.setTriviaCategory(response.data.results[0].category);
            })
    }

    function startGame() {
        let catName = "";
        switch (category) {
            case "9": catName = "general"; break;
            case "10": catName = "books"; break;
            case "11": catName = "film"; break;
            case "12": catName = "music"; break;
            case "13": catName = "musicals-theater"; break;
            case "14": catName = "television"; break;
            case "15": catName = "video-games"; break;
            case "16": catName = "board-games"; break;
            case "17": catName = "science-nature"; break;
            case "18": catName = "computers"; break;
            case "19": catName = "mathematics"; break;
            case "20": catName = "mythology"; break;
            case "21": catName = "sports"; break;
            case "22": catName = "geography"; break;
            case "23": catName = "history"; break;
            case "24": catName = "politics"; break;
            case "25": catName = "art"; break;
            case "26": catName = "celebrities"; break;
            case "27": catName = "animals"; break;
            case "28": catName = "vehicles"; break;
            case "29": catName = "comics"; break;
            case "30": catName = "gadgets"; break;
            case "31": catName = "anime-manga"; break;
            case "32": catName = "cartoons-animation"; break;
            default: catName = "error"; break;
        }
        props.setNum0fQuestions(numQuestions);
        getQuestions();
        navigate(`/${catName}`);
    }

    return <div id="start-screen">
        <h2>Choose your</h2>
        <div class="select">
            <select
                class="select-text"
                value={category}
                onChange={e => setCategory(e.target.value)}
                required>
                <option value="" disabled selected></option>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Musicals &amp; Theatres</option>
                <option value="14">Entertainment: Television</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="16">Entertainment: Board Games</option>
                <option value="17">Science &amp; Nature</option>
                <option value="18">Science: Computers</option>
                <option value="19">Science: Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Entertainment: Comics</option>
                <option value="30">Science: Gadgets</option>
                <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                <option value="32">Entertainment: Cartoon &amp; Animations</option>
            </select>
            <span class="select-highlight"></span>
            <span class="select-bar"></span>
            <label class="select-label">Category</label>
        </div>

        <div class="select">
            <select
                class="select-text"
                value={difficulty}
                onChange={e => setDifficulty(e.target.value)}
                required>
                <option value="" disabled selected></option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <span class="select-highlight"></span>
            <span class="select-bar"></span>
            <label class="select-label">Difficulty</label>
        </div>
        <div class="material-textfield">
            <input placeholder=" " type="number" onChange={e => setNumQuestions(e.target.value)} />
            <label>Number of Questions</label>
        </div>
        <section class="start-btn">
            <button class="btn" onClick={startGame}>START</button>
        </section>
    </div>;
};

export default Home;