interface IPropsUser {
	name: string;
	email: string;
}
export class User {
	private propsUser: IPropsUser;
	constructor(props: IPropsUser) {
		this.propsUser = props;
	}
	public get name() {
		return this.propsUser.name;
	}
	public get email() {
		return this.propsUser.email;
	}
}
