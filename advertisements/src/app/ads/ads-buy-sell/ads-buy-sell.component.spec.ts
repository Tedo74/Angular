import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsBuySellComponent } from './ads-buy-sell.component';

describe('AdsBuySellComponent', () => {
  let component: AdsBuySellComponent;
  let fixture: ComponentFixture<AdsBuySellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsBuySellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsBuySellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
