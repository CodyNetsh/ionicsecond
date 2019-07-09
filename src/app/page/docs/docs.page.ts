import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.page.html',
  styleUrls: ['./docs.page.scss'],
})
export class DocsPage implements OnInit {

   info : FormGroup;
   
  constructor(private formBuilder: FormBuilder) { 

    this.info = this.formBuilder.group ({
      name: ['', Validators.required],
      surname:  ['', Validators.required],
      age: [0, Validators.required],
      gender: ['', Validators.required]
    });
  }
  submit({value,valid}:{value:Person,valid:boolean}){
    console.log(value.name,value.surname,value.age,value.gender)
  }

  ngOnInit() {
  }

}
