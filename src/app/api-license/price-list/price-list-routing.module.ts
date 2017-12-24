import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UserAccessGuard }                from '../../shared/services/user-access-guard.service';

// ---- components imported----
import { PriceListComponent } from './price-list.component';

const routes: Routes = [

  {
    path: '',
    component: PriceListComponent,
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
export class PriceListRoutingModule {
}
