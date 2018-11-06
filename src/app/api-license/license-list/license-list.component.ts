import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {SharedService} from '../../shared/services/shared.service'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.scss']
})
export class LicenseListComponent implements OnInit {

  licenseList: any[]=[];
  priceList: any[]=[];
  edit: {} = {};

  constructor(private http: HttpClient, private sharedService: SharedService,){ }

  ngOnInit(){
    this.getPrices();
  }

  getPrices(){
    let postBody = {};
    postBody['api_token'] = environment.userAccess;
    console.log(postBody);
    const url = environment.baseUrl +  "price/all";
    this.http.post(url, postBody).subscribe((data: any[]) => {
      this.priceList = data;
      this.getRecords();
    });
  }

  getRecords(){
    let postBody = {};
    postBody['api_token'] = this.sharedService.api_token;
    console.log(postBody);
    const url = environment.baseUrl +  "license/all";
    this.http.post(url, postBody).subscribe((data: any[]) => {
      this.licenseList = data;
      for (let i = 0; i < this.licenseList.length; i++) {
        this.licenseList[i]['subscription_type'] = this.findInArray(this.licenseList[i]['price_id'], 'subscription_type');
        this.licenseList[i]['price'] = this.findInArray(this.licenseList[i]['price_id'], 'price');
      }
    });
  }

  addRecord(){
    let postBody = {};
    postBody['api_token'] = this.sharedService.api_token;
    console.log(postBody);
    const url = environment.baseUrl +  "license/new";
    this.http.post(url, postBody).subscribe((data) => {
      console.log(data);
      this.getRecords();
    });
  }

  deleteRecord(i){
    let postBody = {};
    postBody['api_token'] = this.sharedService.api_token;
    console.log(postBody);
    const url = environment.baseUrl +  "license/delete/" + String(this.licenseList[i]['id']);
    this.http.post(url, postBody).subscribe(v => {console.log(v); this.getRecords();});
  }

  updateRecord(i){
    let postBody = {};
    postBody['api_token'] = this.sharedService.api_token;
    postBody['licensed_to'] = this.licenseList[i]['licensed_to'];
    postBody['price_id'] = this.licenseList[i]['price_id'];
    postBody['expiry_date'] = new Date(this.licenseList[i]['expiry_date']).toLocaleString();
    console.log(postBody);
    const url = environment.baseUrl +  "license/put/" + String(this.licenseList[i]['id']);
    this.http.post(url, postBody).subscribe((data) => {
      console.log(data);
      this.getRecords();
    });
  }

  findInArray(id:number, key:string):string{
    return this.priceList.find(x => x.id === id)[key];
  }

  changePrice(i){
    this.licenseList[i]['price'] = this.priceList[this.licenseList[i]['price_id']-1]['price'];
  }

}
