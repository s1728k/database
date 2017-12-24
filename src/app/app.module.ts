import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedService } from './shared/services/shared.service';
import { AuthGuard } from './shared/services/auth-guard.service';
import { UserAccessGuard } from './shared/services/user-access-guard.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [SharedService, AuthGuard, UserAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
