import { Component, OnInit } from '@angular/core';
import {RouterModule, Router, NavigationExtras} from '@angular/router';
import {MdSnackBar} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import {SharedService} from '../../shared/services/shared.service';
import { AuthGuard } from '../../shared/services/auth-guard.service';
import { UserAccessGuard } from '../../shared/services/user-access-guard.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	email: string;
  password: string;
  api_token: string;

  constructor(private router: Router, 
    private sharedService: SharedService, 
    private authGuard: AuthGuard, 
    private userAccessGuard: UserAccessGuard,
    private snackBar: MdSnackBar,
    private http: HttpClient,) { }

  ngOnInit() {
  }

  login(){
    let postBody = {};
    postBody['api_token'] = this.api_token;
    console.log(postBody);
    const url = environment.baseUrl + "user/login";
    this.http.post(url, postBody).subscribe((data) => {
      console.log(data);
      if(data){
        this.sharedService.api_token = data['api_token'];
        this.authGuard.isLoggedIn = true;
        if(data['api_token'] === environment.userAccess){
          this.userAccessGuard.permitUserAccess = true;
        }
        this.router.navigate(['api-license']);
        this.openSnackBar("Login Successful", "");
      }else{
        this.openSnackBar("Login Failed", "");
      }
      
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
