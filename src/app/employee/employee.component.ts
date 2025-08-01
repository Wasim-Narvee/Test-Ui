import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
constructor(private testservice:TestService){}
showemployee :any[] =[];
showTable :boolean= false;

ngOnInit():void{
  this.getemployee();
}

getemployee():void{
  this.testservice.getEmployee().subscribe(data=>{
    console.log(data,'resssss');
    
    this.showemployee=data;
    
  })
};

toogleshoeemployee(){
  
   this.showTable =!this.showTable;

}

}
