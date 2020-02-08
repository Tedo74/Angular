import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleItemDetailsComponent } from './single-item-details.component';

describe('SingleItemDetailsComponent', () => {
  let component: SingleItemDetailsComponent;
  let fixture: ComponentFixture<SingleItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
