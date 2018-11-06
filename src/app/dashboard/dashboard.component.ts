import {Component, OnInit} from '@angular/core';
import {RouterModule, Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  route(route: string): void {
    this.router.navigate([route]);
  }

  signup(){
  	
  }

}
