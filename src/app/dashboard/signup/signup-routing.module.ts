import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// ---- components imported----
import { SignupComponent } from './signup.component';

const routes: Routes = [

  {
    path: '',
    component: SignupComponent,
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
export class SignupRoutingModule {
}
