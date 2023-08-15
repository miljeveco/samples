import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgbase64Component } from './imgbase64.component';

describe('Imgbase64Component', () => {
  let component: Imgbase64Component;
  let fixture: ComponentFixture<Imgbase64Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Imgbase64Component]
    });
    fixture = TestBed.createComponent(Imgbase64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
