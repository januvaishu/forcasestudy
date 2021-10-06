import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  verify2() 
  {
      var x=prompt("Enter password to access");
      if(x=="qwerty")
      {
        location.assign("http://localhost:4300/admin")
      }
      else
      {
        alert("Incorrect Password");
      }
  }
 
  verify1()
  {
      location.assign("http://localhost:4200/") 
  }

}
