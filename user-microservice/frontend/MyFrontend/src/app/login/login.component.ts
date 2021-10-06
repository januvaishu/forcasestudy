import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{

  title = 'MyFrontend';
  [x: string]: any;
  componentName="LoginComponent";
  

  LoginForm=new FormGroup
  ({
      email:new FormControl('',[Validators.required]),
      pwd:new FormControl('',[Validators.required])
  })
  public loginObj={email:'',pwd:''} 
  boo:any;
  constructor(public auth:AuthServiceService) { }

  ngOnInit(): void { }
  login() 
  {
      
      //alert("login success")
      //location.assign('http://localhost:4300/user'); 

      Swal.fire({
        title: 'Are you sure?',
        text: 'You will be logged in to the website!',
        icon: 'warning',
       showCancelButton: true,
        confirmButtonText: 'Yes,login!',
        cancelButtonText: 'No, donot login!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Saved!',
            'Your are logged in.',
            'success'
          )
          this.auth.loginUser(this.loginObj);
         // location.assign('/login');
       
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Your are not loggedin! :)',
            'error'
          )
        location.assign('/login');
        }
      })
  }
  /*logout()
  {
           
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will be logged out of the website!',
        icon: 'warning',
       showCancelButton: true,
        confirmButtonText: 'Yes,log out!',
        cancelButtonText: 'No, donot log out!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Saved!',
            'Your are logged out.',
            'success'
          )
          this.auth.logoutUser();
          location.assign('/login');
       
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Your are not loggedout:)',
            'error'
          )
        location.assign('/login');
        }
      })
}*/
  submitData()
  { 
    
  }

}
