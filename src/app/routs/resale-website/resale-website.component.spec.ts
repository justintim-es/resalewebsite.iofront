import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaleWebsiteComponent } from './resale-website.component';

describe('ResaleWebsiteComponent', () => {
  let component: ResaleWebsiteComponent;
  let fixture: ComponentFixture<ResaleWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResaleWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResaleWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
