import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// ---- components imported----
import { TestBenchComponent } from './test-bench.component';

const routes: Routes = [

  {
    path: '',
    component: TestBenchComponent,
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
export class TestBenchRoutingModule {
}
