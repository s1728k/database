import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'cblms-home', pathMatch: 'full' },
  { path: 'cblms-home', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  // { path: 'api-license', loadChildren: 'app/api-license/api-license.module#ApiLicenseModule'},
  { path: '**', redirectTo: 'cblms-home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
