export type Question = {
    category: string;
    correct_answer:string;
    difficulty:string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[]}

export enum Difficulty{
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuestions = async (amount:number, difficulty:Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    // Await promise, then json
    const res = await fetch(endpoint)
    const data = await(res).json()
    console.log('Data:', data)
    return data.results.map((question:Question) =>({
        ...question,
        answers:[...question.incorrect_answers, question.correct_answer]
    }))
}