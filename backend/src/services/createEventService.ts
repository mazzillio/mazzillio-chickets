import { EventRepository } from '@repositories/Event.repository';
import { Event } from 'entities/Event';

export class CreateEventService {
	constructor(private readonly eventRepository: EventRepository) {}
	async execute(eventData: Event) {
		const event = await this.eventRepository.add(eventData);
		return event;
	}
}
