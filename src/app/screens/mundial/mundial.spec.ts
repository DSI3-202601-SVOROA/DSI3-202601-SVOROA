import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mundial } from './mundial';

describe('Mundial', () => {
  let component: Mundial;
  let fixture: ComponentFixture<Mundial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mundial],
    }).compileComponents();

    fixture = TestBed.createComponent(Mundial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
