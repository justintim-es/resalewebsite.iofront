import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyWebsiteComponent } from './buy-website.component';

describe('BuyWebsiteComponent', () => {
  let component: BuyWebsiteComponent;
  let fixture: ComponentFixture<BuyWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
