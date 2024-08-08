import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestibulumComponent } from './vestibulum.component';

describe('VestibulumComponent', () => {
  let component: VestibulumComponent;
  let fixture: ComponentFixture<VestibulumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestibulumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestibulumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
