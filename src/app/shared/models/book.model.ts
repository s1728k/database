export class Book {
	id: number;
	name: string;
	category: string;
	description: string;
	published_on: Date;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}