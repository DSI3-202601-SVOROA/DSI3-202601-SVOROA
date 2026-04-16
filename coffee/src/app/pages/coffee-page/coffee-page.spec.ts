import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeePage } from './coffee-page';

describe('CoffeePage', () => {
  let component: CoffeePage;
  let fixture: ComponentFixture<CoffeePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeePage],
    }).compileComponents();

    fixture = TestBed.createComponent(CoffeePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
