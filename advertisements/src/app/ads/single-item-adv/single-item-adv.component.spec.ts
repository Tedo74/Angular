import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleItemAdvComponent } from './single-item-adv.component';

describe('SingleItemAdvComponent', () => {
  let component: SingleItemAdvComponent;
  let fixture: ComponentFixture<SingleItemAdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleItemAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleItemAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
