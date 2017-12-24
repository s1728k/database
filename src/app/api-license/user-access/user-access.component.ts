import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {SharedService} from '../../shared/services/shared.service'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.scss']
})
export class UserAccessComponent implements OnInit {

  userList: any[]=[];
  edit: {} = {};

  constructor(private http: HttpClient, private sharedService: SharedService,){ }

  ngOnInit(){
  	this.getRecords();
  }

  getRecords(){
    let postBody = {};
    postBody['api_token'] = this.sharedService.api_token;
    console.log(postBody);
    const url = environment.baseUrl +  "user/all";
    this.http.post(url, postBody).subscribe((data: any[]) => {
      this.userList = data;
    });
  }

  addRecord(){
    let postBody = {};
    // postBody['api_token'] = this.sharedService.api_token;
    console.log(postBody);
    const url = environment.baseUrl +  "user/new";
    this.http.post(url, postBody).subscribe((data) => {
      console.log(data);
      this.getRecords();
    });
  }

  deleteRecord(i){
    let postBody = {};
    postBody['api_token'] = this.sharedService.api_token;
    console.log(postBody);
    const url = environment.baseUrl +  "user/delete/" + String(this.userList[i]['id']);
    this.http.post(url, postBody).subscribe(v => {console.log(v); this.getRecords();});
  }

  updateRecord(i){
    let postBody = {};
    postBody['api_token'] = this.sharedService.api_token;
    postBody['api_token'] = this.userList[i]['message'];
    postBody['message'] = this.userList[i]['message'];
    console.log(postBody);
    const url = environment.baseUrl +  "user/put/" + String(this.userList[i]['id']);
    this.http.post(url, postBody).subscribe((data) => {
      console.log(data);
      this.getRecords();
    });
  }

}
