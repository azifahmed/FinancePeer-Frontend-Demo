import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';
import { DatapageComponent } from './datapage/datapage.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LogoffComponent } from './logoff/logoff.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsComponent,
    ErrorComponent,
    DatapageComponent,
    ToolbarComponent,
    LogoffComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
