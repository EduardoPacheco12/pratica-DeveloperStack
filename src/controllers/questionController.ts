import { Request, Response } from 'express';
import * as questionService from '../services/questionService';
import * as answerService from '../services/answerService';

export async function createQuestion(req: Request, res: Response) {
  const askedBy: string = req.body.askedBy;
  const question: string = req.body.question;

  await questionService.createQuestion(askedBy, question);
  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const answeredBy: string = req.body.answeredBy;
  const answer: string = req.body.answer;
  const questionId: number = Number(req.params.id);

  await answerService.createAnswer(answeredBy, answer, questionId);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  
  const result = await questionService.get();
  res.status(200).send(result);
}

export async function getById(req: Request, res: Response) {
  const questionId = Number(req.params.id)

  const result = await questionService.getById(questionId);
  res.status(200).send(result);
}
