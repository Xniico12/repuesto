import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAutorizationComponent } from './orders-autorization.component';

describe('OrdersAutorizationComponent', () => {
  let component: OrdersAutorizationComponent;
  let fixture: ComponentFixture<OrdersAutorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersAutorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersAutorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
