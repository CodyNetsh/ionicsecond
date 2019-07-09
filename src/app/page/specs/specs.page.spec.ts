import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecsPage } from './specs.page';

describe('SpecsPage', () => {
  let component: SpecsPage;
  let fixture: ComponentFixture<SpecsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
