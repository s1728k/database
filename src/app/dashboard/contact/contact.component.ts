import { Component, OnInit } from '@angular/core';
import {RouterModule, Router, NavigationExtras} from '@angular/router';
// import {MdSnackBar} from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SharedService} from '../../shared/services/shared.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  visitor = {};

  constructor(private router: Router, 
    private sharedService: SharedService, 
    private http: HttpClient,
    // private snackBar: MdSnackBar,
    ) { }

  ngOnInit() {
    
  }

  sendVisitorDetails(){
    let postBody = {};
    postBody['api_token'] = environment.userAccess;
    postBody['name'] = this.visitor['name'];
    postBody['phone'] = this.visitor['phone'];
    postBody['email'] = this.visitor['email'];
    postBody['message'] = this.visitor['message'];
    
    console.log(postBody);
    const url = environment.baseUrl + "contact/new";
    console.log(url);

    this.http.post(url, postBody).subscribe((data) => {
      console.log(data);
      if(data){
        this.openSnackBar("Thanks For Contacting. We Appriciate Your FeedBack", "");
      }else{
        this.openSnackBar("Your details have not been sent. Try again!", "");
      }
    });
  }

  openSnackBar(message: string, action: string) {
    // this.snackBar.open(message, action, {
    //   duration: 2000,
    // });
  }

}
