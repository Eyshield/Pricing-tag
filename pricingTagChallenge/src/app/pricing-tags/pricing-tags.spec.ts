import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTags } from './pricing-tags';

describe('PricingTags', () => {
  let component: PricingTags;
  let fixture: ComponentFixture<PricingTags>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingTags]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingTags);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
