import { Component, OnInit } from '@angular/core';
import {RouterModule, Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-cblms-home',
  templateUrl: './cblms-home.component.html',
  styleUrls: ['./cblms-home.component.css']
})
export class CblmsHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  route(route: string): void {
    this.router.navigate([route]);
  }

}
