import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JqxGridWidgetComponent } from './jqx-grid-widget.component';

describe('JqxGridWidgetComponent', () => {
  let component: JqxGridWidgetComponent;
  let fixture: ComponentFixture<JqxGridWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JqxGridWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JqxGridWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
