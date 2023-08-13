import { EventRepositoryMongoose } from '@repositories/EventMongoose.repository';
import { Router } from 'express';
import { CreateEventController } from 'infra/controllers/CreateEvent.controller';
import { CreateEventService } from 'services/createEventService';

export class EventRoutes {
	public router: Router;
	private createEventController: CreateEventController;
	constructor() {
		this.router = Router();
		this.initRoutes();
		const eventRepository = new EventRepositoryMongoose();
		this.createEventController = new CreateEventController(
			new CreateEventService(eventRepository),
		);
	}
	private initRoutes() {
		this.router.post(
			'/',
			this.createEventController.handle.bind(this.createEventController),
		);
	}
}
