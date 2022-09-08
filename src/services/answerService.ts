import * as answerRepository from "../repositories/answerRepository";

export async function createAnswer(answeredBy: string, answer: string, questionId: number) {
    await answerRepository.insertAnswer(answeredBy, answer, questionId);
}