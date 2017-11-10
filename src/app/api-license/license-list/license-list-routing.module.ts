import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// ---- components imported----
import { LicenseListComponent } from './license-list.component';

const routes: Routes = [

  {
    path: '',
    component: LicenseListComponent,
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
export class LicenseListRoutingModule {
}
