import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UserAccessRoutingModule } from './user-access-routing.module';
import { UserAccessComponent } from './user-access.component';

@NgModule({
  imports: [
    SharedModule,
    UserAccessRoutingModule
  ],
  declarations: [UserAccessComponent]
})
export class UserAccessModule { }
