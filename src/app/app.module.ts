import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TypographyComponent } from './typography/typography.component';
import { HelperclassesComponent } from './helperclasses/helperclasses.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypographyComponent,
    HelperclassesComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
