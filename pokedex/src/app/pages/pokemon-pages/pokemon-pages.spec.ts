import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPages } from './pokemon-pages';

describe('PokemonPages', () => {
  let component: PokemonPages;
  let fixture: ComponentFixture<PokemonPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonPages],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
