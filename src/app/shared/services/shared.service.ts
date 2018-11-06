import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
	public userName: string;
	public password: string;
	public api_token: string;
	
	constructor() {}

}