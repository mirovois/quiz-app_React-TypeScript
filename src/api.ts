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
}