import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import Swal from 'sweetalert2'



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public token:any;
  public bool:any;
  public res1:any;
  constructor(public http:HttpClient) { }
  registerUser(registerObj:any)
  {
    this.http.post('http://localhost:1220/register',registerObj).subscribe(res=>
    {
      console.log(res);
      this.token=res;
        console.log(this.token);
        localStorage.setItem('token',this.token.token);
        //alert("Registration Success");
        location.assign("http://localhost:4200/login");
    });  
    
  }

  loginUser(loginObj:any)
  {
    this.http.post('http://localhost:1220/login',loginObj).subscribe(res =>
    {
      
        console.log(res);
        this.token=res;
        console.log(this.token);
        localStorage.setItem('token',this.token.token);
        //alert("login Success");
        //location.assign('http://localhost:4200/login')
        location.assign('http://localhost:4300/user');
      
      
      
    });
  }
  logoutUser()
  {

         
        Swal.fire({
          title: 'Are you sure?',
          text: 'You will be logged out of the website!',
          icon: 'warning',
         showCancelButton: true,
          confirmButtonText: 'Yes,logout!',
          cancelButtonText: 'No, donot logout!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Saved!',
              'Your are logged out.',
              'success'
            )
            //this.auth.logoutUser();
            localStorage.removeItem('token')
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

  // alert("Logout Success");
    
  }

loggedIn()
{
  return !!localStorage.getItem('token');
}
}
