import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
{path:'',redirectTo:'signin',pathMatch:'full'},
{path:'employee',component:EmployeeComponent},
{path:'signin',component:SigninComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
