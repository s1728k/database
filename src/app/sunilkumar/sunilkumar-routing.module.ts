import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// ---- components imported----
import { SunilkumarComponent } from './sunilkumar.component';

const routes: Routes = [

  {
    path: '',
    component: SunilkumarComponent,
    // children: [
    //   {path: '', redirectTo: '', pathMatch: 'full'},
    //   {path: '**', redirectTo: '', pathMatch: 'full'},
    // ]
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
export class SunilkumarRoutingModule {
}
