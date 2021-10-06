
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit { 

  public registerObj={email:'',pwd:''} 

  RegisterForm=new FormGroup
  ({
      email:new FormControl('',[Validators.required]),
      pwd:new FormControl('',[Validators.required])
  })
  
submitted:boolean=false;

  constructor(public auth:AuthServiceService,
    private fb:FormBuilder  ) {

      
     } 

  ngOnInit(): void { 
  }

  
  sendData() 
  {
   
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be registered and logged in to the website!',
      icon: 'warning',
     showCancelButton: true,
      confirmButtonText: 'Yes,register!',
      cancelButtonText: 'No, donot register!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Saved!',
          'Your are registered',
          'success'
        )
        this.auth.registerUser(this.registerObj);
        location.assign('/register');
     
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your are not registered! :)',
          'error'
        )
      location.assign('/login');
      }
    })
}
  submitData()
  {

  }
}
