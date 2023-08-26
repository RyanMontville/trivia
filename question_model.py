import html


class Question:
    def __init__(self, q_text, q_answers, c_answer, q_type):
        self.text = html.unescape(q_text)
        self.answers = html.unescape(q_answers)
        self.correct_answer = html.unescape(c_answer)
        self.question_type = q_type
        self.urls = self.answer_urls()

    def answer_urls(self):
        urls = []
        for answer in self.answers:
            removed = answer.replace(" ", "-")
            new_dict = {"text": answer, "url": removed}
            urls.append(new_dict)
        return urls
