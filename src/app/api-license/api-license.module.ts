import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ApiLicenseRoutingModule } from './api-license-routing.module';

import { ApiLicenseComponent } from './api-license.component';

@NgModule({
  imports: [
    SharedModule,
    ApiLicenseRoutingModule
  ],
  declarations: [ApiLicenseComponent]
})
export class ApiLicenseModule { }
