import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackOfficeModule } from './back-office/back-office.module';
import { FrontOfficeModule } from './front-office/front-office.module';
import { serviiceModule } from './views/serviice/serviice.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BackOfficeModule,
    FrontOfficeModule,

    HttpClientModule,

    serviiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
