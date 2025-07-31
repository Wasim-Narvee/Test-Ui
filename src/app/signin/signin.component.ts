import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestService } from '../test.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signin!:FormGroup;

constructor(private formbulider:FormBuilder, private test:TestService, private router:Router){

this.signin=this.formbulider.group({

  name :[''],
  email :[''],

password :['']



});




}
savedata(){
console.log(this.signin.value,'signinnnnnnn');


this.test.postUsersdata(this.signin.value).subscribe ({

next : (res)=> {
 
  console.log('Data Saved',res);

  this.router.navigate (['/dashboard'])


},

error : (err) =>{ 

  console.log('Check your Name/email ',err);
}


})





}

}
