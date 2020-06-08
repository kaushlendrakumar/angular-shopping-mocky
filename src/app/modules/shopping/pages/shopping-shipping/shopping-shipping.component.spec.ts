import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../../../../app.module';

import { ShoppingShippingComponent } from './shopping-shipping.component';

describe('ShoppingShippingComponent', () => {
  let component: ShoppingShippingComponent;
  let fixture: ComponentFixture<ShoppingShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, FormsModule],
      declarations: [ ShoppingShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
