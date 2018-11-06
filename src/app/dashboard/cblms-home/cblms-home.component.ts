import { Component, OnInit } from '@angular/core';
import {RouterModule, Router, NavigationExtras} from '@angular/router';
declare let $ : any;

@Component({
  selector: 'app-cblms-home',
  templateUrl: './cblms-home.component.html',
  styleUrls: ['./cblms-home.component.css']
})
export class CblmsHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  	$(document).ready(function(){
      $('.carousel').carousel();
      $(".dropdown-button").dropdown();
       $('.carousel.carousel-slider').carousel({fullWidth: true});
    });
  }

  route(route: string): void {
    this.router.navigate([route]);
  }

}
