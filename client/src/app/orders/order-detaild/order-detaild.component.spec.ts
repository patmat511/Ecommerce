import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetaildComponent } from './order-detaild.component';

describe('OrderDetaildComponent', () => {
  let component: OrderDetaildComponent;
  let fixture: ComponentFixture<OrderDetaildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDetaildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
