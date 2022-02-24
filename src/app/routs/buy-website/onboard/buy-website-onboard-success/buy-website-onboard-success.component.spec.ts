import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyWebsiteOnboardSuccessComponent } from './buy-website-onboard-success.component';

describe('BuyWebsiteOnboardSuccessComponent', () => {
  let component: BuyWebsiteOnboardSuccessComponent;
  let fixture: ComponentFixture<BuyWebsiteOnboardSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyWebsiteOnboardSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyWebsiteOnboardSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
