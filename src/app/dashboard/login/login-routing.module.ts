import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// ---- components imported----
import { LoginComponent } from './login.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    // children: [
    //   {path: '', redirectTo: '', pathMatch: 'full'},
    //   {path: '**', redirectTo: '', pathMatch: 'full'},
    // ]
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
export class LoginRoutingModule {
}
