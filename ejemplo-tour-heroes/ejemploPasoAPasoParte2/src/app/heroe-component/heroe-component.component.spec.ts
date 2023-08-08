import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeComponentComponent } from './heroe-component.component';

describe('HeroeComponentComponent', () => {
  let component: HeroeComponentComponent;
  let fixture: ComponentFixture<HeroeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroeComponentComponent]
    });
    fixture = TestBed.createComponent(HeroeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
