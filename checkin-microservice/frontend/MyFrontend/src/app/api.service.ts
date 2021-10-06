import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import Swal from 'sweetalert2'




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }
  check1(registerObj:any)
  {
    console.log(registerObj);
    this.http.post('http://localhost:4000/user',registerObj).subscribe(res=>
    {
      
      console.log(res); 
      if(res)
      {

        Swal.fire({
          title: 'Are you sure?',
          text: 'You will be checked-in!',
          icon: 'warning',
         //showCancelButton: true,
          confirmButtonText: 'Yes, checkin!',
         // cancelButtonText: 'No, donot save it'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Saved!',
              'Your are checked-in.',
              'success'
            )
           
            location.assign('/checkin');
         
          }
     // alert("checkIn Success");
       // location.assign('/checkin')

      })
    }
        
      else
      {
        Swal.fire({
          title: 'Are you sure?',
          text: 'You will not be checked-in!',
          icon: 'warning',
         //showCancelButton: true,
          confirmButtonText: 'some error in Booking-Id!',
         // cancelButtonText: 'No, donot save it'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Saved!',
              'Try again.',
              'warning'
            )
           
            location.assign('/checkin');
         
          }
     // alert("checkIn Success");
       // location.assign('/checkin')

      })
        
      }
   
})
  }
}
