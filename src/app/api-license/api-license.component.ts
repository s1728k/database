import {Component, ViewEncapsulation, OnInit, ViewChild, ViewChildren, QueryList, ElementRef} from '@angular/core';
import {RouterModule, Router, NavigationExtras} from '@angular/router';
// import {MdSnackBar} from '@angular/material';
import { HttpClient } from '@angular/common/http'
import {SharedService} from '../shared/services/shared.service'
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-api-license',
  templateUrl: './api-license.component.html',
  styleUrls: ['./api-license.component.css'],
  // host: {
  //   '(document:click)': 'onClick($event)',
  // },
})
export class ApiLicenseComponent {

  // @ViewChild('userpop') div: ElementRef;
  // @ViewChild('userimg') img: ElementRef;
  // @ViewChild('userbtn') span: ElementRef;

  email: string;
  password: string;
  api_token: string;

  userBool: boolean;
  showLoginScreen = true;

  flag: boolean[]=[];

  menus: any[][]=[
  ['Home'],
  ['License List'],
  ['Test Bench'],
  // ['License', 'DeviceDependent', 'DeviceIndependent'], 
  ];

  paths: any[][]=[
  ['/cblms-home'],
  ['/api-license/license-list'],
  ['/api-license/test-bench'],
  // ['/api-license', '/device-dependent-license', '/device-independent-license'], 
  ];

  constructor(private router: Router, 
    private sharedService: SharedService, 
    private http: HttpClient,
    // private snackBar: MdSnackBar,
    ){ }

  ngOnInit(){
    this.api_token = this.sharedService.api_token;
    if (this.api_token === environment.userAccess){
      this.menus.push(['Price List']);
      this.paths.push(['/api-license/price-list']);
      this.menus.push(['Users List']);
      this.paths.push(['/api-license/users-list']);
    }
  }

  openSnackBar(message: string, action: string) {
    // this.snackBar.open(message, action, {
    //   duration: 2000,
    // });
  }

  route(route: string): void {
    this.router.navigate([route]);
  }

  changeFlag(i): void {
    if (this.flag[i]) {
      this.flag[i] = false;
    } else {
      this.flag[i] = true;
    }
  }

  // onClick(event) {
  //   if (!this.div.nativeElement.contains(event.target) && this.span.nativeElement !== event.target) {
  //     this.userBool = false;
  //   }
  // }

}

