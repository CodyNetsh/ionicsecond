import { Component, OnInit } from '@angular/core';
import { PERSON_LIST } from 'src/app/mocks/person.mocks';

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {

personList = PERSON_LIST;

  constructor() { }

  ngOnInit() {
  }

}
