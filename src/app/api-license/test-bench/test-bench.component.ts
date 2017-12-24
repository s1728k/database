import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {SharedService} from '../../shared/services/shared.service'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-test-bench',
  templateUrl: './test-bench.component.html',
  styleUrls: ['./test-bench.component.scss']
})
export class TestBenchComponent implements OnInit {

  licenseActivateInp = {};
  licenseDeactivateInp = {};
  licenseActivateOut = {};
  licenseDeactivateOut = {};
  edit: {} = {};

  constructor(private http: HttpClient, private sharedService: SharedService,){ }

  ngOnInit(){
  	this.licenseActivateInp['api_token'] = this.sharedService.api_token;
    this.licenseDeactivateInp['api_token'] = this.sharedService.api_token;
  }

  activateSerialLicense(){
    let postBody = {};
    postBody['api_token'] = this.sharedService.api_token;
    postBody['serial_no'] = this.licenseActivateInp['serial_no'];
    console.log(postBody);
    const url = environment.baseUrl +  "license/activate";
    this.http.post(url, postBody).subscribe((data: any[]) => {
      this.licenseActivateOut = data;
    });
  }

  deActivateSerialLicense(){
    let postBody = {};
    postBody['api_token'] = this.sharedService.api_token;
    postBody['serial_no'] = this.licenseDeactivateInp['serial_no'];
    postBody['product_key'] = this.licenseDeactivateInp['product_key'];
    console.log(postBody);
    const url = environment.baseUrl +  "license/deactivate";
    this.http.post(url, postBody).subscribe((data: any[]) => {
      this.licenseDeactivateOut = data;
    });
  }

}
