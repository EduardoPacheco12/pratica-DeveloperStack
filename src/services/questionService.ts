import * as questionRepository from "../repositories/questionRepository";

export async function createQuestion(askedBy: string, question: string) {
    await questionRepository.insertQuestion(askedBy, question);
}

export async function get() {
    const result = await questionRepository.getQuestions();

    return result;
}

export async function getById(questionId: number) {
    const result = await questionRepository.getQuestion(questionId);

    return result;
}
