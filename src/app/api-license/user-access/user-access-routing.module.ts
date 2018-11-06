import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UserAccessGuard }                from '../../shared/services/user-access-guard.service';

// ---- components imported----
import { UserAccessComponent } from './user-access.component';

const routes: Routes = [

  {
    path: '',
    component: UserAccessComponent,
    canActivate: [UserAccessGuard],
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
export class UserAccessRoutingModule {
}
