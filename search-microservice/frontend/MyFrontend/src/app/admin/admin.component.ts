import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import Swal from 'sweetalert2'

interface Flight 
{
  value: string;
  viewValue: string;
}

interface Flight1
{
  value: string;
  viewValue: string;
}

interface Type1
{
  value: string;
  viewValue: string;
} 




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent implements OnInit  
{
 
  RegisterForm=new FormGroup
  ({
      Flight_id:new FormControl('',[Validators.required]),
      name:new FormControl('',[Validators.required]),
      from:new FormControl('',[Validators.required]),
      to:new FormControl('',[Validators.required]),
      departure:new FormControl('',[Validators.required]),
      price:new FormControl('',[Validators.required]),
      class1:new FormControl('',[Validators.required])
  })
  public registerObj={Flight_id:'',name:'',starting:'',ending:'',departure:'',total:'',type1:''}

   selectedvalue1:string='';
  selectedvalue:string='';
  selectedvalue2:string='';

  
  flights: Flight[] = 
  [
          {value:"Hyderabad",viewValue:"Hyderabad"},
          {value:"Mumbai",viewValue:"Mumbai"},
          {value:"Goa",viewValue:"Goa"},
          {value:"Kolkatta",viewValue:"Kolkatta"},
          {value:"Delhi",viewValue:"Delhi"},
          {value:"Banglore",viewValue:"Banglore"}
  ];

  flights1: Flight1[] = 
  [
          {value:"Hyderabad",viewValue:"Hyderabad"},
          {value:"Mumbai",viewValue:"Mumbai"},
          {value:"Goa",viewValue:"Goa"},
          {value:"Kolkatta",viewValue:"Kolkatta"},
          {value:"Delhi",viewValue:"Delhi"},
          {value:"Banglore",viewValue:"Banglore"}
  ];

  type11: Type1[] = 
  [
          {value:"Economic",viewValue:"Economic"},
          {value:"Business",viewValue:"Business"},
          {value:"Gold",viewValue:"Gold"}
  ];


  constructor(public api:ApiService) { }

  ngOnInit(): void 
  {
  }

  

  sendData()
  {  
    //console.log(this.registerObj);
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be storing it in database!',
      icon: 'warning',
     showCancelButton: true,
      confirmButtonText: 'Yes, save it!',
      cancelButtonText: 'No, donot save it'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Saved!',
          'Your data has been saved.',
          'success'
        )

        this.api.registerUser(this.registerObj);
        location.assign('/admin');
     
      }
       else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your file is not saved :)',
          'error'
        )
        location.assign('/admin');
      }
    })

   // alert("saved successfully");


  

  }  

  submitData()
  {

  }
}
