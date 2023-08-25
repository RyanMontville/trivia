import html


class Question:
    def __init__(self, q_text, q_answers, c_answer, q_type):
        self.text = html.unescape(q_text)
        self.answers = q_answers
        self.correct_answer = c_answer
        self.question_type = q_type
