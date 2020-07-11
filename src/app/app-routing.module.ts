import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TypographyComponent } from './typography/typography.component';
import { HelperclassesComponent } from './helperclasses/helperclasses.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path:"",              component: HomeComponent },
  { path:"typography",    component: TypographyComponent },
  { path:"helperclasses", component: HelperclassesComponent },
  { path:"forms", component: FormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
