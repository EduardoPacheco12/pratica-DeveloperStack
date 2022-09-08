import { client } from "../config/database";

export async function insertQuestion(askedBy: string, question: string) {
    await client.questions.create({
        data: {
            askedBy,
            question
        }
    })
}

export async function getQuestions() {
    return await client.questions.findMany();
}

export async function getQuestion(questionId: number) {
    return await client.questions.findUnique({
        where: {
            id: questionId
        },
        include: { answers: {select: { answeredBy: true, answer: true } } }
    })
}