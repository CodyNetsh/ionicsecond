import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name:String;
  surname:String;
  age:String;
  gender:String;

  constructor(private router:Router){}

  nextpage() { 
    console.log(this.name) 
    console.log(this.surname) 
    console.log(this.age) 
    console.log(this.gender) 
    this.router.navigateByUrl('/tabs/details')
    }
}


