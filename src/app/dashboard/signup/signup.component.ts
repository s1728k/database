import { Component, OnInit } from '@angular/core';
import {RouterModule, Router, NavigationExtras} from '@angular/router';
import {MdSnackBar} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import {SharedService} from '../../shared/services/shared.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  register = {};
  api_token:string;

  constructor(private router: Router, 
    private snackBar: MdSnackBar,
    private sharedService: SharedService, 
    private http: HttpClient,) { }

  ngOnInit() {
    this.api_token = environment.userAccess;
  }

  signup(){
    let postBody = {};
    postBody['api_token'] = this.api_token;
    postBody['name'] = this.register['name'];
    postBody['phone'] = this.register['phone'];
    postBody['email'] = this.register['email'];
    postBody['message'] = this.register['message'];
    
    console.log(postBody);
    const url = environment.baseUrl + "user/register";
    this.http.post(url, postBody).subscribe((data) => {
      console.log(data);
      this.openSnackBar("Email confirmation link has been sent to your email account", "");
    });
  }  

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
