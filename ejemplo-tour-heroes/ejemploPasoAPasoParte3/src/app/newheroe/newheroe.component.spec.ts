import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewheroeComponent } from './newheroe.component';

describe('NewheroeComponent', () => {
  let component: NewheroeComponent;
  let fixture: ComponentFixture<NewheroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewheroeComponent]
    });
    fixture = TestBed.createComponent(NewheroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
