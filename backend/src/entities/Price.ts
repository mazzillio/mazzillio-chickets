interface IPropsPrice {
	amount: string;
	sector: string;
}
export class Price {
	private propsPrice: IPropsPrice;
	constructor(props: IPropsPrice) {
		this.propsPrice = props;
	}
	public get amount() {
		return this.propsPrice.amount;
	}
	public get sector() {
		return this.propsPrice.sector;
	}
}
