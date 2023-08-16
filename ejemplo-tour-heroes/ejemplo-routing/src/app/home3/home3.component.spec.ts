import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home3Component } from './home3.component';

describe('Home3Component', () => {
  let component: Home3Component;
  let fixture: ComponentFixture<Home3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Home3Component]
    });
    fixture = TestBed.createComponent(Home3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
