import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RationStockInfoComponent } from './ration-stock-info.component';

describe('RationStockInfoComponent', () => {
  let component: RationStockInfoComponent;
  let fixture: ComponentFixture<RationStockInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RationStockInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RationStockInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
