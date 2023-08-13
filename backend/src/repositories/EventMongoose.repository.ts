import { EventModel } from '../infra/mongodb/eventModel';
import { Event } from '../entities/Event';
import { EventRepository } from './Event.repository';

export class EventRepositoryMongoose implements EventRepository {
	async add(event: Event): Promise<Event> {
		const eventModel = new EventModel(event);
		await eventModel.save();
		return event;
	}
}
