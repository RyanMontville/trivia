export class Trivia {
    constructor(public response_code: number,
        public results: Question[]) { }
    
    setResults(results: Question[]){
        this.results = results;
    }
}

export class Question {
    constructor(
        public category: string,
        public type: string,
        public difficulty: string,
        public question: string,
        public correct_answer: string,
        public incorrect_answers: string[]
    ) { }
}

export class QuestionObject {
    public question: string;
    public type: string;
    public category: string;
    public correctAnswer: string;
    public answers: string[];

    constructor() {
        this.question = "";
        this.type = "";
        this.category = "";
        this.correctAnswer = "";
        this.answers = [];
    }

    setQuestion(question: string) {
        this.question = question;
    }

    setType(type: string) {
        this.type = type;
    }

    setCategory(category: string) {
        this.category = category;
    }

    setCorrectAnswer(correctAnswer: string) {
        this.correctAnswer = correctAnswer;
    }

    setAnswers(answers: string[]) {
        this.answers = answers;
    }
}