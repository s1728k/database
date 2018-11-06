import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuard }                from '../shared/services/auth-guard.service';

// ---- components imported----
import { ApiLicenseComponent } from './api-license.component';

const routes: Routes = [

  {
    path: '',
    component: ApiLicenseComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'license-list', pathMatch: 'full'},
      {path: 'license-list', loadChildren: './license-list/license-list.module#LicenseListModule'},
      {path: 'test-bench', loadChildren: './test-bench/test-bench.module#TestBenchModule'},
      {path: 'users-list', loadChildren: './user-access/user-access.module#UserAccessModule'},
      {path: 'price-list', loadChildren: './price-list/price-list.module#PriceListModule'},
      {path: '**', redirectTo: 'license-list', pathMatch: 'full'},
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
export class ApiLicenseRoutingModule {
}
