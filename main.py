from flask import Flask, render_template, redirect, url_for, request
import requests
from question_model import Question
from trivia_brain import TriviaBrain
import random

app = Flask(__name__)


trivia = TriviaBrain([], "")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/submit-form", methods=["POST"])
def submit_form():
    # Get input values from form
    category = request.form["category"]
    difficulty = request.form["difficulty"]
    num_questions = request.form["numOfQuestions"]
    trivia_url = f"https://opentdb.com/api.php"
    parameters = {
        "amount": num_questions,
        "category": category,
        "difficulty": difficulty
    }
    # Get trivia data from Open Trivia Database
    response = requests.get(url=trivia_url, params=parameters)
    response.raise_for_status()
    data = response.json()
    question_data = data["results"]
    # Create a list of question objects
    questions = []
    category = question_data[0]['category']
    for q in question_data:
        answers = []
        if q["type"] == "boolean":
            answers = ["True", "False"]
        else:
            # Randomize multiple choice answers
            shuffle = random.randint(1, 4)
            if shuffle == 1:
                answers = [q["correct_answer"], q["incorrect_answers"][0],
                           q["incorrect_answers"][1], q["incorrect_answers"][2]]
            elif shuffle == 2:
                answers = [q["incorrect_answers"][0], q["correct_answer"],
                           q["incorrect_answers"][1], q["incorrect_answers"][2]]
            elif shuffle == 3:
                answers = [q["incorrect_answers"][0], q["incorrect_answers"][1],
                           q["correct_answer"], q["incorrect_answers"][2]]
            else:
                answers = [q["incorrect_answers"][0], q["incorrect_answers"][1],
                           q["incorrect_answers"][2], q["correct_answer"]]
        new_question = Question(q["question"], answers, q["correct_answer"], q["type"])
        questions.append(new_question)
    global trivia
    trivia = TriviaBrain(questions, category)
    return redirect("/game")


@app.route("/game")
def game():
    score = trivia.score
    trivia.next_question()
    current_question = trivia.current_question
    question_number = trivia.question_number
    category = trivia.category
    return render_template("game.html", current=current_question,
                           number=question_number, cat=category, score=score)


@app.route("/answer/<choice>", methods=["GET"])
def check(choice):
    question_number = trivia.question_number
    has_next = trivia.has_next()
    message = trivia.check_answer(choice)
    score = trivia.score
    category = trivia.category
    return render_template("answer.html", message=message,
                           has_next=has_next, num=question_number, score=score, cat=category)


if __name__ == "__main__":
    app.run()
