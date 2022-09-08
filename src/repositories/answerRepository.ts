import { client } from "../config/database";

export async function insertAnswer(answeredBy: string, answer: string, questionId: number) {
    await client.answers.create({
        data: {
            answeredBy,
            answer,
            questionId
        }
    })
}