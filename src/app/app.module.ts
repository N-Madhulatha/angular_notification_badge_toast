import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BadgeDirective } from './badge.directive';
import { HeaderComponent } from './header/header.component';
import { ToastComponent } from './toast/toast.component';


@NgModule({
  declarations: [
    AppComponent,
    BadgeDirective,
    HeaderComponent,
    ToastComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
