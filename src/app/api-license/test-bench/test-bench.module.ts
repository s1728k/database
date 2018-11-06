import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TestBenchRoutingModule } from './test-bench-routing.module';
import { TestBenchComponent } from './test-bench.component';

@NgModule({
  imports: [
    SharedModule,
    TestBenchRoutingModule
  ],
  declarations: [TestBenchComponent]
})
export class TestBenchModule { }
