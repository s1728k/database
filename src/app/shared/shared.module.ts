import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MaterialModule, MdButtonModule, MdCheckboxModule, MdNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AmexioWidgetModule } from 'amexio-ng-extensions';

// import { MIconComponent } from './m-icon/m-icon.component';

@NgModule({
  imports: [
    CommonModule,
    AmexioWidgetModule,
    // MaterialModule, MdButtonModule, MdCheckboxModule, MdNativeDateModule,
    FormsModule, HttpClientModule, HttpModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    AmexioWidgetModule,
    // MaterialModule, MdButtonModule, MdCheckboxModule, MdNativeDateModule,
    FormsModule, HttpClientModule, HttpModule,
  ],
})
export class SharedModule { }
