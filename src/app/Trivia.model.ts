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