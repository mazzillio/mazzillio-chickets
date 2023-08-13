import { Location } from './Location';
import { Price } from './Price';
import { User } from './User';

interface IPropsEvent {
	title: string;
	location: Location;
	date: Date;
	description: string;
	banner: string;
	flyers: string[];
	cupons: string[];
	participants: User[];
	price: Price[];
	city: string;
	categories: string[];
}
export class Event {
	private propsEvent: IPropsEvent;
	constructor(public props: IPropsEvent) {
		this.propsEvent = props;
	}
	public get title() {
		return this.propsEvent.title;
	}
	public get location() {
		return this.propsEvent.location;
	}
	public get date() {
		return this.propsEvent.date;
	}
	public get description() {
		return this.propsEvent.description;
	}
	public get banner() {
		return this.propsEvent.banner;
	}
	public get cupons() {
		return this.propsEvent.cupons;
	}
	public get participants() {
		return this.propsEvent.participants;
	}
	public get price() {
		return this.propsEvent.price;
	}
	public get city() {
		return this.propsEvent.city;
	}
	public get categories() {
		return this.propsEvent.categories;
	}
	public get flyers() {
		return this.propsEvent.flyers;
	}
}
