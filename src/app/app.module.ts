import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BodyComponent } from './components/body/body.component';

//PrimeNg
import { ButtonModule } from 'primeng/button';
import { CalendarModule} from 'primeng/calendar';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
