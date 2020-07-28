import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormbuilderComponent } from './reactive-formbuilder/reactive-formbuilder.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';

const routes: Routes = [
  { path:'', component: ReactiveFormsComponent },
  { path:'ReactiveFormControl', component: ReactiveFormsComponent },
  { path:'TemplateDrivenForms', component: TemplateDrivenFormsComponent },
  { path:'ReactiveFormBuilder', component: ReactiveFormbuilderComponent },
  { path:'customers', component: CustomerComponent },
  { path:'customers/:id', component: CustomerprofileComponent },
  { path:'employees', component: EmployeesComponent },  
  { path:'employee', component: EmployeeComponent },
  { path:'observable', component: ObservableComponent, 
    children : [
      { path: '', component: ListComponent },
      { path: 'fromEvent', component: FromEventComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
