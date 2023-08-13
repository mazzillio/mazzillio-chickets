interface IPropsLocation {
	latitude: string;
	longitude: string;
}
export class Location {
	private propsLocation: IPropsLocation;
	constructor(props: IPropsLocation) {
		this.propsLocation = props;
	}
	public get latitude() {
		return this.propsLocation.latitude;
	}
	public get longitude() {
		return this.propsLocation.longitude;
	}
}
