class TriviaBrain:
    def __init__(self, q_list):
        self.question_number = 0
        self.score = 0
        self.question_list = q_list
        self.num_questions = len(q_list)
        self.current_question = None

    def next_question(self):
        self.current_question = self.question_list[self.question_number]
        self.question_number += 1

    def check_answer(self, user_answer):
        correct_answer = self.current_question.correct_answer
        if user_answer == correct_answer["url"]:
            self.score += 1
            return "Correct!"
        else:
            return f"Incorrect. The correct answer was {correct_answer['text']}"

    def has_next(self):
        if self.question_number < self.num_questions:
            return True
        else:
            return False
