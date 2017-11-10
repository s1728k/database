import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// ---- components imported----
import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
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
export class ContactRoutingModule {
}
