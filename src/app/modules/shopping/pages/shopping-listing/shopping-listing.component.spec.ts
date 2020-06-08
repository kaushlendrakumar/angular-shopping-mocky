import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../../../app.module';

import { ShoppingListingComponent } from './shopping-listing.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { ShoppingCardComponent } from '../../components/shopping-card/shopping-card.component'

describe('ShoppingListingComponent', () => {
  let component: ShoppingListingComponent;
  let fixture: ComponentFixture<ShoppingListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ LoaderComponent, ShoppingCardComponent, ShoppingListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
