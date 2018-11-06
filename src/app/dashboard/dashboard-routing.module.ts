import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// ---- components imported----
import { DashboardComponent } from './dashboard.component';
import { CblmsHomeComponent } from './cblms-home/cblms-home.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: '', component: CblmsHomeComponent},
      {path: 'login', loadChildren: './login/login.module#LoginModule'},
      {path: 'signup', loadChildren: './signup/signup.module#SignupModule'},
      {path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
      {path: '**', redirectTo: 'login', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {
}
