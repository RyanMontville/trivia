class TriviaBrain:
    def __init__(self, q_list, category):
        self.question_number = 0
        self.score_num = 0
        self.score = ""
        self.question_list = q_list
        self.num_questions = len(q_list)
        self.current_question = None
        self.category = category

    def next_question(self):
        self.current_question = self.question_list[self.question_number]
        self.question_number += 1

    def check_answer(self, user_answer):
        correct_answer = self.current_question.correct_answer
        if user_answer == correct_answer["url"]:
            self.score_num += 1
            self.score = f"{self.score_num}/{self.question_number}"
            return "Correct!"
        else:
            self.score = f"{self.score_num}/{self.question_number}"
            return f"Incorrect. The correct answer was {correct_answer['text']}"

    def has_next(self):
        if self.question_number < self.num_questions:
            return True
        else:
            return False
