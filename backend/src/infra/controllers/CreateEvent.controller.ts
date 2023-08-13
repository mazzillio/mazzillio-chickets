import { NextFunction, Request, Response } from 'express';
import { CreateEventService } from 'services/createEventService';

export class CreateEventController {
	constructor(private readonly createEventService: CreateEventService) {}
	async handle(req: Request, res: Response, next: NextFunction) {
		const eventData = req.body;
		try {
			await this.createEventService.execute(eventData);
			return res.status(201).json({ message: 'Evento criado com sucesso' });
		} catch (error) {
			next(error);
		}
	}
}
