import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PriceListRoutingModule } from './price-list-routing.module';
import { PriceListComponent } from './price-list.component';

@NgModule({
  imports: [
    SharedModule,
    PriceListRoutingModule
  ],
  declarations: [PriceListComponent]
})
export class PriceListModule { }
