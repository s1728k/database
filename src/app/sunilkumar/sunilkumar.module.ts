import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SunilkumarRoutingModule } from './sunilkumar-routing.module';
import { SunilkumarComponent } from './sunilkumar.component';

@NgModule({
  imports: [
    SharedModule,

  ],
  declarations: [SunilkumarComponent]
})
export class SunilkumarModule { }
