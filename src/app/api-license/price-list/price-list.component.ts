import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {SharedService} from '../../shared/services/shared.service'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {

  priceList: any[]=[];
  edit: {} = {};

  constructor(private http: HttpClient, private sharedService: SharedService,){ }

  ngOnInit(){
  	this.getRecords();
  }

  getRecords(){
    let postBody = {};
    postBody['api_token'] = this.sharedService.api_token;
    console.log(postBody);
    const url = environment.baseUrl +  "price/all";
    this.http.post(url, postBody).subscribe((data: any[]) => {
      this.priceList = data;
    });
  }

  addRecord(){
    let postBody = {};
    postBody['api_token'] = this.sharedService.api_token;
    postBody['subscription_type'] = "OneTimeActivation";
    postBody['price'] = "100";
    console.log(postBody);
    const url = environment.baseUrl +  "price/new";
    this.http.post(url, postBody).subscribe((data) => {
      console.log(data);
      this.getRecords();
    });
  }

  deleteRecord(i){
    let postBody = {};
    postBody['api_token'] = this.sharedService.api_token;
    console.log(postBody);
    const url = environment.baseUrl +  "price/delete/" + String(this.priceList[i]['id']);
    this.http.post(url, postBody).subscribe(v => {console.log(v); this.getRecords();});
  }

  updateRecord(i){
    let postBody = {};
    postBody['api_token'] = this.sharedService.api_token;
    postBody['subscription_type'] = this.priceList[i]['subscription_type'];
    postBody['price'] = this.priceList[i]['price'];
    console.log(postBody);
    const url = environment.baseUrl +  "price/put/" + String(this.priceList[i]['id']);
    this.http.post(url, postBody).subscribe((data) => {
      console.log(data);
      this.getRecords();
    });
  }

}
