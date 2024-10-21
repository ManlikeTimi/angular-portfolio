import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponentComponent } from './spinner-component/spinner-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
