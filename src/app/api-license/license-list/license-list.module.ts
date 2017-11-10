import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LicenseListRoutingModule } from './license-list-routing.module';
import { LicenseListComponent } from './license-list.component';

@NgModule({
  imports: [
    SharedModule,
    LicenseListRoutingModule
  ],
  declarations: [LicenseListComponent]
})
export class LicenseListModule { }
