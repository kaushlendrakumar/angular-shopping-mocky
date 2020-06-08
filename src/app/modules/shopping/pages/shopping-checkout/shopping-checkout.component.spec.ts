import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../../../app.module';

import { ShoppingCheckoutComponent } from './shopping-checkout.component';

describe('ShoppingCheckoutComponent', () => {
  let component: ShoppingCheckoutComponent;
  let fixture: ComponentFixture<ShoppingCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ ShoppingCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
